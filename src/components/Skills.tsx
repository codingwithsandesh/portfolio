import React, { useState } from 'react';
import { Code, Globe, Database, Cpu, Wrench, Layers, CheckCircle2 } from 'lucide-react';
import { Skill } from '../types.ts';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Skills', icon: Layers },
    { id: 'Programming Languages', label: 'Programming Languages', icon: Code },
    { id: 'Web Technologies', label: 'Web Technologies', icon: Globe },
    { id: 'Database', label: 'Database & SQL', icon: Database },
    { id: 'Concepts', label: 'Core Concepts', icon: Cpu },
    { id: 'Tools & Platforms', label: 'Tools & Platforms', icon: Wrench },
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Skill Stack & Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            Structured foundational and applied technical proficiencies across programming languages, web architecture, databases, and algorithms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
                    : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  isActive
                    ? 'bg-slate-800 dark:bg-slate-200 text-slate-200 dark:text-slate-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {cat.id === 'All' ? skills.length : skills.filter((s) => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid or Filtered View */}
        {activeCategory === 'All' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat.id);
              const Icon = cat.icon;

              return (
                <div
                  key={cat.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{cat.label}</h3>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{catSkills.length} items</span>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2">
                      {catSkills.map((skill) => (
                        <span
                          key={skill.id}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Verified from Academic & Project Experience
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-semibold text-xs">
                      #
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{skill.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{skill.category}</p>
                    </div>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
