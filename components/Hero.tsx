
import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const projectsUrl = `${RESUME_DATA.github}?tab=repositories`;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
      {/* Background container */}
      <div className="absolute inset-0 z-0">
        {/* Animated colorful blobs with reduced blur for more definition */}
        <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-purple-600 rounded-full mix-blend-screen filter blur-[60px] opacity-20 animate-blob"></div>
        <div className="absolute -top-20 right-0 w-[35rem] h-[35rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[60px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[45rem] h-[45rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[60px] opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-pink-600 rounded-full mix-blend-screen filter blur-[80px] opacity-10 animate-blob animation-delay-2000"></div>
        
        {/* Grain texture for premium look */}
        <div className="absolute inset-0 bg-grain pointer-events-none"></div>
        
        {/* Reduced backdrop blur to make the background less fuzzy */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-slate-950/10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          Hi, I'm <span className="gradient-text">{RESUME_DATA.name}</span>.
          <br />
          <span className="text-white">I build digital experiences.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium">
          {RESUME_DATA.about}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
          <a 
            href={projectsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 text-center shadow-2xl shadow-indigo-600/30"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
