import { ProjectDemoData } from "../types/projectDemo"

export const optionProfitModel: ProjectDemoData = {
  id: "5",
  title: "SPY Options Profit Prediction",
  description: 'Predicts if buying a SPY option will be profitable by 3:30pm market close. The model scans option strikes within ±2% of current SPY price throughout the trading day, using rolling price statistics across multiple timeframes (5min to 2hr windows) to identify high-confidence entry points. Strategy employs relative confidence scoring that accounts for strike distance from current price.',
  githubUrl: "https://github.com/yourusername/spy-options-prediction",
  plots: [
    {
      title: 'Model Calibration',
      description: 'Calibration curve demonstrating model reliability with monotonic behavior and strong predictive accuracy. The model achieves an ROC AUC of 0.8043, indicating excellent discrimination capabilities. Note that far out-of-the-money options are inherently easier to predict as unprofitable, which inflates overall performance metrics.',
      imageUrl: '/portfolio_website/option_model_calib.png'
    },
    {
      title: 'Trading Performance by Strike Distance',
      description: 'Strategy performance across different option strike prices relative to SPY\'s current price. The analysis reveals optimal strike selection zones, with near-the-money options (-0.5% to +0.5% OTM) showing the strongest performance. This demonstrates the model\'s ability to balance risk-reward ratios across the options chain. Note: Backtest assumes theoretical execution without slippage costs.',
      imageUrl: '/portfolio_website/option_model_results.png'
    }
  ]
}