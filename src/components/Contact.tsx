import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github, Terminal, Loader2 } from 'lucide-react';
import { api } from '../services/api.ts';
import { Profile } from '../types.ts';

interface ContactProps {
  profile: Profile;
  onMessageSent?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ profile, onMessageSent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    type: 'success' | 'error';
    message: string;
    details?: any;
  } | null>(null);

  // Frontend input validation
  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address (e.g. name@company.com).';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Subject is required (minimum 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a descriptive message (minimum 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await api.sendContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (response.success) {
        setSubmitResult({
          type: 'success',
          message:
            response.message ||
            'Your message has been successfully saved to the MySQL database! I will reply shortly.',
          details: response.data,
        });
        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        if (onMessageSent) onMessageSent();
      } else {
        setSubmitResult({
          type: 'error',
          message: response.message || 'Failed to submit message. Please try again.',
        });
        if (response.errors) {
          setErrors(response.errors);
        }
      }
    } catch (err: any) {
      setSubmitResult({
        type: 'error',
        message: 'A network error occurred while connecting to the backend server.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Contact & Collaboration
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
            Interested in hiring, internship opportunities, or discussing project collaborations? Reach out directly or leave a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${profile.email}`}
              className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Email Address</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {profile.email}
                  </span>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Phone / Mobile</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {profile.phone}
                  </span>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Location</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Washim / Akola, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-xs"
              >
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-xs"
              >
                <Github className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Backend Database Notice */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div className="text-slate-900 dark:text-slate-100 flex items-center gap-1.5 font-semibold">
                <Terminal className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> Full Stack Persistence
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Contact submissions are validated by Express backend middleware and stored into the database `contact_messages` table with timestamp and IP audit log.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Send a Direct Message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in the details below. All fields are sanitized and stored securely.
                </p>
              </div>

              {/* Status Alert Banner */}
              {submitResult && (
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
                    submitResult.type === 'success'
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300'
                      : 'border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300'
                  }`}
                >
                  {submitResult.type === 'success' ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-semibold">{submitResult.message}</p>
                    {submitResult.details && (
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">
                        Record ID: #{submitResult.details.id} • Stored at {submitResult.details.created_at}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:bg-white dark:focus:bg-slate-800 focus:outline-none ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-600 dark:text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:bg-white dark:focus:bg-slate-800 focus:outline-none ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-600 dark:text-rose-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Full Stack Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={isSubmitting}
                    className={`w-full rounded-xl border bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:bg-white dark:focus:bg-slate-800 focus:outline-none ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-rose-600 dark:text-rose-400">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Hello Sandesh, we are interested in your full stack development profile and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className={`w-full rounded-xl border bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:bg-white dark:focus:bg-slate-800 focus:outline-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-rose-600 dark:text-rose-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white font-medium px-6 py-3 text-xs transition-all shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Saving to Database...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message (POST /api/contact)</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
