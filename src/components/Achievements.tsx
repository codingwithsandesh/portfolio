import React from 'react';
import { Trophy, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { Achievement } from '../types.ts';

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Key Achievement
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Honors & Program Recognition
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            Community cloud enablement leadership and peer facilitation program recognition.
          </p>
        </div>

        {/* Achievements Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="lg:col-span-8 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20 p-6 sm:p-8 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Trophy className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                      Recognition by {item.organization.toUpperCase()}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      Facilitator
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200/80 dark:border-amber-900/50 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Successfully Facilitated & Completed
                </span>
                <span className="text-slate-500 dark:text-slate-400">Peer Cloud Education & Mentorship</span>
              </div>
            </div>
          ))}

          <div className="lg:col-span-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Leadership & Outreach Impact
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Serving as a Google Cloud Arcade Facilitator involved encouraging student participation, coordinating hands-on lab sprints, and answering technical questions on cloud architecture and deployments.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                Peer Community Empowerment
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
