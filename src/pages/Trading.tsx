import React, { useEffect, useState } from 'react';

interface AccountData {
  equity: string;
  cash: string;
  buying_power: string;
  portfolio_value: string;
  last_equity: string;
}

interface Position {
  symbol: string;
  qty: string;
  market_value: string;
  unrealized_pl: string;
  unrealized_plpc: string;
  current_price: string;
  avg_entry_price: string;
}

interface PortfolioHistory {
  timestamp: number[];
  equity: number[];
  profit_loss: number[];
  profit_loss_pct: number[];
  base_value: number;
}

const Trading: React.FC = () => {
  const [account, setAccount] = useState<AccountData | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [portfolioHistory, setPortfolioHistory] = useState<PortfolioHistory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState('1M');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'portfoliowebsitebackend-production-fa3b.up.railway.app';
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [accountRes, positionsRes, historyRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/account`),
          fetch(`${API_BASE_URL}/api/positions`),
          fetch(`${API_BASE_URL}/api/portfolio-history?period=${selectedPeriod}&timeframe=1D`),
        ]);

        if (!accountRes.ok || !positionsRes.ok || !historyRes.ok) {
          throw new Error('Failed to fetch data from backend');
        }

        const accountData = await accountRes.json();
        const positionsData = await positionsRes.json();
        const historyData = await historyRes.json();

        setAccount(accountData);
        setPositions(positionsData);
        setPortfolioHistory(historyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching trading data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [selectedPeriod, API_BASE_URL]);

  const calculateReturns = () => {
    // NOTE: Portfolio history from Alpaca does NOT include current day data (no EOD data yet)
    // So chart returns only show historical data
    // But account returns at the top DO include current day since they use real-time equity values
    
    // If we have portfolio history, use start and current from that
    if (portfolioHistory && portfolioHistory.equity && portfolioHistory.equity.length > 0) {
      const startEquity = portfolioHistory.equity[0];
      const currentEquity = portfolioHistory.equity[portfolioHistory.equity.length - 1];
      const totalReturn = currentEquity - startEquity;
      const totalReturnPct = ((totalReturn / startEquity) * 100);
      return { totalReturn, totalReturnPct };
    }
    
    // Fallback to account data if no portfolio history
    if (!account) return { totalReturn: 0, totalReturnPct: 0 };
    const equity = parseFloat(account.equity);
    const lastEquity = parseFloat(account.last_equity);
    const totalReturn = equity - lastEquity;
    const totalReturnPct = ((totalReturn / lastEquity) * 100);
    return { totalReturn, totalReturnPct };
  };

  const formatCurrency = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };

  const formatPercent = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading trading data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  const { totalReturn, totalReturnPct } = calculateReturns();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Trading Dashboard</h1>
          <p className="text-sm sm:text-base text-slate-400">Alpaca Paper Trading Account Performance</p>
        </div>

        {/* Account Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700">
            <h3 className="text-slate-400 text-xs sm:text-sm mb-2">Portfolio Value</h3>
            <p className="text-lg sm:text-3xl font-bold text-white">{account && formatCurrency(account.equity)}</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700">
            <h3 className="text-slate-400 text-xs sm:text-sm mb-2">Cash</h3>
            <p className="text-lg sm:text-3xl font-bold text-white">{account && formatCurrency(account.cash)}</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700">
            <h3 className="text-slate-400 text-xs sm:text-sm mb-2">Total Return</h3>
            <p className={`text-lg sm:text-3xl font-bold ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {formatCurrency(totalReturn)}
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700">
            <h3 className="text-slate-400 text-xs sm:text-sm mb-2">Return %</h3>
            <p className={`text-lg sm:text-3xl font-bold ${totalReturnPct >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {formatPercent(totalReturnPct)}
            </p>
          </div>
        </div>

        {/* Portfolio Chart */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Portfolio Performance</h2>
            <div className="flex gap-1 sm:gap-2 flex-wrap">
              {['1D', '1W', '1M', '3M', 'ALL'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                    selectedPeriod === period
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          {/* Simple Chart */}
          {portfolioHistory && portfolioHistory.equity && portfolioHistory.equity.length > 0 ? (
            <>
              <div 
                className="relative h-48 sm:h-64 bg-slate-900/50 rounded-lg p-4"
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setTooltipPos(null);
                }}
              >
                <svg 
                  width="100%" 
                  height="100%" 
                  className="overflow-visible"
                  onMouseMove={(e) => {
                    const svg = e.currentTarget;
                    const rect = svg.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const index = Math.round((x / 100) * (portfolioHistory.equity.length - 1));
                    
                    if (index >= 0 && index < portfolioHistory.equity.length) {
                      setHoveredIndex(index);
                      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                    }
                  }}
                >
                  {portfolioHistory.equity.map((value, index) => {
                    if (index === 0) return null;
                    const prevValue = portfolioHistory.equity[index - 1];
                    const x1 = ((index - 1) / (portfolioHistory.equity.length - 1)) * 100;
                    const x2 = (index / (portfolioHistory.equity.length - 1)) * 100;
                    const min = Math.min(...portfolioHistory.equity);
                    const max = Math.max(...portfolioHistory.equity);
                    const range = max - min;
                    const y1 = range > 0 ? 100 - ((prevValue - min) / range) * 80 - 10 : 50;
                    const y2 = range > 0 ? 100 - ((value - min) / range) * 80 - 10 : 50;
                    
                    const startEquity = portfolioHistory.equity[0];
                    const currentEquity = portfolioHistory.equity[portfolioHistory.equity.length - 1];
                    const isPositive = currentEquity >= startEquity;
                    
                    return (
                      <line
                        key={index}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke={isPositive ? '#4ade80' : '#f87171'}
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>
                
                {/* Tooltip */}
                {hoveredIndex !== null && tooltipPos && portfolioHistory.profit_loss_pct && (
                  <div 
                    className="absolute bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm text-white pointer-events-none"
                    style={{
                      left: `${tooltipPos.x}px`,
                      top: `${tooltipPos.y - 60}px`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div className="text-xs text-slate-400 mb-1">
                      {new Date(portfolioHistory.timestamp[hoveredIndex] * 1000).toLocaleDateString()}
                    </div>
                    <div className="font-semibold">
                      {formatPercent(portfolioHistory.profit_loss_pct[hoveredIndex])}
                    </div>
                    <div className="text-xs text-slate-400">
                      {formatCurrency(portfolioHistory.equity[hoveredIndex])}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-slate-400 mt-4 mb-2">
                <span className="truncate">Start: {formatCurrency(portfolioHistory.equity[0])}</span>
                <span className="truncate text-right">Current: {formatCurrency(portfolioHistory.equity[portfolioHistory.equity.length - 1])}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500 px-4">
                <span>{new Date(portfolioHistory.timestamp[0] * 1000).toLocaleDateString()}</span>
                <span>{new Date(portfolioHistory.timestamp[portfolioHistory.timestamp.length - 1] * 1000).toLocaleDateString()}</span>
              </div>
              <div className="mt-4 p-3 bg-slate-900/30 rounded-lg border border-slate-700 text-xs text-slate-400">
                <p>📊 <span className="font-semibold">Note:</span> Chart data does not include the current trading day. The "Total Return" and "Return %" at the top reflect my real-time portfolio value including today's changes.</p>
                {selectedPeriod === 'ALL' && (
                  <p className="mt-2 text-slate-300">⚠️ <span className="font-semibold">Early Performance:</span> The portfolio experienced a ~20% decline in the first week due to trading bugs.</p>
                )}
              </div>
            </>
          ) : (
            <div className="h-64 flex items-center justify-center text-slate-400">
              {loading ? 'Loading chart data...' : 'No data available for this period'}
            </div>
          )}
        </div>

        {/* Current Positions */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Current Positions</h2>
          {positions.length === 0 ? (
            <p className="text-slate-400">No open positions</p>
          ) : (
            <>
              {/* Mobile Card View */}
              <div className="block md:hidden space-y-4">
                {positions.map((position) => {
                  const plNum = parseFloat(position.unrealized_pl);
                  const plPctNum = parseFloat(position.unrealized_plpc) * 100;
                  return (
                    <div key={position.symbol} className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{position.symbol}</h3>
                          <p className="text-xs text-slate-400">Qty: {position.qty}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-bold ${plNum >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {formatCurrency(position.unrealized_pl)}
                          </p>
                          <p className={`text-xs font-semibold ${plPctNum >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {formatPercent(plPctNum)}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-slate-400">Avg Price</p>
                          <p className="text-white font-semibold">{formatCurrency(position.avg_entry_price)}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Current Price</p>
                          <p className="text-white font-semibold">{formatCurrency(position.current_price)}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-slate-400">Market Value</p>
                          <p className="text-white font-semibold">{formatCurrency(position.market_value)}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Symbol</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Quantity</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Avg Price</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Current Price</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Market Value</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">P/L</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">P/L %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((position) => {
                      const plNum = parseFloat(position.unrealized_pl);
                      const plPctNum = parseFloat(position.unrealized_plpc) * 100;
                      return (
                        <tr key={position.symbol} className="border-b border-slate-700/50">
                          <td className="py-3 px-4 text-white font-medium">{position.symbol}</td>
                          <td className="py-3 px-4 text-right text-slate-300">{position.qty}</td>
                          <td className="py-3 px-4 text-right text-slate-300">{formatCurrency(position.avg_entry_price)}</td>
                          <td className="py-3 px-4 text-right text-slate-300">{formatCurrency(position.current_price)}</td>
                          <td className="py-3 px-4 text-right text-slate-300">{formatCurrency(position.market_value)}</td>
                          <td className={`py-3 px-4 text-right font-medium ${plNum >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {formatCurrency(position.unrealized_pl)}
                          </td>
                          <td className={`py-3 px-4 text-right font-medium ${plPctNum >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {formatPercent(plPctNum)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trading;