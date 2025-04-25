import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

type FilterCategory = 'all' | 'frontend' | 'backend' | 'mobile' | 'fullstack';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    
    const technologies = project.technologies.map(tech => tech.toLowerCase());
    
    switch (filter) {
      case 'frontend':
        return technologies.some(tech => 
          ['react', 'vue', 'angular', 'javascript', 'typescript', 'html', 'css', 'sass', 'tailwind'].includes(tech)
        );
      case 'backend':
        return technologies.some(tech => 
          ['node.js', 'express', 'mongodb', 'postgresql', 'django', 'flask', 'ruby on rails'].includes(tech)
        );
      case 'mobile':
        return technologies.some(tech => 
          ['react native', 'flutter', 'swift', 'kotlin'].includes(tech)
        );
      case 'fullstack':
        const hasFrontend = technologies.some(tech => 
          ['react', 'vue', 'angular', 'javascript', 'typescript', 'html', 'css'].includes(tech)
        );
        const hasBackend = technologies.some(tech => 
          ['node.js', 'express', 'mongodb', 'postgresql'].includes(tech)
        );
        return hasFrontend && hasBackend;
      default:
        return true;
    }
  });

  const filterOptions: { label: string; value: FilterCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Full Stack', value: 'fullstack' },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Projects"
          subtitle="Explore a selection of my recent work and side projects"
          align="center"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map(option => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === option.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No projects found matching the selected filter.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;