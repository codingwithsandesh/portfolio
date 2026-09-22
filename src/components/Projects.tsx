import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle2, Play, Layout, Eye, Sparkles, Database, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '../types.ts';
import { PixoraSandboxModal } from './PixoraSandboxModal.tsx';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [isSandboxOpen, setIsSandboxOpen] = useState(false);

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-2">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Project Showcase
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mt-1">
              Production-oriented front-end and web engineering implementations with real architectural specifications.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl shadow-sm">
            <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Extensible via MySQL / REST API</span>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Project Narrative & Features */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header & Badges */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          Featured Project
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          Client-Side Web App
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem Statement */}
                    <div className="rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/60 dark:bg-rose-950/30 p-4 space-y-1">
                      <div className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-600 dark:bg-rose-500"></span>
                        Problem Statement
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution Statement */}
                    <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/60 dark:bg-emerald-950/30 p-4 space-y-1">
                      <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
                        Architected Solution
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Implementation Highlights Checklist */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Key Implemented Details & Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                        {project.implemented_features.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-slate-800 dark:text-slate-200 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setIsSandboxOpen(true)}
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 text-xs transition-all shadow-sm cursor-pointer"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Launch Pixora Interactive Sandbox</span>
                      </button>

                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-5 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition-all shadow-sm"
                      >
                        <Github className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />
                        <span>Source on GitHub</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Technical Specifications Panel */}
                  <div className="lg:col-span-5 space-y-4">
                    
                    {/* Technologies Box */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Core Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Layout Architecture Box */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Layout className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Layout Engine
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.layout_details.map((layout) => (
                          <span
                            key={layout}
                            className="px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs"
                          >
                            {layout}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* UI/UX Features Box */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Eye className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> UI / UX Components
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.ui_ux_features.map((ui) => (
                          <span
                            key={ui}
                            className="px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs"
                          >
                            {ui}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Responsiveness Specification */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-5 space-y-2">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" /> Responsiveness Architecture
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.responsiveness}
                      </p>
                    </div>

                    {/* Factual Notice */}
                    <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400">
                      * Factual representation: Client-side HTML5/CSS3/JavaScript responsive implementation without unverified backend claims.
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Pixora Sandbox Modal */}
      <PixoraSandboxModal
        isOpen={isSandboxOpen}
        onClose={() => setIsSandboxOpen(false)}
      />
    </section>
  );
};
