import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Globe, Building } from 'lucide-react';
import { Experience as ExperienceType } from '../types.ts';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Professional Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Work Experience & Ambassadorship
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            Verified internship and organizational leadership roles representing industry tools and peer engagement.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experience.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[32px] sm:-left-[40px] top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 shadow-sm"></div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-6">
                
                {/* Header: Role & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        {exp.employment_type}
                      </span>
                      {exp.is_current && (
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          Active Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                        <Building className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.start_date} – {exp.end_date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities list strictly from resume */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Responsibilities & Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verification Notice */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>* Factual resume record (August 2025 – June 2026)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Google Campus Ambassador</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
