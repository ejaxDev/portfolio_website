import { ProjectDemoData } from "../types/projectDemo"
      
export const tradingFramework: ProjectDemoData = {
  id: '2',
  title: 'Live Trading Framework',
  description: 'Python-based automated trading system for live options trading. Features real-time market data streaming, XGBoost ML volatility prediction, and automated order execution via Alpaca API.',
  githubUrl: "https://github.com/yourusername/live-trading-framework",
  plots: [
    {
      title: 'Trading Performance Dashboard',
      description: 'Real-time P&L tracking and performance metrics visualization',
      imageUrl: 'https://via.placeholder.com/600x400?text=Trading+Dashboard'
    },
    {
      title: 'Strategy Backtest Results',
      description: 'Historical performance analysis across different market conditions',
      imageUrl: 'https://via.placeholder.com/600x400?text=Backtest+Results'
    }
  ]
}
