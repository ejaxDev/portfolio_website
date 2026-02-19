import { ProjectDemoData } from "../types/projectDemo"

export const rushYardProject: ProjectDemoData = {
  id: "1",
  title: "NFL Rushing Yards Prediction",
  description: "End-to-end XGBoost pipeline predicting RB rushing yards with multi-dimensional feature engineering across player performance, defensive matchups, team context, and workload competition. Features comprehensive injury modeling, game script analysis, and betting line classification with edge detection.",
  githubUrl: "https://github.com/yourusername/nfl-rushing-prediction",
  plots: [
    {
      title: 'Season-by-Season Performance',
      description: 'MAE, RMSE, and R² metrics across 2019-2023 test seasons',
      imageUrl: 'https://via.placeholder.com/600x400?text=Season+Performance'
    },
    {
      title: 'Prediction vs Actual Distribution',
      description: 'Scatter plot showing model calibration and residual patterns',
      imageUrl: 'https://via.placeholder.com/600x400?text=Prediction+Distribution'
    },
    {
      title: 'Feature Importance Rankings',
      description: 'Top 20 features by permutation importance with confidence intervals',
      imageUrl: 'https://via.placeholder.com/600x400?text=Feature+Importance'
    }
  ]
}
