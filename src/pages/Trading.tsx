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
  const [priorDayEquity, setPriorDayEquity] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState('1M');
  const [customMode, setCustomMode] = useState<'none' | 'day' | 'range'>('none');
  const [customMenuOpen, setCustomMenuOpen] = useState(false);
  const [rangeStart, setRangeStart] = useState('');
  const [rangeEnd, setRangeEnd] = useState('');
  const [selectedMinuteDay, setSelectedMinuteDay] = useState('');
  const [draftRangeStart, setDraftRangeStart] = useState('');
  const [draftRangeEnd, setDraftRangeEnd] = useState('');
  const [draftMinuteDay, setDraftMinuteDay] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [navDate, setNavDate] = useState<Date>(new Date());
  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'portfoliowebsitebackend-production-fa3b.up.railway.app';
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);
  const hasRange = customMode === 'range' && Boolean(rangeStart && rangeEnd);
  const isMinuteDay = customMode === 'day' && Boolean(selectedMinuteDay);
  const historyTimeframe = customMode === 'day'
    ? '1Min'
    : customMode === 'range'
      ? '1D'
      : selectedPeriod === '1D'
        ? '1Min'
        : '1D';
  const historyPeriod = customMode === 'day' ? '1D' : customMode === 'range' ? 'ALL' : selectedPeriod;
  const showDateTime = historyTimeframe === '1Min';
  useEffect(() => {
    if (customMode === 'day' && !selectedMinuteDay) {
      return;
    }
    if (customMode === 'range' && !(rangeStart && rangeEnd)) {
      return;
    }
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      setPortfolioHistory(null);
      setPriorDayEquity(null);
      try {
        const historyParams = new URLSearchParams({
          period: historyPeriod,
          timeframe: historyTimeframe,
        });
        if (isMinuteDay) {
          historyParams.set('day', selectedMinuteDay);
        } else if (hasRange) {
          historyParams.set('start', rangeStart);
          historyParams.set('end', rangeEnd);
        }

        const fetchPromises = [
          fetch(`${API_BASE_URL}/api/account`),
          fetch(`${API_BASE_URL}/api/positions`),
          fetch(`${API_BASE_URL}/api/portfolio-history?${historyParams.toString()}`),
        ];

        // For custom ranges, also fetch prior day's equity
        let priorDayRes: Response | null = null;
        if (hasRange) {
          const priorDate = new Date(rangeStart);
          priorDate.setDate(priorDate.getDate() - 1);
          const priorDateStr = priorDate.toISOString().slice(0, 10);
          const priorDayParams = new URLSearchParams({
            period: '1D',
            timeframe: '1D',
            start: priorDateStr,
            end: priorDateStr,
          });
          fetchPromises.push(fetch(`${API_BASE_URL}/api/portfolio-history?${priorDayParams.toString()}`));
        }

        const [accountRes, positionsRes, historyRes, ...otherRes] = await Promise.all(fetchPromises);
        priorDayRes = hasRange ? otherRes[0] : null;

        if (!accountRes.ok || !positionsRes.ok || !historyRes.ok) {
          throw new Error('Failed to fetch data from backend');
        }

        const accountData = await accountRes.json();
        const positionsData = await positionsRes.json();
        const historyData = await historyRes.json();

        let priorEquity: number | null = null;
        if (hasRange && priorDayRes && priorDayRes.ok) {
          const priorData = await priorDayRes.json();
          if (priorData.equity && priorData.equity.length > 0) {
            const lastEquity = priorData.equity[priorData.equity.length - 1];
            // Only use prior equity if it's not 0
            if (lastEquity !== 0) {
              priorEquity = lastEquity;
            }
          }
        }

        setAccount(accountData);
        setPositions(positionsData);
        setPortfolioHistory(historyData);
        setPriorDayEquity(priorEquity);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching trading data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [selectedPeriod, rangeStart, rangeEnd, selectedMinuteDay, historyPeriod, historyTimeframe, isMinuteDay, hasRange, API_BASE_URL]);

  const handleNavigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(navDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    // Don't go past today
    if (newDate <= new Date()) {
      setNavDate(newDate);
      setSelectedMinuteDay(newDate.toISOString().slice(0, 10));
      setCustomMode('day');
      setRangeStart('');
      setRangeEnd('');
    }
  };

  const handleNavigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(navDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    // Don't go past today
    if (newDate <= new Date()) {
      setNavDate(newDate);
      const weekStart = new Date(newDate);
      const weekEnd = new Date(newDate);
      weekEnd.setDate(weekEnd.getDate() + 6);
      // Cap weekEnd at today
      if (weekEnd > new Date()) {
        weekEnd.setTime(new Date().getTime());
      }
      setRangeStart(weekStart.toISOString().slice(0, 10));
      setRangeEnd(weekEnd.toISOString().slice(0, 10));
      setCustomMode('range');
    }
  };

  const handleNavigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(navDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    // Don't go past today
    if (newDate <= new Date()) {
      setNavDate(newDate);
      const monthStart = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
      const monthEnd = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
      // Cap monthEnd at today
      if (monthEnd > new Date()) {
        monthEnd.setTime(new Date().getTime());
      }
      setRangeStart(monthStart.toISOString().slice(0, 10));
      setRangeEnd(monthEnd.toISOString().slice(0, 10));
      setCustomMode('range');
    }
  };

  const handleNavigate3Months = (direction: 'prev' | 'next') => {
    const newDate = new Date(navDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 3);
    } else {
      newDate.setMonth(newDate.getMonth() + 3);
    }
    // Don't go past today
    if (newDate <= new Date()) {
      setNavDate(newDate);
      const rangeStart = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
      const rangeEnd = new Date(newDate.getFullYear(), newDate.getMonth() + 3, 0);
      // Cap rangeEnd at today
      if (rangeEnd > new Date()) {
        rangeEnd.setTime(new Date().getTime());
      }
      setRangeStart(rangeStart.toISOString().slice(0, 10));
      setRangeEnd(rangeEnd.toISOString().slice(0, 10));
      setCustomMode('range');
    }
  };

  const calculateReturns = () => {
    if (portfolioHistory && portfolioHistory.equity && portfolioHistory.equity.length > 0) {
      // For custom ranges, use prior day equity as starting point if available
      const startEquity = (hasRange && priorDayEquity !== null) ? priorDayEquity : portfolioHistory.equity[0];
      const endEquity = portfolioHistory.equity[portfolioHistory.equity.length - 1];
      const totalReturn = endEquity - startEquity;
      const totalReturnPct = startEquity > 0 ? (totalReturn / startEquity) * 100 : 0;
      if (customMode !== 'none') {
        return { totalReturn, totalReturnPct };
      }
    }

    if (!account) return { totalReturn: 0, totalReturnPct: 0 };

    // For 1D, use yesterday's close (last_equity)
    if (selectedPeriod === '1D') {
      const equity = parseFloat(account.equity);
      const lastEquity = parseFloat(account.last_equity);
      const totalReturn = equity - lastEquity;
      const totalReturnPct = ((totalReturn / lastEquity) * 100);
      return { totalReturn, totalReturnPct };
    }

    // For other timeframes, use portfolio history start value vs current equity
    if (portfolioHistory && portfolioHistory.equity && portfolioHistory.equity.length > 0) {
      const startEquity = portfolioHistory.equity[0];
      const currentEquity = parseFloat(account.equity);
      const totalReturn = currentEquity - startEquity;
      const totalReturnPct = ((totalReturn / startEquity) * 100);
      return { totalReturn, totalReturnPct };
    }

    // Fallback if no history available
    return { totalReturn: 0, totalReturnPct: 0 };
  };

  const formatCurrency = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };

  const formatCurrencyOrPlaceholder = (value?: string | number | null) => {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    return formatCurrency(value);
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
  const historyHasEquity = Boolean(portfolioHistory?.equity?.length);
  const displayPortfolioValue =
    customMode !== 'none' && historyHasEquity
      ? portfolioHistory!.equity[portfolioHistory!.equity.length - 1]
      : account?.equity;
  const displayCash = customMode !== 'none' ? null : account?.cash;

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
            <p className="text-lg sm:text-3xl font-bold text-white">{formatCurrencyOrPlaceholder(displayPortfolioValue)}</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700">
            <h3 className="text-slate-400 text-xs sm:text-sm mb-2">Cash</h3>
            <p className="text-lg sm:text-3xl font-bold text-white">{formatCurrencyOrPlaceholder(displayCash)}</p>
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
            <div className="flex gap-1 sm:gap-2 flex-wrap items-center">
              {['1D', '1W', '1M', '3M', 'ALL'].map((period) => {
                const showNavigation = (period === '1D' || period === '1W' || period === '1M' || period === '3M') && selectedPeriod === period;
                
                return (
                  <div key={period} className="flex items-center gap-1">
                    {showNavigation && (
                      <button
                        onClick={() => {
                          if (period === '1D') handleNavigateDay('prev');
                          else if (period === '1W') handleNavigateWeek('prev');
                          else if (period === '1M') handleNavigateMonth('prev');
                          else if (period === '3M') handleNavigate3Months('prev');
                        }}
                        className="px-2 sm:px-2 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                      >
                        ←
                      </button>
                    )}
                    <button
                      onClick={() => {
                        setSelectedPeriod(period);
                        setCustomMode('none');
                        setSelectedMinuteDay('');
                        setRangeStart('');
                        setRangeEnd('');
                        setNavDate(new Date());
                        setPriorDayEquity(null);
                      }}
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                        selectedPeriod === period && customMode === 'none'
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {period}
                    </button>
                    {showNavigation && (
                      <button
                        onClick={() => {
                          if (period === '1D') handleNavigateDay('next');
                          else if (period === '1W') handleNavigateWeek('next');
                          else if (period === '1M') handleNavigateMonth('next');
                          else if (period === '3M') handleNavigate3Months('next');
                        }}
                        className="px-2 sm:px-2 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                      >
                        →
                      </button>
                    )}
                  </div>
                );
              })}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCustomMenuOpen((open) => {
                      const next = !open;
                      if (next) {
                        setDraftRangeStart(rangeStart);
                        setDraftRangeEnd(rangeEnd);
                        setDraftMinuteDay(selectedMinuteDay);
                      }
                      return next;
                    });
                  }}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                    customMode !== 'none'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Custom ▾
                </button>
                {customMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-10 p-3 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-wide text-slate-400">Custom date (minute)</div>
                      <input
                        type="date"
                        value={draftMinuteDay}
                        onChange={(e) => setDraftMinuteDay(e.target.value)}
                        max={todayStr}
                        placeholder="yyyy-mm-dd"
                        className="w-full bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (!draftMinuteDay || draftMinuteDay > todayStr) return;
                          setCustomMode('day');
                          setSelectedMinuteDay(draftMinuteDay);
                          setRangeStart('');
                          setRangeEnd('');
                          setCustomMenuOpen(false);
                        }}
                        className="w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50"
                        disabled={!draftMinuteDay || draftMinuteDay > todayStr}
                      >
                        Apply custom date
                      </button>
                    </div>
                    <div className="border-t border-slate-800 pt-3 space-y-2">
                      <div className="text-xs uppercase tracking-wide text-slate-400">Custom date range (daily)</div>
                      <div className="flex gap-2 min-w-0">
                        <input
                          type="date"
                          value={draftRangeStart}
                          onChange={(e) => setDraftRangeStart(e.target.value)}
                          max={tomorrowStr}
                          placeholder="yyyy-mm-dd"
                          className="flex-1 min-w-0 bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"
                        />
                        <input
                          type="date"
                          value={draftRangeEnd}
                          onChange={(e) => setDraftRangeEnd(e.target.value)}
                          max={tomorrowStr}
                          placeholder="yyyy-mm-dd"
                          className="flex-1 min-w-0 bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (!(draftRangeStart && draftRangeEnd)) return;
                          if (draftRangeStart > tomorrowStr || draftRangeEnd > tomorrowStr) return;
                          setCustomMode('range');
                          setRangeStart(draftRangeStart);
                          setRangeEnd(draftRangeEnd);
                          setSelectedMinuteDay('');
                          setCustomMenuOpen(false);
                        }}
                        className="w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50"
                        disabled={
                          !(draftRangeStart && draftRangeEnd) ||
                          draftRangeStart > tomorrowStr ||
                          draftRangeEnd > tomorrowStr
                        }
                      >
                        Apply date range
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCustomMode('none');
                        setSelectedMinuteDay('');
                        setRangeStart('');
                        setRangeEnd('');
                        setDraftMinuteDay('');
                        setDraftRangeStart('');
                        setDraftRangeEnd('');
                        setCustomMenuOpen(false);
                      }}
                      className="w-full text-sm px-3 py-2 rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600"
                    >
                      Clear custom
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Simple Chart */}
          {portfolioHistory && portfolioHistory.equity && portfolioHistory.equity.length > 0 ? (
            <>
              <div 
                className="relative bg-slate-900/50 rounded-lg p-4 pt-2"
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setTooltipPos(null);
                }}
              >
                <div className="relative h-48 sm:h-64">
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
                
                {/* X-axis labels */}
                <div className="absolute bottom-1 left-0 right-0 flex justify-between px-2 text-xs text-slate-500">
                  {(() => {
                    const labels = [];
                    const totalPoints = portfolioHistory.equity.length;
                    const step = Math.max(1, Math.ceil(totalPoints / 6)); // Show ~6 labels
                    
                    for (let i = 0; i < totalPoints; i += step) {
                      if (i >= totalPoints) break;
                      const xPercent = totalPoints > 1 ? (i / (totalPoints - 1)) * 100 : 0;
                      const isFirst = i === 0;
                      const isLast = i >= totalPoints - step;
                      
                      labels.push(
                        <div
                          key={i}
                          className="absolute text-xs text-slate-500 whitespace-nowrap"
                          style={{
                            left: isFirst ? '0' : isLast ? 'auto' : `${xPercent}%`,
                            right: isLast ? '0' : 'auto',
                            transform: isFirst ? 'translateX(0)' : isLast ? 'translateX(0)' : 'translateX(-50%)',
                          }}
                        >
                          {showDateTime
                            ? new Date(portfolioHistory.timestamp[i] * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
                            : new Date(portfolioHistory.timestamp[i] * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      );
                    }
                    return labels;
                  })()}
                </div>
                </div>
                
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
                      {showDateTime
                        ? new Date(portfolioHistory.timestamp[hoveredIndex] * 1000).toLocaleString()
                        : new Date(portfolioHistory.timestamp[hoveredIndex] * 1000).toLocaleDateString()}
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
              <div className="flex justify-between text-xs sm:text-sm text-slate-400 mt-6 mb-2 px-2">
                <span className="truncate">Start: {formatCurrency(hasRange && priorDayEquity !== null ? priorDayEquity : portfolioHistory.equity[0])}</span>
                <span className="truncate text-right">Current: {formatCurrency(portfolioHistory.equity[portfolioHistory.equity.length - 1])}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500 px-2 hidden">
                <span>
                  {showDateTime
                    ? new Date(portfolioHistory.timestamp[0] * 1000).toLocaleString()
                    : new Date(portfolioHistory.timestamp[0] * 1000).toLocaleDateString()}
                </span>
                <span>
                  {showDateTime
                    ? new Date(portfolioHistory.timestamp[portfolioHistory.timestamp.length - 1] * 1000).toLocaleString()
                    : new Date(portfolioHistory.timestamp[portfolioHistory.timestamp.length - 1] * 1000).toLocaleDateString()}
                </span>
              </div>
              {selectedPeriod === 'ALL' && customMode === 'none' && (
                <div className="mt-4 p-3 bg-yellow-900/40 rounded-lg border border-yellow-700 text-sm flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">⚠️</span>
                  <span className="text-yellow-200 font-semibold">Early Performance:</span>
                  <span className="text-yellow-100">The portfolio experienced a ~20% decline in the first few months due to trading bugs.</span>
                </div>
              )}
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