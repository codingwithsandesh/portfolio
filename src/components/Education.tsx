import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { Education as EducationType } from '../types.ts';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Formal Education & Qualifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            Computer applications degree coursework with specialization in data science alongside secondary science foundation.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-6"
            >
              {/* Status Ribbon */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                      edu.status === 'Ongoing'
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                        : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {edu.degree}
                  </h3>
                  {edu.field_of_study && (
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.field_of_study}
                    </p>
                  )}
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.institution}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  {edu.status === 'Ongoing' ? 'Active' : 'Graduated'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
