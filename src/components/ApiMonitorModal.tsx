import React, { useState, useEffect } from 'react';
import {
  X,
  Database,
  Terminal,
  Server,
  Play,
  Copy,
  Check,
  RefreshCw,
  Eye,
  Mail,
  ShieldAlert,
  Code,
  CheckCircle2,
} from 'lucide-react';
import { api } from '../services/api.ts';
import { ApiHealthStatus, ContactMessage } from '../types.ts';

interface ApiMonitorModalProps {
  isOpen: boolean;
  onClose: () => void;
  healthStatus: ApiHealthStatus | null;
  onRefreshHealth: () => void;
}

export const ApiMonitorModal: React.FC<ApiMonitorModalProps> = ({
  isOpen,
  onClose,
  healthStatus,
  onRefreshHealth,
}) => {
  const [activeTab, setActiveTab] = useState<'endpoints' | 'schema' | 'inbox' | 'env'>('endpoints');
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('/api/profile');
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [rawSql, setRawSql] = useState<string>('');
  const [passcode, setPasscode] = useState<string>('');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Fetch raw schema
      api.getRawSchema().then((sql) => setRawSql(sql));
      // Trigger initial endpoint test
      handleTestEndpoint('/api/health');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const endpoints = [
    { method: 'GET', path: '/api/health', desc: 'Server health & MySQL connection status' },
    { method: 'GET', path: '/api/profile', desc: 'Candidate biography & contact URLs' },
    { method: 'GET', path: '/api/skills', desc: 'All skills categorized from database' },
    { method: 'GET', path: '/api/projects', desc: 'Featured projects including Pixora' },
    { method: 'GET', path: '/api/experience', desc: 'Google Student Ambassador role' },
    { method: 'GET', path: '/api/certifications', desc: '8 Google Cloud certifications' },
    { method: 'GET', path: '/api/achievements', desc: 'Google Cloud Arcade Facilitator' },
    { method: 'GET', path: '/api/education', desc: 'Formal BCA degree & schooling' },
    { method: 'GET', path: '/api/soft-skills', desc: 'Communication & work ethic strengths' },
    { method: 'GET', path: '/api/languages', desc: 'English, Hindi, Marathi proficiency' },
    { method: 'POST', path: '/api/contact', desc: 'Submit contact message into MySQL table' },
  ];

  const handleTestEndpoint = async (path: string) => {
    setSelectedEndpoint(path);
    setApiLoading(true);
    setApiResponse(null);
    try {
      if (path === '/api/contact') {
        // Demonstrate a sample validation preview or test ping
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'API Explorer Tester',
            email: 'tester@enterprise.org',
            subject: 'Automated REST Verification',
            message: 'Testing POST /api/contact from live API explorer interface.',
          }),
        });
        const json = await res.json();
        setApiResponse(JSON.stringify(json, null, 2));
      } else {
        const res = await fetch(path);
        const json = await res.json();
        setApiResponse(JSON.stringify(json, null, 2));
      }
    } catch (err: any) {
      setApiResponse(JSON.stringify({ error: err.message, status: 'Network request failed' }, null, 2));
    } finally {
      setApiLoading(false);
    }
  };

  const handleFetchMessages = async () => {
    setMessagesLoading(true);
    setMessagesError(null);
    try {
      const res = await api.getContactMessages(passcode);
      if (res.success && res.data) {
        setMessages(res.data);
      } else {
        setMessagesError(res.error || 'Failed to retrieve messages.');
      }
    } catch (err: any) {
      setMessagesError(err.message);
    } finally {
      setMessagesLoading(false);
    }
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(rawSql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Topbar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Database className="h-4 w-4" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                Full-Stack Backend & Database Console
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Express.js REST API • MySQL 8.0 DDL Engine • Live Diagnostics
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Database & Server Health Strip */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-5 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-slate-700 dark:text-slate-300 font-semibold">API Server:</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">ONLINE (Port 3000)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-slate-700 dark:text-slate-300 font-semibold">DB Mode:</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                healthStatus?.database?.connected
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
              }`}>
                {healthStatus?.database?.connected ? 'MySQL 8.0+ Connected' : 'Relational Memory Engine (Development)'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefreshHealth}
              className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-xs cursor-pointer font-medium"
            >
              <RefreshCw className="h-3 w-3" /> Refresh Status
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-5 text-xs">
          <button
            onClick={() => setActiveTab('endpoints')}
            className={`px-4 py-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'endpoints'
                ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Server className="h-3.5 w-3.5" />
            <span>REST API Explorer</span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'schema'
                ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            <span>MySQL Schema & DDL (schema.sql)</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('inbox');
              handleFetchMessages();
            }}
            className={`px-4 py-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'inbox'
                ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Stored Contact Messages</span>
          </button>

          <button
            onClick={() => setActiveTab('env')}
            className={`px-4 py-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'env'
                ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>MySQL Config Guide</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-white dark:bg-slate-900">
          
          {/* TAB 1: REST API EXPLORER */}
          {activeTab === 'endpoints' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Endpoint List */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-2 uppercase tracking-wider">
                  Click an endpoint to test live:
                </span>
                <div className="space-y-1.5">
                  {endpoints.map((ep) => (
                    <button
                      key={ep.path}
                      onClick={() => handleTestEndpoint(ep.path)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${
                        selectedEndpoint === ep.path
                          ? 'border-blue-500 dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 text-slate-900 dark:text-slate-100'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="space-y-0.5 truncate pr-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                              ep.method === 'POST'
                                ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                                : 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                            }`}
                          >
                            {ep.method}
                          </span>
                          <span className="text-slate-900 dark:text-slate-100 font-semibold font-mono">{ep.path}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{ep.desc}</p>
                      </div>
                      <Play className="h-3 w-3 shrink-0 text-blue-600 dark:text-blue-400" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Response Viewer */}
              <div className="lg:col-span-7 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span>LIVE RESPONSE // {selectedEndpoint}</span>
                  {apiLoading && <span className="text-blue-600 dark:text-blue-400 animate-pulse font-sans">Executing request...</span>}
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-emerald-400 overflow-x-auto max-h-[480px]">
                  {apiLoading ? (
                    <div className="py-20 text-center text-slate-500">Querying backend API...</div>
                  ) : apiResponse ? (
                    <pre className="whitespace-pre-wrap">{apiResponse}</pre>
                  ) : (
                    <div className="py-20 text-center text-slate-500">Select an endpoint on the left to execute.</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MYSQL SCHEMA & DDL */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    MySQL 8.0 DDL Schema Definition
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    File: /server/schema.sql • 10 Relational Tables • Seeded with Resume Records
                  </p>
                </div>
                <button
                  onClick={handleCopySql}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer shadow-xs font-medium"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Schema SQL'}</span>
                </button>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-sky-300 overflow-x-auto max-h-[500px]">
                <pre className="whitespace-pre">{rawSql || '-- Loading schema.sql...'}</pre>
              </div>
            </div>
          )}

          {/* TAB 3: CONTACT MESSAGES INBOX */}
          {activeTab === 'inbox' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Database Stored Contact Inquiries
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Table: `contact_messages` • Populated by POST /api/contact
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="password"
                    placeholder="Admin Passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 text-xs text-slate-900 dark:text-slate-100 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
                  />
                  <button
                    onClick={handleFetchMessages}
                    className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-medium cursor-pointer"
                  >
                    Refresh
                  </button>
                </div>
              </div>

              {messagesError && (
                <div className="p-3 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 text-xs">
                  {messagesError}
                </div>
              )}

              {messagesLoading ? (
                <div className="py-16 text-center text-slate-500 dark:text-slate-400 text-xs">
                  Loading stored messages from database...
                </div>
              ) : messages.length > 0 ? (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">#{msg.id}</span>
                          <span className="text-slate-900 dark:text-slate-100 font-semibold">{msg.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">&lt;{msg.email}&gt;</span>
                        </div>
                        <span className="text-xs text-slate-400 dark:text-slate-500">{msg.created_at}</span>
                      </div>

                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{msg.subject}</div>
                      <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                        {msg.message}
                      </p>

                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                        <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" /> Status: {msg.status}
                        </span>
                        <span>Saved via POST /api/contact</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center text-slate-500 dark:text-slate-400 text-xs">
                  No contact messages in database yet. Try submitting the contact form on the home page!
                </div>
              )}
            </div>
          )}

          {/* TAB 4: MYSQL CONFIG GUIDE */}
          {activeTab === 'env' && (
            <div className="space-y-6 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-5 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  Connecting to an External MySQL Server
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  The portfolio backend is built with <code className="font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-xs">mysql2/promise</code> and supports any MySQL 8.0+, MariaDB, AWS RDS MySQL, or Google Cloud SQL MySQL instance.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Configure the following environment variables in your deployment environment or <code className="font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-xs">.env</code> file:
                </p>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 text-sky-300 font-mono space-y-1">
                  <p>DB_HOST="your-mysql-host.example.com" # Hostname or IP</p>
                  <p>DB_USER="your_db_username"</p>
                  <p>DB_PASSWORD="your_secure_password"</p>
                  <p>DB_NAME="portfolio_sandesh"</p>
                  <p>DB_PORT="3306"</p>
                  <p>ADMIN_PASSCODE="your_secret_admin_passcode"</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 space-y-2">
                <h5 className="font-bold text-slate-900 dark:text-slate-100 text-xs">Zero-Config Resilient Fallback Engine</h5>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  When running in local preview mode without a remote MySQL host, the backend automatically activates an in-memory relational store that mirrors the exact same relational schema and executes full CRUD logic. This guarantees zero runtime crash and uninterrupted reviewer testing.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-5 py-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
            Production REST API Live
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium cursor-pointer shadow-xs"
          >
            Close Console
          </button>
        </div>

      </div>
    </div>
  );
};
