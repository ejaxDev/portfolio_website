import { ProjectDemoData } from "../types/projectDemo"

export const optionProfitModel: ProjectDemoData = {
  id: "5",
  title: "SPY Options Profit Prediction",
  description: "Predicts if buying a SPY option will be profitable by 3:30pm. Scans all strikes throughout the trading day using rolling price statistics to identify high-confidence entry points for end-of-day profit.",
  githubUrl: "https://github.com/yourusername/spy-options-prediction",
  plots: [
    {
      title: 'Model Performance Metrics',
      description: 'ROC curves and profit/loss distribution analysis',
      imageUrl: 'https://via.placeholder.com/600x400?text=Performance+Metrics'
    },
    {
      title: 'Strike Selection Strategy',
      description: 'Optimal strike selection based on rolling price patterns',
      imageUrl: 'https://via.placeholder.com/600x400?text=Strike+Strategy'
    },
    {
      title: 'Intraday Signal Detection',
      description: 'Real-time visualization of profitable entry signals',
      imageUrl: 'https://via.placeholder.com/600x400?text=Signal+Detection'
    }
  ]
}