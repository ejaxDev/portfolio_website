// src/pages/ProjectDemo.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

import { PlotData, ProjectDemoData } from "../types/projectDemo"
import { rushYardProject } from '../projects/rush_yard';
import { vwapBounceProject } from '../projects/vwap_bounce';

const ProjectDemo: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedImage, setSelectedImage] = useState<PlotData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project demo data with code samples and plots
  const projectDemos: { [key: string]: ProjectDemoData } = {
    '1': rushYardProject,
    '2': vwapBounceProject,
    '3': {
      id: '3',
      title: 'Portfolio Website - Code Demo',
      description: 'Technical implementation of this portfolio',
      codeSamples: [
        {
          label: 'Responsive Layout Component',
          description: 'Tailwind CSS-based responsive grid system',
          code: `export const ResponsiveGrid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  );
};

// Usage in Projects page:
<ResponsiveGrid>
  {projects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</ResponsiveGrid>`
        },
        {
          label: 'Project Filter Hook',
          description: 'Custom React hook for category filtering',
          code: `const useProjectFilter = (projects, initialCategory = 'all') => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category === selectedCategory);
  }, [projects, selectedCategory]);
  
  return {
    filteredProjects,
    selectedCategory,
    setSelectedCategory,
    projectCount: filteredProjects.length
  };
};`
        },
        {
          label: 'Dark Theme Implementation',
          description: 'Custom Tailwind theme configuration',
          code: `// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          400: '#94a3b8'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  }
}`
        }
      ],
      plots: [
        {
          title: 'Component Architecture',
          description: 'Visual representation of component hierarchy',
          imageUrl: 'https://via.placeholder.com/600x400?text=Component+Architecture'
        },
        {
          title: 'Performance Metrics',
          description: 'Lighthouse scores and Core Web Vitals',
          imageUrl: 'https://via.placeholder.com/600x400?text=Performance+Metrics'
        }
      ]
    }
  };

  const demo = projectDemos[projectId || ''];

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
          <p className="text-xl text-slate-300">{demo.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Code Samples Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12">Code Samples</h2>
            {demo.codeSamples.map((sample, idx) => (
              <CodeBlock
                key={idx}
                label={sample.label}
                description={sample.description}
                code={sample.code}
              />
            ))}
          </div>

          {/* Plots Section */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Visualizations & Results</h2>
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
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <div className="bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative">
              <img
                src={getCurrentImageUrl()}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows - Only show if multiple images */}
              {selectedImage.imageUrls && selectedImage.imageUrls.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20"
                  >
                    ‹
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20"
                  >
                    ›
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold">
                    {currentImageIndex + 1} / {selectedImage.imageUrls.length}
                  </div>
                </>
              )}
            </div>

            {/* Info */}
            <div className="bg-slate-800 p-6 rounded-b-lg border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.title}
                {getCurrentImageLabel() && <span className="text-blue-400 text-lg ml-2">— {getCurrentImageLabel()}</span>}
              </h3>
                    <div className="text-slate-300">{selectedImage.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDemo;