import { ProjectDemoData } from "../types/projectDemo"
      
export const tradingFramework: ProjectDemoData = {
      id: '2',
      title: 'Live Trading Framework - Code Demo',
      description: 'Python-based automated trading system implementation',
      codeSamples: [
        {
          label: 'Initial Setup and ansyncio Loop',
          description: 'Python-based live trading system with async event loop',
          code: `"""
Live Options Trading Framework
================================
Automated intraday SPY options trading system with ML-based signal generation.

Key Components:
- Real-time market data streaming via Tastytrade dxFeed WebSocket
- XGBoost ML model for volatility prediction
- Alpaca API for order execution
- Pluggable strategy architecture
- Daily auto-shutdown at market close

"""

import os
import time as t
import asyncio
from urllib.parse import urlparse

import pandas as pd
import websockets
import contextlib

from tastytrade_sdk import Tastytrade
from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce

from dataclasses import dataclass
from typing import Literal, Callable
import datetime
import json
import pytz
import xgboost as xgb

from dotenv import load_dotenv

load_dotenv()

# ============================================================================
# TYPE DEFINITIONS
# ============================================================================

Timeframe = Literal["1s", "5s", "10s", "30s", "1m"]


# ============================================================================
# DATA CLASSES
# ============================================================================

@dataclass
class Config:
    """
    Configuration for trading system.
    
    Attributes:
        dataNeeded: List of (symbol, timeframe) tuples for data requirements
        signalUpdate: Frequency of signal updates
    """
    dataNeeded: list[tuple[str, str]]
    signalUpdate: Literal["1s", "5s", "10s", "30s", "1m"]


@dataclass
class OTM_Logic:
    """
    Out-of-the-money strike selection logic based on time of day.
    
    Attributes:
        otm_logic: Maps time ranges to OTM dollar amounts
                   Example: {(9:30, 15:00): 2} means $2 OTM during regular hours
    """
    otm_logic: dict[tuple[datetime.time, datetime.time], int]


@dataclass
class Helper_Funcs:
    """
    Container for strategy helper functions.
    
    Attributes:
        funcs: Dictionary mapping function names to callable functions
    """
    funcs: dict[str, Callable]


@dataclass
class Position:
    """
    Tracks state of an options position (call, put, or straddle).
    
    Call Side Attributes:
        call_time_entered: When call position was opened
        call_time_exited: When call position was closed
        call_symbol: Option ticker symbol
        call_strike: Strike price
        call_entry_price: Entry price per contract
        call_contract_qty: Number of contracts
        call_current_price: Function to fetch current price
        call_exit_price: Exit price per contract
    
    Put Side Attributes:
        put_time_entered: When put position was opened
        put_time_exited: When put position was closed
        put_symbol: Option ticker symbol
        put_strike: Strike price
        put_entry_price: Entry price per contract
        put_contract_qty: Number of contracts
        put_current_price: Function to fetch current price
        put_exit_price: Exit price per contract
    
    Other:
        extraInfo: Dictionary for strategy-specific data (stops, targets, etc.)
    """
    call_time_entered: datetime.datetime | None
    call_time_exited: datetime.datetime | None
    call_symbol: str | None
    call_strike: int | None
    call_entry_price: float | None
    call_contract_qty: int | None
    call_current_price: Callable | None
    call_exit_price: int | None

    put_time_entered: datetime.datetime | None
    put_time_exited: datetime.datetime | None
    put_symbol: str | None 
    put_strike: int | None
    put_entry_price: float | None
    put_contract_qty: int | None
    put_current_price: Callable | None
    put_exit_price: float | None

    extraInfo: dict | None


# ============================================================================
# STRATEGY CLASS
# ============================================================================

class Strategy:
    """
    Pluggable trading strategy with ML model.
    
    Encapsulates all strategy logic including:
    - Feature engineering from raw OHLCV data
    - Entry signal generation
    - Exit signal generation
    - OTM strike selection
    
    Attributes:
        model: XGBoost classifier for predictions
        feature_cols: List of feature column names
        signal_engineer_func: Function to create features from bars
        enter_func: Function to determine entry signals
        exit_func: Function to determine exit signals
        OTM_logic: OTM_Logic instance for strike selection
        helpers: Helper_Funcs instance with utility functions
        signal_df: DataFrame with engineered features (set by trader)
    """
    
    def __init__(self, model_json: str, feature_cols: list[str], 
                 signal_engineer_func: Callable, enter_func: Callable, 
                 exit_func: Callable, OTM_logic: OTM_Logic, 
                 helpers: Helper_Funcs):
        """
        Initialize strategy with ML model and logic functions.
        
        Args:
            model_json: Path to saved XGBoost model file
            feature_cols: List of feature names expected by model
            signal_engineer_func: Callable that transforms OHLCV to features
            enter_func: Callable that returns (bool, side) for entry
            exit_func: Callable that returns exit signal for position
            OTM_logic: OTM_Logic instance for strike selection
            helpers: Helper_Funcs instance with utility functions
        """
        self.model = helpers.funcs['load_model'](model_json)
        self.feature_cols = feature_cols
        self.signal_engineer_func = signal_engineer_func
        self.enter_func = enter_func
        self.exit_func = exit_func
        self.OTM_logic = OTM_logic
        self.signal_df = None
        self.helpers = helpers
    
    def set_signal_df(self, bars_df: pd.DataFrame) -> None:
        """
        Transform raw OHLCV bars into feature dataframe.
        
        Args:
            bars_df: DataFrame with columns [t_ms, open, high, low, close, volume, vwap]
        """
        self.signal_df = self.signal_engineer_func(bars_df, self.helpers)
    
    def get_OTM_logic(self) -> int:
        """
        Get OTM strike offset based on current time.
        
        Returns:
            Integer representing dollars OTM from current price
        """
        now_dt = datetime.datetime.fromtimestamp(t.time(), pytz.UTC)
        now_time = now_dt.time()
        
        for (start_time, end_time), value in self.OTM_logic.otm_logic.items():
            if start_time <= now_time < end_time:
                return value
        return 0


# ============================================================================
# LIVE TRADER CLASS
# ============================================================================

class liveTrader:
    """
    Core trading system managing data streams, orders, and positions.
    
    Architecture:
    - Connects to Tastytrade dxFeed for real-time 1-minute SPY candles
    - Uses Tastytrade API for options chain data and pricing
    - Executes orders via Alpaca trading API
    - Runs async event loop with multiple concurrent tasks
    - Auto-shuts down at market close (3:55 PM ET)
    
    State Management:
    - bars_df: Rolling window of 1-minute OHLCV bars
    - positions: Dict of active Position objects
    - trades_today: List of completed trades
    
    Designed for daily cron execution (9:25 AM - 4:00 PM ET).
    """
    
    def __init__(self, strategy: Strategy, config: Config):
        """
        Initialize trading system with strategy and configuration.
        
        Args:
            strategy: Strategy instance with entry/exit logic
            config: Config instance with system parameters
        
        Notes:
            - Connects to Alpaca and Tastytrade on initialization
            - Fetches current options chain for SPY
            - Loads account buying power
        """
        # API Clients
        self.trading_client = TradingClient(
            os.getenv("ALPACA_API_KEY"),
            os.getenv("ALPACA_SECRET_KEY")
        )
        self.tasty = Tastytrade()
        self.tasty.login(
            login=os.getenv("TASTY_LOGIN"),
            password=os.getenv("TASTY_PASSWORD")
        )
        
        # Account Info
        self.account = self.trading_client.get_account()
        self.amt_trading_today = float(self.account.options_buying_power)
        
        # Strategy & Config
        self.strategy = strategy
        self.config = config
        
        # State
        self.positions: dict[int, Position] = {}
        self.id_count = 0
        self.trades_today: list[dict] = []
        
        # Market Data State
        self.bars_df = pd.DataFrame(columns=[
            "t_ms", "open", "high", "low", "close", "volume", "vwap"
        ])
        self._current_minute_key = None
        self._latest_ev = None
        self._last_signal_fire_utc = None
        self._last_onbar_minute_utc = None
        
        # Options Chain & Feed Token
        self.options_chain = pd.DataFrame(
            self.tasty.api.get('/option-chains/SPY/nested')['data']['items'][0]['expirations'][0]['strikes']
        )
        self.api_quote_token = self.tasty.api.get('/api-quote-tokens')

    # ========================================================================
    # MAIN EVENT LOOP
    # ========================================================================
    
    async def entrypoint(self) -> None:
        """
        Main async event loop coordinating all system tasks.
        
        Spawns and manages:
        - Market data stream (run_feed via stream_supervisor)
        - Signal update task (fire_signal_update every second)
        - Exit logic task (handle_exit_logic every second)
        - Shutdown monitor (shutdown_at_market_close)
        
        Handles graceful cleanup on exit or error.
        """
        stream_task = asyncio.create_task(self.stream_supervisor(), name="ws-stream")
        jobs = [
            asyncio.create_task(
                self.run_every_second('on-bar', self.fire_signal_update),
                name="fire-on-bar-1m"
            ),
            asyncio.create_task(
                self.run_every_second('handle_exit', self.handle_exit_logic), 
                name='handle_exit'
            ),
            asyncio.create_task(
                self.shutdown_at_market_close(),
                name='market_close_monitor'
            ),
        ]
        
        try:
            await asyncio.gather(stream_task, *jobs)
        except SystemExit:
            print("Clean shutdown initiated")
        except Exception as e:
            print(f"Fatal error: {e}")
        finally:
            # Cleanup all tasks
            stream_task.cancel()
            for job in jobs:
                job.cancel()
            with contextlib.suppress(asyncio.CancelledError):
                await asyncio.gather(stream_task, *jobs)
`
        },
        {
          label: 'Web Socket Market Data Handler',
          description: 'Real-time price stream processing',
          code: `        """
"""DataStreamer class for market data streaming and aggregation."""

import os
import time as t
import asyncio
import datetime
import pytz
import threading
import traceback
from typing import List, Callable

import pandas as pd
import requests
from massive import WebSocketClient
from massive.websocket.models import WebSocketMessage, Feed, Market
from dotenv import load_dotenv


class DataStreamer:
    """
    Manages real-time market data streaming and aggregation.
    
    Handles:
    - WebSocket connection to Massive (Polygon) for real-time data
    - Second-level bar aggregation into minute bars
    - Historical backfilling from Polygon REST API
    - Data quality validation and gap detection
    - Multi-subscriber pattern for strategy notifications
    
    Architecture:
    - Runs WebSocket in background thread
    - Aggregates per-second bars into per-minute bars
    - Notifies subscribers when minute bars complete
    - Auto-backfills gaps from REST API
    """
    
    def __init__(self, symbols: list[str], timeframe_seconds: int = 60, update_frequency_seconds: int = None):
        """
        Initialize data streamer.
        
        Args:
            symbols: List of symbols to stream (e.g., ["SPY"])
            timeframe_seconds: Bar aggregation timeframe in seconds (default: 60 for 1-minute bars)
            update_frequency_seconds: How often to send updates for forming candles (default: same as timeframe)
                                     Set to 1 for real-time second updates on forming candles
        """
        load_dotenv()
        self.symbols = symbols
        self.timeframe_seconds = timeframe_seconds
        self.update_frequency_seconds = update_frequency_seconds or timeframe_seconds
        self.subscribers = []  # List of async callbacks
        
        # Market Data State
        self.bars_df = pd.DataFrame(columns=[
            "t_ms", "open", "high", "low", "close", "volume", "vwap", "curr_timestamp"
        ])
        self._current_second_bars = {}  # Track second-level bars for aggregation
        self._last_update_time = {}  # Track last update time for each forming bar
        self._massive_client = None
        self._last_api_backfill = None
        
    def subscribe(self, callback: Callable):
        """
        Register a callback to receive new bars.
        
        Args:
            callback: Async function with signature: async def on_bar(bar: dict)
        """
        self.subscribers.append(callback)
    
    async def start(self) -> None:
        """
        Start streaming market data.
        
        Process:
        1. Wait until next minute boundary
        2. Start WebSocket in background thread
        3. Wait 3 minutes for data collection
        4. Backfill historical data from API
        5. Monitor for gaps and backfill as needed
        """
        # Step 1: Sleep until the next timeframe boundary
        now = t.time()
        seconds_into_timeframe = now % self.timeframe_seconds
        sleep_seconds = self.timeframe_seconds - seconds_into_timeframe
        print(f"[DATASTREAM] Waiting {sleep_seconds:.1f}s until next {self.timeframe_seconds}s bar...")
        await asyncio.sleep(sleep_seconds)
        print(f"[DATASTREAM] New {self.timeframe_seconds}s bar started, starting websocket...")
        
        # Step 2: Start websocket in background thread
        ws_thread = threading.Thread(target=self._run_massive_ws, daemon=True)
        ws_thread.start()
        
        # Step 3: Wait 3 minutes for data collection
        print("[DATASTREAM] Websocket started. Waiting 3 minutes for data collection...")
        await asyncio.sleep(180)
        
        # Step 4: Backfill historical data
        print("[DATASTREAM] 3 minutes elapsed. Backfilling historical data...")
        await self._backfill_from_api()
        
        # Step 5: Monitor for gaps
        print("[DATASTREAM] Entering normal operation mode...")
        while True:
            await asyncio.sleep(60)
            await self._check_and_backfill()
    
    def _run_massive_ws(self):
        """
        Run Massive WebSocket in background thread.
        
        Subscribes to per-second aggregates for all symbols.
        """
        try:
            client = WebSocketClient(
                api_key=os.getenv("POLYGON_API_KEY", "blah"),
                feed=Feed.RealTime,
                market=Market.Stocks
            )
            self._massive_client = client
            
            # Subscribe to all symbols
            for symbol in self.symbols:
                client.subscribe(f"A.{symbol}")
            
            def handle_msg(msgs: List[WebSocketMessage]):
                for m in msgs:
                    try:
                        asyncio.run_coroutine_threadsafe(
                            self._handle_aggregate(m),
                            asyncio.get_event_loop()
                        )
                    except Exception as e:
                        print(f"[DATASTREAM] Error handling message: {e}")
            
            print(f"[DATASTREAM] Subscribed to: {[f'A.{s}' for s in self.symbols]}")
            client.run(handle_msg)
        except Exception as e:
            print(f"[DATASTREAM] WebSocket error: {e}")
    
    async def _handle_aggregate(self, msg: WebSocketMessage) -> None:
        """
        Process incoming per-second aggregate.
        
        Accumulates second-level bars into timeframe bars.
        Notifies subscribers when timeframe bar completes.
        
        Args:
            msg: WebSocketMessage with aggregate data
        """
        try:
            data = msg if isinstance(msg, dict) else msg.__dict__
            
            # Extract timestamp
            t_ms = data.get('t', data.get('start_timestamp', 0))
            if t_ms == 0:
                return
            
            bar_key = self._timeframe_start(t_ms)
            
            # Skip if bar is in the past
            current_bar = self._timeframe_start(self._now_ms())
            if bar_key < current_bar:
                return
            
            # Initialize or update timeframe bar
            if bar_key not in self._current_second_bars:
                # Create new bar
                self._current_second_bars[bar_key] = {
                    't_ms': bar_key,
                    'open': data.get('o', data.get('open')),
                    'high': data.get('h', data.get('high')),
                    'low': data.get('l', data.get('low')),
                    'close': data.get('c', data.get('close')),
                    'volume': data.get('v', data.get('volume', 0)),
                    'vwap': data.get('vw', data.get('vwap', data.get('c', data.get('close')))),
                    'curr_timestamp': datetime.datetime.now(),
                    'count': 1
                }
                # Add to DataFrame immediately
                bar_to_add = self._current_second_bars[bar_key].copy()
                bar_to_add.pop('count', None)
                self.bars_df = pd.concat(
                    [self.bars_df, pd.DataFrame([bar_to_add])],
                    ignore_index=True
                ).sort_values('t_ms').reset_index(drop=True)
            else:
                # Update existing bar
                bar = self._current_second_bars[bar_key]
                bar['high'] = max(bar['high'], data.get('h', data.get('high', 0)))
                bar['low'] = min(bar['low'], data.get('l', data.get('low', float('inf'))))
                bar['close'] = data.get('c', data.get('close'))
                bar['volume'] += data.get('v', data.get('volume', 0))
                new_vwap = data.get('vw', data.get('vwap', data.get('c', data.get('close'))))
                bar['vwap'] = (bar['vwap'] * bar['count'] + new_vwap) / (bar['count'] + 1)
                bar['curr_timestamp'] = datetime.datetime.now()
                bar['count'] += 1
                
                # Update the bar in DataFrame
                bar_to_update = bar.copy()
                bar_to_update.pop('count', None)
                mask = self.bars_df['t_ms'] == bar_key
                if mask.any():
                    for col in bar_to_update.keys():
                        self.bars_df.loc[mask, col] = bar_to_update[col]
            
            # Check if we should send an update for the current forming bar
            now_ms = self._now_ms()
            current_bar_key = self._timeframe_start(now_ms)
            
            if bar_key == current_bar_key:  # This is the current forming bar
                last_update = self._last_update_time.get(bar_key, 0)
                time_since_update = (now_ms - last_update) / 1000  # Convert to seconds
                
                
                if time_since_update >= self.update_frequency_seconds:
                    # Send update for forming bar (not completed yet)
                    forming_bar = self._current_second_bars[bar_key].copy()
                    forming_bar.pop('count', None)
                    forming_bar['forming'] = True  # Flag to indicate this is not a completed bar
                    await self._on_bar_update(forming_bar)
                    self._last_update_time[bar_key] = now_ms
            
            # Check for completed bars and clean up tracking
            current_bar = self._timeframe_start(self._now_ms())
            completed_bars = [k for k in self._current_second_bars.keys() if k < current_bar]
            
            for completed_key in completed_bars:
                completed_bar = self._current_second_bars.pop(completed_key)
                completed_bar.pop('count', None)
                completed_bar['forming'] = False
                # Notify subscribers of completion (bar already in DataFrame)
                for callback in self.subscribers:
                    try:
                        await callback(completed_bar)
                    except Exception as e:
                        print(f"[DATASTREAM] Error in subscriber callback: {e}")
                        print(f"[DATASTREAM] Full traceback:")
                        traceback.print_exc()
                # Clean up update tracking
                self._last_update_time.pop(completed_key, None)
                
        except Exception as e:
            print(f"[DATASTREAM] Error handling aggregate: {e}")
    
    async def _on_bar_update(self, bar: dict) -> None:
        """
        Handle forming bar update (not yet completed).
        
        Notifies subscribers of current state without adding to bars_df.
        
        Args:
            bar: Dict with OHLCV data and 'forming' flag set to True
        """
        # Validate bar
        if pd.isna(bar.get('close')) or pd.isna(bar.get('t_ms')):
            return
        
        # Notify all subscribers of forming bar
        for callback in self.subscribers:
            try:
                await callback(bar)
            except Exception as e:
                print(f"[DATASTREAM] Error in subscriber callback (forming): {e}")
                print(f"[DATASTREAM] Full traceback:")
                traceback.print_exc()
    
    async def _on_bar_complete(self, bar: dict) -> None:
        """
        Handle completed timeframe bar.
        
        Appends to bars_df and notifies all subscribers.
        
        Args:
            bar: Dict with OHLCV data and 'forming' flag set to False
        """
        # Validate bar
        if pd.isna(bar.get('close')) or pd.isna(bar.get('t_ms')):
            print(f"[DATASTREAM] Skipping bar with NaN: {bar}")
            return
        
        # Append to bars_df
        t_ms_val = bar['t_ms']
        if len(self.bars_df) == 0 or t_ms_val not in self.bars_df['t_ms'].values:
            self.bars_df = pd.concat(
                [self.bars_df, pd.DataFrame([bar])],
                ignore_index=True
            ).sort_values('t_ms').reset_index(drop=True)
        
        # Notify all subscribers
        for callback in self.subscribers:
            try:
                await callback(bar)
            except Exception as e:
                print(f"[DATASTREAM] Error in subscriber callback (complete): {e}")
                print(f"[DATASTREAM] Full traceback:")
                traceback.print_exc()
    
    async def _backfill_from_api(self) -> None:
        """
        Backfill historical minute bars from Polygon REST API.
        
        Fetches today's data and merges with existing bars.
        """
        try:
            date = datetime.datetime.now(pytz.UTC).strftime('%Y-%m-%d')
            print(f"[DATASTREAM] Backfilling from API for {date}...")
            
            # Only backfill first symbol for now (can extend to multi-symbol)
            symbol = self.symbols[0]
            
            response = requests.get(
                f'https://api.polygon.io/v2/aggs/ticker/{symbol}/range/1/minute/{date}/{date}',
                params={
                    'adjusted': 'true',
                    'sort': 'asc',
                    'limit': 50000,
                    'apiKey': os.getenv("POLYGON_API_KEY", "blah")
                }
            )
            
            if response.status_code == 200:
                results = response.json().get('results', [])
                if results:
                    new_df = pd.DataFrame(results).rename(columns={
                        't': 't_ms', 'h': 'high', 'l': 'low',
                        'o': 'open', 'c': 'close', 'v': 'volume'
                    })
                    
                    if 'vwap' not in new_df.columns:
                        if 'vw' in new_df.columns:
                            new_df['vwap'] = new_df['vw']
                        else:
                            new_df['vwap'] = new_df['close']
                    
                    if len(self.bars_df) > 0:
                        old_count = len(self.bars_df)
                        self.bars_df = pd.concat([self.bars_df, new_df]).drop_duplicates(
                            subset=['t_ms'], keep='last'
                        ).sort_values('t_ms').reset_index(drop=True)
                        print(f"[DATASTREAM] Added {len(self.bars_df) - old_count} bars. Total: {len(self.bars_df)}")
                    else:
                        self.bars_df = new_df
                        print(f"[DATASTREAM] Initialized with {len(new_df)} bars")
                    
                    self._last_api_backfill = datetime.datetime.now()
                else:
                    print(f"[DATASTREAM] No results from API")
            else:
                print(f"[DATASTREAM] API error: {response.status_code}")
                
        except Exception as e:
            print(f"[DATASTREAM] Backfill error: {e}")
    
    async def _check_and_backfill(self) -> None:
        """
        Check if data is current and backfill if stale.
        
        If data is >70 seconds behind, waits 3 minutes then backfills.
        """
        try:
            if len(self.bars_df) == 0:
                print("[DATASTREAM] No data yet, backfilling...")
                await asyncio.sleep(180)
                await self._backfill_from_api()
                return
            
            latest_t_ms = self.bars_df['t_ms'].max()
            latest_dt = datetime.datetime.fromtimestamp(latest_t_ms / 1000, pytz.UTC)
            now_utc = datetime.datetime.now(pytz.UTC)
            
            time_behind_seconds = (now_utc - latest_dt).total_seconds()
            
            if time_behind_seconds > 70:
                print(f"[DATASTREAM] Data stale: {time_behind_seconds/60:.1f} min behind")
                await asyncio.sleep(180)
                await self._backfill_from_api()
                
        except Exception as e:
            print(f"[DATASTREAM] Error checking completeness: {e}")
    
    def get_bars(self, symbol: str = None, count: int = None) -> pd.DataFrame:
        """
        Get recent bars.
        
        Args:
            symbol: Symbol to filter (currently only supports first symbol)
            count: Number of recent bars to return
        
        Returns:
            DataFrame with OHLCV bars
        """
        df = self.bars_df.copy()
        if count:
            df = df.tail(count)
        return df
    
    def _timeframe_start(self, ms: int) -> int:
        """Round timestamp down to timeframe boundary."""
        timeframe_ms = self.timeframe_seconds * 1000
        return ms - (ms % timeframe_ms)
    
    def _now_ms(self) -> float:
        """Get current time in milliseconds."""
        return float(t.time() * 1000)`
        },
        {
          label: 'Order Execution Engine',
          description: 'Automated order placement based on callback functions',
          code: `    # ========================================================================
    # SIGNAL GENERATION
    # ========================================================================
    
    async def fire_signal_update(self) -> None:
        """
        Check for entry signals on configured timeframe boundaries.
        
        Process:
        1. Check if current time aligns with signal update interval
        2. Prevent duplicate signals within same interval
        3. Convert latest candle event to row format
        4. Call on_bar() to trigger strategy evaluation
        
        Called every second by run_every_second task.
        """
        now = datetime.datetime.now(datetime.timezone.utc)
        
        TIMEFRAME_TO_SECONDS = {
            "1s": 1,
            "5s": 5,
            "10s": 10,
            "30s": 30,
            "1m": 60,
        }

        interval = TIMEFRAME_TO_SECONDS[self.config.signalUpdate]

        # Align to timeframe boundary
        if now.second % interval != 0:
            return

        # Prevent duplicate signals
        if self._last_signal_fire_utc is not None:
            if (now - self._last_signal_fire_utc).total_seconds() < interval:
                return

        if self._latest_ev is None:
            self._last_signal_fire_utc = now
            return

        current_row = self._to_row(self._latest_ev)
        await self.on_bar(current_row)

        self._last_signal_fire_utc = now
    
    async def on_bar(self, current_row: dict | pd.Series) -> None:
        """
        Process new bar and check for entry signals.
        
        Args:
            current_row: Dict or Series with OHLCV data
        
        Process:
        1. Append bar to bars_df
        2. Generate features via strategy.set_signal_df()
        3. Check entry signal via strategy.enter_func()
        4. Execute entry orders if signal fires
        """
        # Normalize to Series
        if isinstance(current_row, dict):
            row = pd.Series(current_row)
        else:
            row = current_row
        
        # Append to bars
        self.bars_df = pd.concat(
            [self.bars_df, row.to_frame().T],
            ignore_index=True
        )
        
        
        # Generate features and check entry
        self.strategy.set_signal_df(self.bars_df)
        enter_trade, side = self.strategy.enter_func(
            self.strategy.signal_df, 
            self.strategy.model, 
            self.strategy.feature_cols
        )
        
        if enter_trade:
            OTM = self.strategy.get_OTM_logic()
            curr_price = self.bars_df['close'].iloc[-1]
            
            if side == 0:  # Straddle
                self.buy_both_sides(curr_price, OTM)
            elif side == 1:  # Call only
                self.buy_call_side(curr_price, OTM)
            elif side == -1:  # Put only
                self.buy_put_side(curr_price, OTM)

    # ========================================================================
    # EXIT LOGIC
    # ========================================================================
    
    async def handle_exit_logic(self) -> None:
        """
        Check all open positions for exit signals and close if needed.
        
        Process:
        1. Iterate through all open positions
        2. Call strategy.exit_func() for each position
        3. Execute sell orders based on exit signal
        4. Update position exit times and prices
        5. Move completed positions to trades_today
        
        Exit Signals:
        - 0: Exit both call and put
        - 1: Exit call only
        - -1: Exit put only
        - None: Hold position
        
        Called every second by run_every_second task.
        """
        pos_to_delete = {}
        
        for k, position in self.positions.items():
            exit = self.strategy.exit_func(position)
            
            if exit == 1:  # Exit call
                try:
                    self.sell_call_side(position)
                    position.call_time_exited = datetime.datetime.now()
                    position.call_exit_price = position.call_current_price(position.call_symbol)

                    if position.put_time_entered is None or position.put_time_exited is not None:
                        pos_to_delete[k] = position
                except Exception as e:
                    print("Error selling call side during exit logic:", e)
                    
            elif exit == 0:  # Exit both
                try:
                    self.sell_call_side(position)
                    self.sell_put_side(position)
                    position.call_time_exited = datetime.datetime.now()
                    position.put_time_exited = datetime.datetime.now()
                    position.call_exit_price = position.call_current_price(position.call_symbol)
                    position.put_exit_price = position.put_current_price(position.put_symbol)
                    pos_to_delete[k] = position
                except Exception as e:
                    print("Error selling both sides during exit logic:", e)
                    
            elif exit == -1:  # Exit put
                try:
                    self.sell_put_side(position)
                    position.put_exit_price = position.put_current_price(position.put_symbol)
                    position.put_time_exited = datetime.datetime.now()
                    
                    if position.call_time_entered is None or position.call_time_exited is not None:
                        pos_to_delete[k] = position
                except Exception as e:
                    print("Error selling put side during exit logic:", e)

        # Archive completed trades
        new_rows = []
        for k, v in pos_to_delete.items():
            del self.positions[k]
            row = {
                'call_time_entered': v.call_time_entered,
                'call_time_exited': v.call_time_exited,
                'call_strike': v.call_strike,
                'call_entry_price': v.call_entry_price,
                'call_contract_qty': v.call_contract_qty,
                'call_exit_price': v.call_exit_price,
                'put_time_entered': v.put_time_entered,
                'put_time_exited': v.put_time_exited,
                'put_strike': v.put_strike,
                'put_contract_qty': v.put_contract_qty,
                'put_entry_price': v.put_entry_price,
                'put_exit_price': v.put_exit_price,
            }
            new_rows.append(row)
        self.trades_today.extend(new_rows)

    # ========================================================================
    # ORDER EXECUTION - ENTRY
    # ========================================================================
    
    def buy_both_sides(self, curr_price: float, OTM: int) -> None:
        """
        Enter straddle position (buy call and put at same strike).
        
        Args:
            curr_price: Current SPY price
            OTM: Dollars out-of-the-money for strike selection
        
        Process:
        1. Fetch option data for call and put
        2. Calculate contract quantities (2% of buying power per side)
        3. Submit market orders via Alpaca
        4. Create Position object and add to self.positions
        
        Risk: Uses 4% total buying power per straddle
        """
        try:
            call_option_data = self.get_option_data('call', round(curr_price), OTM)
            put_option_data = self.get_option_data('put', round(curr_price), OTM)
            
            if call_option_data is None or put_option_data is None:
                print("Could not retrieve option data for both sides.")
                return
            
            call_contract_count = self.amt_trading_today * .02 // (float(call_option_data['last-mkt']) * 100)
            put_contract_count = self.amt_trading_today * .02 // (float(put_option_data['last-mkt']) * 100)

            if call_contract_count < 1 or put_contract_count < 1:
                print("Not enough funds to buy contracts.")
                return

            # Submit orders
            call_market_order_data = MarketOrderRequest(
                symbol=call_option_data['symbol'].replace(' ', ""),
                qty=call_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=call_market_order_data)
            
            put_market_order_data = MarketOrderRequest(
                symbol=put_option_data['symbol'].replace(' ', ""),
                qty=put_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=put_market_order_data)
            
            # Create position
            pos = Position(
                call_time_entered=datetime.datetime.now(), 
                call_time_exited=None,
                call_symbol=call_option_data['symbol'], 
                call_strike=call_option_data['strike-price'], 
                call_entry_price=float(call_option_data['last-mkt']),
                call_contract_qty=call_contract_count, 
                call_current_price=self.get_last_option_price, 
                call_exit_price=None,
                put_time_entered=datetime.datetime.now(), 
                put_time_exited=None,
                put_symbol=put_option_data['symbol'], 
                put_strike=put_option_data['strike-price'], 
                put_entry_price=float(put_option_data['last-mkt']),
                put_contract_qty=put_contract_count, 
                put_current_price=self.get_last_option_price, 
                put_exit_price=None,
                extraInfo={}
            )
            self.positions[self.id_count] = pos
            self.id_count += 1
        except Exception as e:
            print("Error buying both sides:", e)
    
    def buy_call_side(self, curr_price: float, OTM: int) -> None:
        """
        Enter call-only position.
        
        Args:
            curr_price: Current SPY price
            OTM: Dollars out-of-the-money for strike selection
        
        Process:
        1. Fetch call option data
        2. Calculate contract quantity (2% of buying power)
        3. Submit market order via Alpaca
        4. Create Position with put fields set to None
        """
        try:
            call_option_data = self.get_option_data('call', round(curr_price), OTM)
            if call_option_data is None:
                print("Could not retrieve option data for call side.")
                return
            
            call_contract_count = self.amt_trading_today * .02 // (float(call_option_data['last-mkt']) * 100)
            if call_contract_count < 1:
                print("Not enough funds to buy call contracts.")
                return
            
            call_market_order_data = MarketOrderRequest(
                symbol=call_option_data['symbol'].replace(' ', ""),
                qty=call_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=call_market_order_data)

            pos = Position(
                call_time_entered=datetime.datetime.now(), 
                call_time_exited=None,
                call_symbol=call_option_data['symbol'], 
                call_strike=call_option_data['strike-price'], 
                call_entry_price=float(call_option_data['last-mkt']),
                call_contract_qty=call_contract_count, 
                call_current_price=self.get_last_option_price, 
                call_exit_price=None,
                put_time_entered=None, 
                put_time_exited=None,
                put_symbol=None, 
                put_strike=None, 
                put_entry_price=None,
                put_contract_qty=None, 
                put_current_price=None, 
                put_exit_price=None,
                extraInfo={}
            )
            
            self.positions[self.id_count] = pos
            self.id_count += 1
        except Exception as e:
            print("Error buying call side:", e)
        
    def buy_put_side(self, curr_price: float, OTM: int) -> None:
        """
        Enter put-only position.
        
        Args:
            curr_price: Current SPY price
            OTM: Dollars out-of-the-money for strike selection
        
        Process:
        1. Fetch put option data
        2. Calculate contract quantity (2% of buying power)
        3. Submit market order via Alpaca
        4. Create Position with call fields set to None
        """
        try:
            put_option_data = self.get_option_data('put', round(curr_price), OTM)
            if put_option_data is None:
                print("Could not retrieve option data for put side.")
                return
            
            put_contract_count = self.amt_trading_today * .02 // (float(put_option_data['last-mkt']) * 100)
            if put_contract_count < 1:
                print("Not enough funds to buy put contracts.")
                return

            put_market_order_data = MarketOrderRequest(
                symbol=put_option_data['symbol'].replace(' ', ""),
                qty=put_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=put_market_order_data)
            
            pos = Position(
                call_time_entered=None, 
                call_time_exited=None,
                call_symbol=None, 
                call_strike=None, 
                call_entry_price=None,
                call_contract_qty=None, 
                call_current_price=None, 
                call_exit_price=None,
                put_time_entered=datetime.datetime.now(), 
                put_time_exited=None,
                put_symbol=put_option_data['symbol'], 
                put_strike=put_option_data['strike-price'], 
                put_entry_price=float(put_option_data['last-mkt']),
                put_contract_qty=put_contract_count, 
                put_current_price=self.get_last_option_price, 
                put_exit_price=None,
                extraInfo={}
            )
            self.positions[self.id_count] = pos
            self.id_count += 1
        except Exception as e:
            print("Error buying put side:", e)

    # ========================================================================
    # ORDER EXECUTION - EXIT
    # ========================================================================
    
    def sell_call_side(self, position: Position) -> None:
        """
        Close call side of position.
        
        Args:
            position: Position object with call details
        
        Submits market sell order via Alpaca.
        """
        call_market_order_data = MarketOrderRequest(
            symbol=position.call_symbol.replace(' ', ''),
            qty=position.call_contract_qty,
            side=OrderSide.SELL,
            time_in_force=TimeInForce.DAY
        )
        self.trading_client.submit_order(order_data=call_market_order_data)
    
    def sell_put_side(self, position: Position) -> None:
        """
        Close put side of position.
        
        Args:
            position: Position object with put details
        
        Submits market sell order via Alpaca.
        """
        put_market_order_data = MarketOrderRequest(
            symbol=position.put_symbol.replace(' ', ''),
            qty=position.put_contract_qty,
            side=OrderSide.SELL,
            time_in_force=TimeInForce.DAY
        )
        self.trading_client.submit_order(order_data=put_market_order_data)
`
        },
        {          label: 'Option Data Retrieval',
          description: 'Fetch option contract details from Tastytrade',
          code: `    # ========================================================================
    # HELPER FUNCTIONS
    # ========================================================================
    

    # ========================================================================
    # OPTIONS DATA & PRICING
    # ========================================================================
    
    def get_option_data(self, put_call: str, curr_price: float, OTM: int) -> dict | None:
        """
        Fetch option data for specified strike.
        
        Args:
            put_call: 'call' or 'put'
            curr_price: Current underlying price
            OTM: Dollars out-of-the-money
        
        Returns:
            Dict with option data including symbol, last price, strike
            None if option not found or error occurs
        
        Process:
        1. Calculate target strike (curr_price ± OTM)
        2. Search options_chain DataFrame for matching strike
        3. Fetch live option data from Tastytrade API
        """
        try:
            OTM_adder = OTM if put_call == 'call' else -OTM
            target_strike = float(curr_price) + OTM_adder
            
            matches = self.options_chain[
                self.options_chain['strike-price'].astype(float) == target_strike
            ]
            
            if len(matches) == 0:
                print(f"No {put_call} option found at strike {target_strike}")
                return None
            
            option_ticker = matches[put_call].values[0]
            print(f"Option ticker: {option_ticker}, Strike price: {target_strike}")
            
            option_data = self.tasty.api.get(
                '/market-data/by-type',
                params=[('equity-option', option_ticker)]
            )['data']['items'][0]
            option_data['strike-price'] = target_strike
            return option_data
            
        except Exception as e:
            print(f"Error getting option data: {e}")
            return None
    
    def get_last_option_price(self, option_ticker: str) -> float:
        """
        Fetch current market price for option.
        
        Args:
            option_ticker: Option symbol (e.g., 'SPY  240531C00520000')
        
        Returns:
            Float of last market price
            0.0 if error occurs
        """
        try:
            option_data = self.tasty.api.get(
                '/market-data/by-type',
                params=[('equity-option', option_ticker)]
            )['data']['items'][0]
            return float(option_data['last-mkt'])
        except Exception as e:
            print(f"Error fetching price for {option_ticker}: {e}")
            return 0.0`}
      ],

      plots: [
        {
          title: 'Trading Performance',
          description: 'Cumulative returns and drawdown analysis',
          imageUrl: 'https://via.placeholder.com/600x400?text=Trading+Performance'
        },
        {
          title: 'Signal Accuracy',
          description: 'Win rate and profit factor by signal type',
          imageUrl: 'https://via.placeholder.com/600x400?text=Signal+Accuracy'
        },
        {
          title: 'Risk Metrics',
          description: 'Sharpe ratio and maximum drawdown over time',
          imageUrl: 'https://via.placeholder.com/600x400?text=Risk+Metrics'
        }
      ]
    }
