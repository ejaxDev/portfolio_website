import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, my name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Eric Jackson</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Applied mathematics & computer science student focused on data science, machine learning, and analytical systems.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  to="/portfolio_website/projects"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  to="/portfolio_website/contact"
                  className="px-8 py-3 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right Side - Profile Image Area */}
            {/* Right Side - Profile Image Area */}
            <div className="relative h-96 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"></div>
            <div className="relative h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden">
                <img
                src="/portfolio_website/good_boy_pic2.jpeg" // replace with your image URL or import
                alt="Profile"
                className="object-cover w-full h-full rounded-lg"
                />
            </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
    <p className="text-slate-300 mb-12 text-lg">
      Personal projects focused on data-driven modeling and real-world systems
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Project 1 */}
      <div className="group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400">
        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
          <p className="text-slate-300 font-semibold">Investment Analytics</p>
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-white">
            ML-Driven Options Trading System
          </h3>
          <p className="text-slate-300 text-sm">
            Built an end-to-end trading system combining XGBoost-based predictive models with
            live WebSocket market data, automated execution, and risk management on AWS.
          </p>
          <div className="flex gap-2 flex-wrap pt-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Python</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">XGBoost</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">AWS</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">WebSockets</span>
          </div>
          <Link
            to="/projects"
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm"
          >
            View Project →
          </Link>
        </div>
      </div>

      {/* Project 2 */}
      <div className="group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400">
        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
          <p className="text-slate-300 font-semibold">Sports Analytics</p>
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-white">
            NFL Rushing Yards Prediction
          </h3>
          <p className="text-slate-300 text-sm">
            Developed an XGBoost regression pipeline using historical NFL data, engineered
            rolling workload and efficiency features, and evaluated performance on
            out-of-sample seasons.
          </p>
          <div className="flex gap-2 flex-wrap pt-2">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Python</span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">XGBoost</span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Feature Engineering</span>
          </div>
          <Link
            to="/projects"
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm"
          >
            View Project →
          </Link>
        </div>
      </div>

    </div>

    <div className="text-center mt-12">
      <Link
        to="/projects"
        className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors"
      >
        View All Projects
      </Link>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Python', 'Pandas', 'SQL', 'Machine Learning', 'Statistical Modeling', 'AWS', 'Docker', 'Git'].map((skill) => (
              <div
                key={skill}
                className="bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg p-6 text-center border border-slate-600 hover:border-blue-400"
              >
                <p className="text-white font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Let’s connect</h2>
          <p className="text-xl text-blue-100">
            Open to internships, research, and data-driven projects in analytics, machine learning, and applied math.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;