
import React from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-indigo-500/5">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/50 border border-indigo-500/20 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:translate-x-1 transition-transform"
        >
          View Repository
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
