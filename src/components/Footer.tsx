import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Database, Code } from 'lucide-react';
import { Profile } from '../types.ts';

interface FooterProps {
  profile: Profile;
  onOpenApiMonitor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenApiMonitor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs py-12 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Credentials */}
          <div className="md:col-span-6 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-base">
              <span>{profile.full_name}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">• {profile.title}</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs max-w-md">
              Personal portfolio built with React, Express.js REST API, and MySQL relational database architecture.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-x-6 gap-y-2 font-medium">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Certifications</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

        </div>

        {/* Bottom Strip: System Status & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
              API & DB: Operational
            </span>
            <span>•</span>
            <button
              onClick={onOpenApiMonitor}
              className="hover:text-blue-600 dark:hover:text-blue-400 underline font-medium cursor-pointer"
            >
              Open API Diagnostics
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 transition-colors cursor-pointer shadow-xs font-medium"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Sandesh J. Heda. All portfolio, project, and certification records strictly factual.
        </div>

      </div>
    </footer>
  );
};
