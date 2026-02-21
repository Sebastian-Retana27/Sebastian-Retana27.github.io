
import React from 'react';
import { Experience } from '../types';

interface Props {
  experience: Experience[];
}

const ExperienceTimeline: React.FC<Props> = ({ experience }) => {
  return (
    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
      {experience.map((item, index) => (
        <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 group-[.is-active]:bg-indigo-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
            </svg>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-slate-800 bg-slate-900 shadow-sm hover:border-slate-600 transition-all">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white">{item.role}</div>
              <time className="font-mono text-xs text-indigo-400 bg-indigo-900/30 px-2 py-1 rounded-full border border-indigo-500/20">{item.period}</time>
            </div>
            <div className="text-sm font-medium text-slate-400 mb-3">{item.company}</div>
            <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
