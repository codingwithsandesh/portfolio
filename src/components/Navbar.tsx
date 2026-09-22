import React, { useState } from 'react';
import { Terminal, Menu, X, Database, Github, Linkedin, Mail, ExternalLink, ShieldCheck, Code2, Sun, Moon } from 'lucide-react';
import { ApiHealthStatus } from '../types.ts';
import { useTheme } from '../context/ThemeContext.tsx';

interface NavbarProps {
  healthStatus: ApiHealthStatus | null;
  onOpenApiMonitor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ healthStatus, onOpenApiMonitor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-sm transition-transform group-hover:scale-105 shadow-xs">
            <Code2 className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Sandesh J. Heda
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-none">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          {/* Subtle Live Status Pill */}
          <button
            onClick={onOpenApiMonitor}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Inspect REST API & MySQL Status"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span className="hidden xl:inline">API</span>
            <span>Live</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>

          {/* Social Links */}
          <a
            href="https://github.com/codingwithsandesh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-heda/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* Clean Contact CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium px-3.5 py-1.5 text-xs transition-colors shadow-xs"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={onOpenApiMonitor}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block"></span>
            API
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-5 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <div className="flex items-center justify-between px-3 py-1">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-3.5 w-3.5 text-amber-400" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-3.5 w-3.5 text-slate-700" /> Dark Mode
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenApiMonitor();
                }}
                className="w-full text-left flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 px-3 py-2 text-xs text-slate-700 dark:text-slate-300 font-medium"
              >
                <span>REST API & MySQL Monitor</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● Online</span>
              </button>
              <div className="flex items-center justify-around py-2 text-slate-600 dark:text-slate-400">
                <a
                  href="https://github.com/codingwithsandesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs hover:text-slate-900 dark:hover:text-white"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sandesh-heda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="mailto:hedasandesh92@gmail.com"
                  className="flex items-center gap-1.5 text-xs hover:text-slate-900 dark:hover:text-white"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
