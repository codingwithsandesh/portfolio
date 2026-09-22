import React from 'react';
import { Award, CheckCircle2, Calendar, Sparkles, Cloud, Terminal, ShieldCheck } from 'lucide-react';
import { Certification } from '../types.ts';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Credentials & Accreditations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Google Cloud Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            Verified completions across generative AI, infrastructure automation, Kubernetes orchestration, and BigQuery predictive analytics.
          </p>
        </div>

        {/* 30+ Labs Banner */}
        <div className="mb-10 rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/70 dark:bg-blue-950/30 p-6 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 shadow-xs">
                <Cloud className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase">
                    Practical Cloud Capability
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                    Verified
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  30+ Google Cloud Hands-on Labs Completed
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Intensive practical labs covering AI, Cloud Infrastructure, Terraform, and Application Deployment.
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="inline-block text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg shadow-xs">
                Google Cloud Platform
              </span>
            </div>
          </div>
        </div>

        {/* Certifications Grid (All 8 exact certifications) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {cert.issue_date}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                  {cert.title}
                </h4>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">{cert.issuer}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Certified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
