import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
{/* Resume Highlights */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-10 backdrop-blur-sm space-y-10">

    {/* Header */}
    <div>
      <h2 className="text-4xl font-bold text-white mb-3">
        Resume Highlights
      </h2>
      <p className="text-slate-300 text-lg">
        Applied Mathematics & Computer Science student focused on data science, machine learning,
        and quantitative systems.
      </p>
    </div>

    {/* Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-slate-900/60 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-blue-400">0.8043</h3>
        <p className="text-slate-300 mt-2">
          ROC-AUC for SPY options profit prediction model using multi-timeframe features
        </p>
      </div>

      <div className="bg-slate-900/60 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-cyan-400">5.5%</h3>
        <p className="text-slate-300 mt-2">
          Expected Value per trade from volatility breakout trading strategy over 3 years
        </p>
      </div>

      <div className="bg-slate-900/60 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-blue-400">28.87</h3>
        <p className="text-slate-300 mt-2">
          RMSE for NFL rushing yards prediction with multi-dimensional feature engineering
        </p>
      </div>
    </div>

    {/* Experience */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-3">
        Data Science Intern — Victory Capital Management
      </h3>
      <p className="text-slate-400 text-sm mb-4">
        Python · SQL · K-Means · Amazon Redshift
      </p>

      <ul className="space-y-2 text-slate-300">
        <li>▸ Built K-Means datasets from Redshift user-level data for customer segmentation</li>
        <li>▸ Diagnosed production ML failures including low-signal features and cluster misuse</li>
        <li>▸ Redesigned feature pipelines to improve silhouette scores and interpretability</li>
        <li>▸ Improved downstream analytics usability for marketing decision-making</li>
      </ul>
    </div>

    {/* Projects */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">Selected Projects</h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            NFL Rushing Yards Prediction
          </h4>
          <p className="text-slate-300">
            End-to-end XGBoost pipeline with multi-dimensional feature engineering across player performance, 
            defensive matchups, and team context. Achieved RMSE of 28.87 yards and ROC-AUC of 0.563 with 
            comprehensive betting strategy implementation.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            SPY Options Profit Prediction
          </h4>
          <p className="text-slate-300">
            XGBoost model predicting profitable SPY options trades by 3:30pm market close. 
            Achieved ROC-AUC of 0.8043 using rolling price statistics across 6 timeframes 
            with parallel data fetching and walk-forward validation.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            Volatility Breakout Prediction
          </h4>
          <p className="text-slate-300">
            Multi-timeframe volatility analysis model predicting significant SPY moves within 
            30 minutes. Uses ATR, VWAP distance metrics, and parallel feature generation 
            for options straddle strategies.
          </p>
        </div>
      </div>
    </div>

    {/* Skills */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
        <p><span className="text-blue-400 font-semibold">Languages:</span> Python, SQL, JavaScript, TypeScript</p>
        <p><span className="text-blue-400 font-semibold">ML/Data:</span> XGBoost, scikit-learn, Pandas, NumPy, Matplotlib, feature engineering</p>
        <p><span className="text-blue-400 font-semibold">Tools:</span> Git, Docker, ThreadPoolExecutor, parallel processing</p>
      </div>
    </div>

    {/* CTA */}
    <div className="pt-4">
      <a
        href="/portfolio_website/resume.pdf"
        download
        className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
      >
        Download Full Resume (PDF)
      </a>
    </div>

  </div>
</section>
    </div>
  );
};

export default Resume;