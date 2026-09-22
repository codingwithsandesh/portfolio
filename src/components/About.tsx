import React from 'react';
import { User, BookOpen, Award, Sparkles, Terminal, Code, Database, Globe } from 'lucide-react';
import { Profile } from '../types.ts';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Career Profile & Core Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            A developer mindset focused on modern web engineering, clean database models, and practical data-driven problem solving.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              <p>
                {profile.career_profile}
              </p>
              <p>
                Currently in my 3rd year pursuing a <strong className="text-slate-900 dark:text-slate-100 font-semibold">Bachelor of Computer Application – Data Science</strong> at Rajasthan Aryan Arts College, Washim. My academic journey combines computer science fundamentals, algorithm design, and data structures with practical, full-stack application development.
              </p>
              <p>
                Whether designing responsive web interfaces with modern frontend tooling, structuring relational schemas in MySQL, or deploying cloud-grounded workflows on Google Cloud, I aim to create fast, reliable, and accessible software.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <div className="text-blue-700 dark:text-blue-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Code className="h-4 w-4" /> Full Stack
                </div>
                <div className="text-slate-600 dark:text-slate-400">Responsive UI/UX, Express APIs, REST endpoints</div>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <div className="text-emerald-700 dark:text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Database className="h-4 w-4" /> Databases
                </div>
                <div className="text-slate-600 dark:text-slate-400">DBMS, Relational SQL, MySQL schema design</div>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <div className="text-indigo-700 dark:text-indigo-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Globe className="h-4 w-4" /> Cloud & AI
                </div>
                <div className="text-slate-600 dark:text-slate-400">Google Cloud Labs, Kubernetes, Gemini & BigQuery</div>
              </div>
            </div>
          </div>

          {/* Key Highlights Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Highlight 1: Education */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">BCA – Data Science (3rd Year)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Rajasthan Aryan Arts College, Washim. Focus on Database Systems, Data Science, and Computer Applications.
                  </p>
                  <span className="inline-block mt-2.5 text-xs text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 font-medium">
                    Status: Ongoing (3rd Year)
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight 2: Google Student Ambassador */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Google Student Ambassador (Intern)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Selected to represent Google products and initiatives on campus, conducting workshops and creating technical learning content.
                  </p>
                  <span className="inline-block mt-2.5 text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 font-medium">
                    August 2025 – June 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight 3: Certifications & Hands-on Labs */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Google Cloud Certified & Facilitator</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Completed 8 Google Cloud credentials, 30+ hands-on cloud labs, and served as Google Cloud Arcade Facilitator.
                  </p>
                  <div className="flex gap-2 mt-2.5">
                    <span className="text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 font-medium">
                      8 Certifications
                    </span>
                    <span className="text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 font-medium">
                      30+ Cloud Labs
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
