// src/pages/ProjectDemo.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trackProjectView } from '../utils/analytics';

import { PlotData } from "../types/projectDemo"
import { projectRegistry } from '../projects';

const ProjectDemo: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedImage, setSelectedImage] = useState<PlotData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project demo data with code samples and plots
  const demo = projectRegistry[projectId || ''];

  // Track project view
  useEffect(() => {
    if (demo) {
      trackProjectView(demo.title);
    }
  }, [demo]);



  if (!demo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const handlePrevImage = () => {
    if (selectedImage?.imageUrls) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImage.imageUrls!.length) % selectedImage.imageUrls!.length);
    }
  };

  const handleNextImage = () => {
    if (selectedImage?.imageUrls) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImage.imageUrls!.length);
    }
  };

  const getCurrentImageUrl = () => {
    if (!selectedImage) return '';
    if (selectedImage.imageUrls && selectedImage.imageUrls.length > 0) {
      return selectedImage.imageUrls[currentImageIndex].url;
    }
    return selectedImage.imageUrl;
  };

  const getCurrentImageLabel = () => {
    if (!selectedImage?.imageUrls) return null;
    return selectedImage.imageUrls[currentImageIndex]?.label;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{demo.title}</h1>
          <p className="text-xl text-slate-300 mb-6">{demo.description}</p>
          {demo.githubUrl && (
            <a
              href={demo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View Source Code
            </a>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Plots Section */}
          {demo.plots && demo.plots.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-white mb-12">Results & Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {demo.plots.map((plot, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-400 transition-colors cursor-pointer hover:shadow-lg hover:shadow-blue-500/20"
                    onClick={() => {
                      setSelectedImage(plot);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <div className="aspect-video bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors">
                      <img
                        src={plot.imageUrl}
                        alt={plot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{plot.title}</h3>
                      <div className="text-slate-300">{plot.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[98vw] h-[98vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <div className="bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative" style={{ minHeight: 'calc(98vh - 120px)' }}>
              <img
                src={getCurrentImageUrl()}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
                style={{ maxHeight: 'calc(98vh - 140px)' }}
              />

              {/* Navigation Arrows - Only show if multiple images */}
              {selectedImage.imageUrls && selectedImage.imageUrls.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20"
                  >
                    ‹
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20"
                  >
                    ›
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-2 left-2 bg-black/60 px-3 py-1 rounded-lg text-white text-sm font-semibold">
                    {currentImageIndex + 1} / {selectedImage.imageUrls.length}
                  </div>
                </>
              )}
            </div>

            {/* Info */}
            <div className="bg-slate-800 p-4 rounded-b-lg border-t border-slate-700 flex-shrink-0 max-h-[100px] overflow-y-auto">
              <h3 className="text-lg font-bold text-white mb-1">
                {selectedImage.title}
                {getCurrentImageLabel() && <span className="text-blue-400 text-base ml-2">— {getCurrentImageLabel()}</span>}
              </h3>
              <div className="text-slate-300 text-sm">{selectedImage.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDemo;