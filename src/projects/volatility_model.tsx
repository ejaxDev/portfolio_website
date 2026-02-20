import { ProjectDemoData } from "../types/projectDemo"

export const volatilityModel: ProjectDemoData = {
  id: "3",
  title: "SPY Volatility Breakout Prediction",
  description: "Predicts when SPY will make significant moves in either direction within the next 30 minutes. Uses multi-timeframe analysis and price deviation metrics to detect volatility breakouts for options straddle strategies.",
  githubUrl: "https://github.com/ejaxDev/big_movement_model",
  plots: [
    {
      title: 'Model Calibration Analysis',
      description: 'Calibration curve showing prediction reliability',
      imageUrl: '/portfolio_website/big_movement_calib_curve.png'
    },
    {
      title: 'Trading Strategy Results',
      description: 'Experimental volatility prediction strategy that attempts to profit from large price movements in either direction. When the model predicts high volatility (≥60% confidence), it simultaneously bets on both upward and downward moves. The strategy achieved 10.9% total return over a 3-year testing period. While absolute returns are modest, the approach demonstrates successful volatility timing with controlled risk (max drawdown: -9%). The model\'s primary contribution is identifying high-volatility opportunities and filtering out low-movement periods. Note: Backtest assumes theoretical execution without transaction costs.',
      imageUrl: '/portfolio_website/big_movement_equity_curve.png'
    }
  ]
}