
import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.email}`;
  const projectsUrl = `${RESUME_DATA.github}?tab=repositories`;

  const navLinks = [
    { name: 'Projects', href: projectsUrl, external: true },
    { name: 'LinkedIn', href: RESUME_DATA.linkedin, external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 dark-glass">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between md:justify-end">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-indigo-400 transition-colors text-slate-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex w-full justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden dark-glass border-t border-slate-800 absolute top-16 left-0 right-0 py-4 flex flex-col items-center space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold shadow-lg"
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
