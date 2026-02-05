import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedHighlights, setExpandedHighlights] = useState<Set<number>>(new Set());

  const projects = [
    {
      id: 1,
      title: 'Sports Analytics Predictions',
      category: 'machine-learning',
      shortDesc: 'NFL rushing yards prediction using XGBoost',
      fullDesc: 'Built an end-to-end machine learning pipeline to predict NFL rushing yards using historical game data. The model engineers rolling workload, efficiency, and matchup features to achieve competitive predictive performance.',
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn'],
      metrics: [
        { label: 'RMSE', value: '27.8 yards' },
        { label: 'R² Score', value: '0.46' },
        { label: 'Classification ROC-AUC', value: '0.626' }
      ],
      image: '📊',
      github: '#',
      demo: 'project-demo/1',
      highlights: [
        'Feature engineering from historical game data',
        'Out-of-sample validation on full season',
        'Classification model for over/under predictions',
        'Actionable insights for sports analytics'
      ]
    },
    {
      id: 2,
      title: 'Live Trading Framework',
      category: 'systems-engineering',
      shortDesc: 'Automated intraday SPY options trading framework',
      fullDesc: 'Built a live Python trading framework for SPY options with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, Alpaca API order execution, and automated daily shutdown at market close.',
      technologies: ['Python', 'WebSocket', 'Alpaca API', 'Asyncio', 'Docker'],
      metrics: [
        { label: 'Data Source', value: 'Tastytrade dxFeed' },
        { label: 'Execution', value: 'Alpaca API' },
        { label: 'Architecture', value: 'Async/Event-driven' }
      ],
      image: '⚙️',
      github: '#',
      demo: 'project-demo/2',
      highlights: [
        'Real-time market data streaming via Tastytrade dxFeed WebSocket',
        'Pluggable strategy architecture with async event loop',
        'Alpaca API for automated order execution',
        'Position tracking with entry/exit prices and P&L',
        'Daily auto-shutdown at market close',
        'Configurable timeframes and data requirements'
      ]
    },
    {
      id: 3,
      title: 'Volatility Breakout Prediction Model',
      category: 'machine-learning',
      shortDesc: 'XGBoost model for predicting volatility breakouts in SPY options',
      fullDesc: 'Built XGBoost binary classification model to predict when price will move 5x the average true range (measured from market open) within 30 minutes. Uses expanding intraday volatility, multi-timeframe ATR windows, VWAP distance metrics, and volume patterns for regime detection.',
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'NumPy'],
      metrics: [
        { label: 'ROC-AUC', value: '0.686' },
        { label: 'Target', value: '5x ATR from Open' },
        { label: 'Training Data', value: '1 Year' }
      ],
      image: '📈',
      github: '#',
      demo: 'project-demo/3',
      highlights: [
        'Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)',
        'VWAP distance metrics with rolling statistics',
        'Binary classification for volatility breakout prediction',
        'Parallel label generation for large datasets',
        'Model calibration analysis with Brier score and log loss',
        'Feature engineering with interaction terms'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web-development',
      shortDesc: 'Personal portfolio built with React & Tailwind CSS',
      fullDesc: 'A modern, responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS for a clean, professional design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      metrics: [
        { label: 'Framework', value: 'React 19' },
        { label: 'Styling', value: 'Tailwind CSS' },
        { label: 'Build Tool', value: 'Vite' }
      ],
      image: '💼',
      github: '#',
      demo: '/',
      highlights: [
        'Responsive design for all devices',
        'Dark theme with modern aesthetics',
        'Project showcase with filters',
        'Contact form integration',
        'Performance optimized'
      ]
    },
    {
      id: 5,
      title: 'Options Profit Prediction Model',
      category: 'machine-learning',
      shortDesc: 'XGBoost model predicting profitable SPY options trades',
      fullDesc: 'Built binary classifier with 100+ engineered features to predict end-of-day profitability for SPY options. Includes SHAP-driven interaction features, intraday positioning metrics, and EV analysis by strike/threshold. Deployed to AWS S3 for production inference.',
      technologies: ['Python', 'XGBoost', 'SHAP', 'AWS S3', 'Pandas'],
      metrics: [
        { label: 'Features', value: '100+' },
        { label: 'Target', value: 'EOD Profit' },
        { label: 'Deployment', value: 'AWS S3' }
      ],
      image: '💰',
      github: '#',
      demo: 'project-demo/5',
      highlights: [
        '100+ engineered features across price, volume, and microstructure',
        'SHAP analysis for feature discovery and interaction terms',
        'Intraday positioning features (distance from day high/low)',
        'Expected value analysis by OTM strike and confidence threshold',
        'Statistical validation with paired t-tests',
        'Production deployment to AWS S3'
      ]
    },
    {
      id: 6,
      title: 'Intraday Direction Classifier',
      category: 'machine-learning',
      shortDesc: 'XGBoost model for second-level SPY directional prediction',
      fullDesc: 'Multi-class XGBoost classifier predicting SPY near-term movement intensity (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization with multi-threaded backtesting framework.',
      technologies: ['Python', 'XGBoost', 'Pandas', 'ThreadPoolExecutor'],
      metrics: [
        { label: 'Overall Accuracy', value: '60%' },
        { label: 'Classes', value: '5 (Directional)' },
        { label: 'Frequency', value: '1-second' }
      ],
      image: '🎯',
      github: '#',
      demo: 'project-demo/6',
      highlights: [
        'Multi-class classifier for intraday momentum (5 classes)',
        'Feature selection from colleague\'s proprietary indicators',
        'Options trading strategy with consecutive signal logic',
        'Multi-threaded backtesting engine for fast validation',
        'Position management with 10-minute hold duration',
        'Risk controls with time-based entry/exit cutoffs',
        'Real-time option pricing from Polygon API'
      ]
    },
    
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'systems-engineering', label: 'Systems Engineering' },
    { value: 'web-development', label: 'Web Development' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const toggleHighlights = (projectId: number) => {
    setExpandedHighlights(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-slate-300 mb-8">
            A collection of data science, machine learning, and web development projects I've built
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <label htmlFor="category-filter" className="text-white font-semibold">Filter by category:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-colors cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="text-slate-400 text-sm">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-400">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
                >
                  {/* Project Header with Icon */}
                  <div className="h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border-b border-slate-600">
                    <span className="text-6xl">{project.image}</span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
                        {categories.find(c => c.value === project.category)?.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                    {/* Short Description */}
                    <p className="text-slate-400 text-sm mb-4">{project.shortDesc}</p>

                    {/* Full Description */}
                    <p className="text-slate-300 text-sm mb-6 flex-grow">{project.fullDesc}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-slate-600/50 rounded p-3 text-center">
                          <p className="text-slate-400 text-xs mb-1">{metric.label}</p>
                          <p className="text-white font-bold text-sm">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-slate-400 text-xs font-semibold mb-2">TECHNOLOGIES</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-600/70 text-slate-200 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-slate-400 text-xs font-semibold mb-2">HIGHLIGHTS</p>
                      <ul className="space-y-1">
                        {(expandedHighlights.has(project.id) 
                          ? project.highlights 
                          : project.highlights.slice(0, 3)
                        ).map((highlight, idx) => (
                          <li key={idx} className="text-slate-300 text-xs flex items-start gap-2">
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      {project.highlights.length > 3 && (
                        <button
                          onClick={() => toggleHighlights(project.id)}
                          className="text-blue-400 hover:text-blue-300 text-xs mt-2 font-medium transition-colors"
                        >
                          {expandedHighlights.has(project.id) 
                            ? '- Show Less' 
                            : `+ Show ${project.highlights.length - 3} More`}
                        </button>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        className="flex-1 px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm"
                      >
                        GitHub
                      </a>
                      <Link
                        to={project.demo}
                        className="flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Interested in My Work?</h2>
          <p className="text-xl text-blue-100">
            Let's discuss how I can help with your data science or ML challenges.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;