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
        <h3 className="text-3xl font-bold text-blue-400">+4%</h3>
        <p className="text-slate-300 mt-2">
          Expected value from ML trading models using XGBoost and live market data
        </p>
      </div>

      <div className="bg-slate-900/60 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-cyan-400">0.46 R²</h3>
        <p className="text-slate-300 mt-2">
          NFL rushing yard predictions with engineered workload and matchup features
        </p>
      </div>

      <div className="bg-slate-900/60 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-blue-400">Production ML</h3>
        <p className="text-slate-300 mt-2">
          Rebuilt clustering pipelines used by marketing analytics teams
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
            Sports Analytics Predictions
          </h4>
          <p className="text-slate-300">
            Built an XGBoost pipeline on real NFL rushing data with rolling workload and matchup
            features. Achieved RMSE of 27.8 yards and ROC-AUC of 0.626 on out-of-sample predictions.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            Live Trading Framework
          </h4>
          <p className="text-slate-300">
            Built automated intraday SPY options trading framework with Tastytrade dxFeed WebSocket for
            real-time data, pluggable ML model integration, and Alpaca API for order execution.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            5 ATR Volatility Breakout Model
          </h4>
          <p className="text-slate-300">
            Built XGBoost model to predict when SPY will move 5x the expanding average true range from
            market open within 30 minutes, using multi-timeframe ATR, VWAP distance, and volume patterns.
          </p>
        </div>
      </div>
    </div>

    {/* Skills */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
        <p><span className="text-blue-400 font-semibold">Languages:</span> Python, SQL, C++, JavaScript, TypeScript</p>
        <p><span className="text-blue-400 font-semibold">ML:</span> XGBoost, scikit-learn, clustering, feature engineering</p>
        <p><span className="text-blue-400 font-semibold">Data:</span> Pandas, NumPy, Matplotlib, Seaborn, Plotly</p>
        <p><span className="text-blue-400 font-semibold">Infra:</span> AWS, Docker, Redshift, Firebase</p>
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