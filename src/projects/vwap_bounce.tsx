import { ProjectDemoData } from "../types/projectDemo"
      
export const vwapBounceProject: ProjectDemoData = {
      id: '2',
      title: 'Algorithmic Trading Bots - Code Demo',
      description: 'Real-time trading system implementation details',
      codeSamples: [
        {
          label: 'WebSocket Market Data Handler',
          description: 'Real-time price stream processing',
          code: `import asyncio
import websockets
import json
from datetime import datetime

class MarketDataHandler:
    def __init__(self, api_key):
        self.api_key = api_key
        self.prices = []
        
    async def connect_stream(self):
        uri = f"wss://api.example.com/stream?key={self.api_key}"
        async with websockets.connect(uri) as websocket:
            await websocket.send(json.dumps({
                'action': 'subscribe',
                'symbols': ['SPY']
            }))
            
            while True:
                message = await websocket.recv()
                data = json.loads(message)
                self.process_price_update(data)
    
    def process_price_update(self, data):
        self.prices.append({
            'timestamp': datetime.now(),
            'price': data['price'],
            'volume': data['volume']
        })`
        },
        {
          label: 'Trading Signal Generator',
          description: 'XGBoost-based signal generation with risk management',
          code: `class TradingSignalGenerator:
    def __init__(self, model, scaler):
        self.model = model
        self.scaler = scaler
        
    def generate_signal(self, features):
        # Preprocess features
        scaled_features = self.scaler.transform([features])
        
        # Get prediction
        probability = self.model.predict_proba(scaled_features)[0][1]
        
        if probability > 0.65:
            return {
                'action': 'BUY',
                'confidence': probability,
                'position_size': self.calculate_position_size(probability)
            }
        elif probability < 0.35:
            return {
                'action': 'SELL',
                'confidence': 1 - probability,
                'position_size': self.calculate_position_size(1 - probability)
            }
        else:
            return {'action': 'HOLD', 'confidence': 0.5}
    
    def calculate_position_size(self, confidence):
        # Risk management: position size based on confidence
        base_size = 100
        return int(base_size * confidence)`
        },
        {
          label: 'Order Execution Engine',
          description: 'Automated order placement with stop-loss and take-profit',
          code: `class OrderExecutor:
    def __init__(self, broker_api):
        self.broker = broker_api
        self.active_positions = {}
        
    async def execute_trade(self, signal, current_price):
        if signal['action'] == 'HOLD':
            return
            
        order = {
            'symbol': 'SPY',
            'quantity': signal['position_size'],
            'side': 'BUY' if signal['action'] == 'BUY' else 'SELL',
            'type': 'MARKET'
        }
        
        # Place order
        response = await self.broker.place_order(order)
        position_id = response['order_id']
        
        # Set risk parameters
        stop_loss = current_price * 0.98  # 2% stop loss
        take_profit = current_price * 1.03  # 3% take profit
        
        self.active_positions[position_id] = {
            'entry_price': current_price,
            'stop_loss': stop_loss,
            'take_profit': take_profit,
            'timestamp': datetime.now()
        }
        
        # Place protective orders
        await self.broker.place_order({
            'parent_order_id': position_id,
            'stop_price': stop_loss,
            'type': 'STOP'
        })`
        }
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
