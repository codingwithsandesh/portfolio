import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Database, Code2, Server, CheckCircle2, FileText, Phone, Award, Sparkles, BookOpen } from 'lucide-react';
import { Profile } from '../types.ts';

interface HeroProps {
  profile: Profile;
  onOpenApiMonitor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenApiMonitor }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Developer Roles & Internships</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                Hi, I'm {profile.full_name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {profile.title}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {profile.career_profile}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold transition-all shadow-xs cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 px-5 py-2.5 text-sm font-medium transition-all shadow-xs cursor-pointer"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenApiMonitor}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 px-3.5 py-2.5 text-xs font-medium transition-all cursor-pointer"
                title="View Database Schema & Backend REST APIs"
              >
                <Database className="h-3.5 w-3.5 text-slate-400" />
                <span>Backend & DB</span>
              </button>
            </div>

            {/* Quick Contact & Social Verification Strip */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 dark:text-slate-400">
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-3.5 w-3.5 text-slate-700 dark:text-slate-300" />
                <span>github.com/codingwithsandesh</span>
              </a>

              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>linkedin.com/in/sandesh-heda</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Clean Profile Summary Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Developer Profile</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Summary & Key Competencies</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Full Stack
                </span>
              </div>

              {/* Data Items */}
              <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start justify-between py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Candidate:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Sandesh J. Heda</span>
                </div>
                <div className="flex items-start justify-between py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Education:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 text-right">BCA – Data Science (3rd Year)</span>
                </div>
                <div className="flex items-start justify-between py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Core Focus:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 text-right">Full Stack, Frontend, Data Analysis</span>
                </div>
                <div className="flex items-start justify-between py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Database:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">MySQL 8.0 / REST API</span>
                </div>
                <div className="flex items-start justify-between py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Key Project:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">PIXORA Image Discovery</span>
                </div>
                <div className="flex items-start justify-between py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Leadership:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Google Student Ambassador</span>
                </div>
                <div className="flex items-start justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Certifications:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">8x Google Cloud Certified</span>
                </div>
              </div>

              {/* System Diagnostics Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Backend Server</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Express REST API
                  </span>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Database Layer</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold flex items-center gap-1.5 mt-1">
                    <Database className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> MySQL Compatible
                  </span>
                </div>
              </div>

              {/* Ready status */}
              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Ready for internship & developer placement opportunities</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
