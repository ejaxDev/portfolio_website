import { ProjectDemoData } from "../types/projectDemo"

export const rushYardProject: ProjectDemoData = {
  id: "1",
  title: "NFL Rushing Yards Prediction",
  description: "End-to-end XGBoost pipeline predicting RB rushing yards with multi-dimensional feature engineering across player performance, defensive matchups, team context, and workload competition. Features comprehensive injury modeling, game script analysis, and betting line classification with edge detection.",
  githubUrl: "https://github.com/yourusername/nfl-rushing-prediction",
  plots: [
    {
      title: 'Betting Strategy Performance',
      description: 'Simulation showing how the model could be used for sports betting. When model predictions significantly differ from Vegas odds, this indicates potential betting opportunities. Chart displays cumulative profits over two seasons using this edge detection strategy.',
      imageUrl: '/portfolio_website/rush_yard_equityCurve.png'
    },
    {
      title: 'Model Calibration',
      description: 'Analysis showing how reliable the model\'s probability predictions are. When the model says there\'s a 60% chance of something happening, it should actually happen about 60% of the time. The curve is monotonic and not perfectly calibrated, but this is expected when predicting a difficult target variable like NFL rushing yards. The histogram shows the distribution of prediction confidence levels.',
      imageUrl: '/portfolio_website/rush_yard_calib.png'
    },
    {
      title: 'Player-Specific Predictions',
      description: 'Model predictions for different NFL running backs showing how performance varies across players. Navigate through the gallery to see individual prediction charts for each player, demonstrating the model\'s ability to capture unique player patterns and tendencies. Color-coded bars show prediction accuracy, with green indicating correct predictions and red showing misses.',
      imageUrl: '/portfolio_website/rush_yard_cmc.png',
      imageUrls: [
        {
          url: '/portfolio_website/rush_yard_cmc.png',
          label: 'Christian McCaffrey'
        },
        {
          url: '/portfolio_website/rush_yard_kingHen.png',
          label: 'Derrick Henry'
        },
        {
          url: '/portfolio_website/rush_yard_josh_jacobs.png',
          label: 'Josh Jacobs'
        },
        {
          url: '/portfolio_website/rush_yard_JT.png',
          label: 'Jonathan Taylor'
        },
        {
          url: '/portfolio_website/rush_yard_blake_corum.png',
          label: 'Blake Corum'
        },
        {
          url: '/portfolio_website/rush_yard_jeanty.png',
          label: 'Ashton Jeanty'
        },
        {
          url: '/portfolio_website/rush_yard_RJ_Harv.png',
          label: 'RJ Harvey'
        }
      ]
    }
  ]
}
