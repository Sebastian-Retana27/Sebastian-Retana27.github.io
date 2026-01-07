import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectCard from './components/ProjectCard';
import ScrollToTop from './components/ScrollToTop';
import { RESUME_DATA, EDUCATION, HIGHLIGHTS, LANGUAGES } from './constants';

const App: React.FC = () => {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.email}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />
      
      <main>
        {/* Hero section */}
        <Hero />

        {/* About & Highlights Section */}
        <section id="about" className="py-20 bg-slate-900/50 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group order-2 md:order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                  <h4 className="text-xl font-bold text-white mb-6">Professional Highlights</h4>
                  <ul className="space-y-4">
                    {HIGHLIGHTS.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400">
                        <svg className="w-5 h-5 text-indigo-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-8 border-t border-slate-800">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Languages</h4>
                    <div className="flex flex-wrap gap-4">
                      {LANGUAGES.map(lang => (
                        <div key={lang.name} className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-xs font-medium">
                          <span className="text-indigo-400 font-bold">{lang.name}:</span> <span className="text-slate-300">{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>{RESUME_DATA.about}</p>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Education</h4>
                  <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl">
                    <div className="font-bold text-white">{EDUCATION.degree}</div>
                    <div className="text-indigo-400 text-sm mt-1">{EDUCATION.institution}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-slate-950 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h3>
            <ExperienceTimeline experience={RESUME_DATA.experience} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-900/30 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Selected Projects</h3>
                <p className="text-slate-400 max-w-lg">Core software development initiatives demonstrating full-stack proficiency.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {RESUME_DATA.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900/50 scroll-mt-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold text-white mb-6">Let's connect.</h3>
            <p className="text-lg text-slate-400 mb-10">
              I am based in San Rafael, Heredia, Costa Rica and available for new software development opportunities.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                {RESUME_DATA.email}
              </a>
              <div className="text-slate-400 font-medium px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl">
                San Rafael, Heredia, Costa Rica
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>(c) {new Date().getFullYear()} {RESUME_DATA.name}. Built with React.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={RESUME_DATA.github} target="_blank" className="hover:text-indigo-400 transition-colors">GitHub</a>
            <a
              href="/resume/Sebastian_Retana_Full-Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Floating Elements */}
      <ScrollToTop />
    </div>
  );
};

export default App;
