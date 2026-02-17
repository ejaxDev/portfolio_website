import { ProjectDemoData } from "../types/projectDemo"

export const portfolioWebsite: ProjectDemoData = {
  id: '4',
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
