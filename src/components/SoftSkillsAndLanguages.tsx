import React from 'react';
import { HeartHandshake, Languages, CheckCircle2, MessageSquare, Clock, Zap, Smile } from 'lucide-react';
import { SoftSkill, Language } from '../types.ts';

interface SoftSkillsAndLanguagesProps {
  softSkills: SoftSkill[];
  languages: Language[];
}

export const SoftSkillsAndLanguages: React.FC<SoftSkillsAndLanguagesProps> = ({
  softSkills,
  languages,
}) => {
  const getSoftSkillIcon = (name: string) => {
    if (name.includes('Communication')) return MessageSquare;
    if (name.includes('Time Management')) return Clock;
    if (name.includes('Learner')) return Zap;
    return Smile;
  };

  return (
    <section className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Section 10: Soft Skills */}
          <div id="soft-skills" className="lg:col-span-7 space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Professional Soft Skills
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Interpersonal & Work Ethic Strengths
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Key professional attributes that support collaborative engineering, active listening, and continuous technical growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => {
                const Icon = getSoftSkillIcon(skill.name);
                return (
                  <div
                    key={skill.id}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-start gap-4"
                  >
                    <div className="h-9 w-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                        {skill.name}
                      </h4>
                      <span className="inline-block text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Applied in Team & Campus Workshops
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 11: Languages */}
          <div id="languages" className="lg:col-span-5 space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Language Proficiency
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Spoken Languages
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Multilingual communication readiness for global and regional collaboration.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.id}
                  className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Languages className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{lang.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{lang.proficiency}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    Fluent
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-xs text-slate-600 dark:text-slate-400 shadow-sm">
              * Ready to converse, present technical demos, and collaborate with diverse engineering teams.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
