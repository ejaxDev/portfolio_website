import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Eric Jackson</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - Image & Quick Info */}
            <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"></div>
            <div className="relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden">
                <img
                src="good_boy_pic1.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
            </div>              
{/* Quick Facts */}
              <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-400 text-sm">Full Name</p>
                    <p className="text-white font-semibold">Eric Jackson</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Education</p>
                    <p className="text-white font-semibold">Applied Math & CS</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">University</p>
                    <p className="text-white font-semibold">University of Delaware</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Specialization</p>
                    <p className="text-white font-semibold">Data Science & ML</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold">
                  in
                </a>
                <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold">
                  GH
                </a>
                <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white">
                  ✉
                </a>
              </div>
            </div>

            {/* Right - Bio & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Professional Summary</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  I'm a Data Science enthusiast and incoming graduate with a degree in Applied Mathematics and Computer Science from the University of Delaware's Honors College. Currently, I'm passionate about building machine learning solutions that drive real business value, from predictive analytics to live trading frameworks and ML models.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  My experience spans data pipeline development, feature engineering, and deploying production ML models. I combine strong mathematical foundations with practical software engineering to solve complex data-driven problems. I'm particularly interested in financial analytics and sports data science.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
                <div className="space-y-6">
                  {/* Experience Item 1 */}
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
                    <p className="text-blue-400 font-semibold">Victory Capital Management</p>
                    <p className="text-slate-400 text-sm">Technologies: Python, SQL, K-Means Clustering</p>
                    <ul className="text-slate-300 mt-3 space-y-2 text-sm">
                      <li>• Extracted user-level data from Amazon Redshift using SQL to build datasets for K-Means clustering, enabling actionable insights into customer behavior</li>
                      <li>• Diagnosed and resolved data and modeling issues in production K-Means pipeline, including low-signal features, misinterpreted clusters, and inconsistent behavioral definitions</li>
                      <li>• Redesigned feature engineering pipeline, increasing silhouette scores and producing more interpretable clusters for effective customer segmentation</li>
                      <li>• Streamlined cluster usability for downstream analytics, improving decision-making for marketing campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <h3 className="text-xl font-bold text-white">Bachelor of Science in Applied Mathematics & Computer Science</h3>
                  <p className="text-blue-400 font-semibold">University of Delaware, Newark, DE</p>
                  <p className="text-slate-400 text-sm">Honors College | Expected May 2027</p>
                </div>
              </div>

              {/* University Activities */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">University Activities</h2>
                <div className="border-l-4 border-cyan-400 pl-6">
                  <h3 className="text-xl font-bold text-white">Paid Instructional Assistant</h3>
                  <p className="text-cyan-400 font-semibold">General Computer Science for Engineers</p>
                  <ul className="text-slate-300 mt-3 space-y-2 text-sm">
                    <li>• Lead lectures assisting engineering students new to computer science in understanding core programming concepts</li>
                    <li>• Provide one-on-one support to students in Python programming, troubleshooting, and reinforcing best practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Languages</h3>
              <div className="space-y-2">
                {['Python', 'SQL', 'C++', 'C', 'JavaScript', 'TypeScript'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ML & Data Science */}
            <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-cyan-400 transition-colors">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">ML & Data Science</h3>
              <div className="space-y-2">
                {['scikit-learn', 'XGBoost', 'Feature Engineering', 'Statistical Modeling', 'Hypothesis Testing', 'EDA'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & Visualization */}
            <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-400 transition-colors">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Data & Visualization</h3>
              <div className="space-y-2">
                {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-green-400 transition-colors">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Cloud & Infrastructure</h3>
              <div className="space-y-2">
                {['AWS (S3, Redshift, ECS, ECR)', 'Docker', 'Firebase', 'WebSocket Streaming'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-slate-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Developer Tools</h3>
              <div className="space-y-2">
                {['Git', 'Bash', 'Jupyter Notebook', 'Visual Studio Code', 'Docker'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-pink-400 transition-colors">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Databases</h3>
              <div className="space-y-2">
                {['Amazon Redshift', 'SQL Databases', 'Firebase'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Let's Collaborate</h2>
          <p className="text-xl text-blue-100">
            I'm always excited to discuss data science projects, ML opportunities, or collaborate on interesting problems.
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

export default About;