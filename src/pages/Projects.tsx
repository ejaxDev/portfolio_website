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
      fullDesc: 'Built an end-to-end XGBoost pipeline to predict NFL rushing yards with multi-dimensional feature engineering across player performance, defensive matchups, team context, workload competition, and injury impact modeling. One model for regression (yardage prediction) and one for classification (over/under betting with edge detection).',
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn'],
      metrics: [
        { label: 'RMSE', value: '28.87 yards' },
        { label: 'R² Score', value: '0.39' },
        { label: 'ROC AUC', value: '0.563'}
      ],
      image: '📊',
      github: '#',
      demo: 'project-demo/1',
      highlights: [
        'Complete ML pipeline with betting strategy implementation',
        'Multi-dimensional feature engineering (player, defense, game script)',
        'Strength-of-schedule adjusted defensive metrics',
        'Workload competition and injury impact modeling',
        'Permutation importance feature selection (removed noise features)',
        'Binary classifier for over/under betting with edge detection'
      ]
    },
    {
      id: 2,
      title: 'Volatility Breakout Prediction Model',
      category: 'machine-learning',
      shortDesc: 'Predicts big SPY moves in either direction for options straddle strategy',
      fullDesc: 'Model predicts when SPY will make a significant move in EITHER direction within 30 minutes. Trading strategy: buy both call AND put options, hold for 30 minutes, profit from the swing regardless of direction. Uses multi-timeframe volatility analysis and price deviation patterns to detect upcoming breakouts.',
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'NumPy'],
      metrics: [
        { label: 'ROC-AUC', value: '0.6485' },
        { label: 'Target', value: '5x ATR since open' },
        {label: "Expected Value", value: '5.5% return per trade'}
      ],
      image: '📈',
      github: '#',
      demo: 'project-demo/2',
      highlights: [
        'Complete ML pipeline implementation',
        'Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)',
        'VWAP distance metrics with rolling statistics',
        'Parallel label generation with ThreadPoolExecutor (8 workers)',
        'Time-series cross-validation with expanding window',
        'Feature engineering with interaction terms (time × volume, VWAP × ATR)'
      ]
    },
    {
      id: 3,
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
      demo: null,
      highlights: [
        'Responsive design for all devices',
        'Dark theme with modern aesthetics',
        'Project showcase with filters',
        'Contact form integration',
        'Performance optimized'
      ]
    },
    {
      id: 4,
      title: 'Options Profit Prediction Model',
      category: 'machine-learning',
      shortDesc: 'XGBoost model predicting profitable SPY options trades',
      fullDesc: 'Predicts if buying a SPY option NOW will be profitable by 3:30pm. Strategy: scan strikes open +2% to open-2% throughout the day, buy when model shows high relative confidence, sell at 3:30pm. Uses rolling price statistics (5min to 2hr windows) to detect patterns that lead to profitable end-of-day positions.',
      technologies: ['Python', 'XGBoost', 'Polygon API', 'ThreadPoolExecutor', 'Pandas'],
      metrics: [
        { label: 'Target', value: '3:30pm Profit' },
        { label: 'ROC-AUC', value: '0.8043' },
        {label: 'Overall Accuracy', value: '76.52%'}
      ],
      image: '💰',
      github: '#',
      demo: 'project-demo/4',
      highlights: [
        'Complete workflow: data fetching → features → labeling → training → calibration → deployment',
        'Parallel data fetching with ThreadPoolExecutor for thousands of option contracts',
        'Multi-window features across 6 timeframes (5min, 10min, 15min, 30min, 60min, 120min)',
        'Walk-forward validation - train on past years, test on future (no peeking)',
        'Calibration analysis to verify predicted probabilities match reality',
        'Outlier detection strategy: find unusually high-confidence predictions vs historical distribution'
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
                        className={`${project.demo ? 'flex-1' : 'w-full'} px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm`}
                      >
                        GitHub
                      </a>
                      {project.demo && (
                        <Link
                          to={project.demo}
                          className="flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm"
                        >
                          View Project
                        </Link>
                      )}
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