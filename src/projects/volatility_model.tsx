import { ProjectDemoData } from "../types/projectDemo"

export const volatilityModel: ProjectDemoData = {
  id: "3",
  title: "SPY Volatility Breakout Prediction",
  description: "Predicts when SPY will make significant moves in either direction within the next 30 minutes. Uses multi-timeframe analysis and price deviation metrics to detect volatility breakouts for options straddle strategies.",
  githubUrl: "https://github.com/yourusername/spy-volatility-prediction",
  plots: [
    {
      title: 'Volatility Prediction Performance',
      description: 'ROC curves and performance metrics across different timeframes',
      imageUrl: 'https://via.placeholder.com/600x400?text=Volatility+Performance'
    },
    {
      title: 'Feature Importance Analysis',
      description: 'Top features contributing to volatility breakout predictions',
      imageUrl: 'https://via.placeholder.com/600x400?text=Feature+Analysis'
    },
    {
      title: 'Breakout Detection Timeline',
      description: 'Real-time visualization of predicted vs actual volatility events',
      imageUrl: 'https://via.placeholder.com/600x400?text=Breakout+Timeline'
    }
  ]
}