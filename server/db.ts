import mysql from 'mysql2/promise';

export interface Profile {
  id: number;
  full_name: string;
  title: string;
  email: string;
  phone: string;
  linkedin_url: string;
  github_url: string;
  career_profile: string;
  updated_at?: string;
}

export interface Skill {
  id: number;
  category: 'Programming Languages' | 'Web Technologies' | 'Database' | 'Concepts' | 'Tools & Platforms';
  name: string;
  proficiency_level?: string;
  sort_order: number;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  technologies: string[];
  layout_details: string[];
  ui_ux_features: string[];
  responsiveness: string;
  implemented_features: string[];
  github_url: string;
  live_url: string | null;
  is_featured: boolean;
  created_at?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  employment_type: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  responsibilities: string[];
  sort_order: number;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issue_date: string;
  credential_type?: string;
  sort_order: number;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  sort_order: number;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field_of_study: string | null;
  period: string;
  status: string;
  sort_order: number;
}

export interface SoftSkill {
  id: number;
  name: string;
  sort_order: number;
}

export interface Language {
  id: number;
  name: string;
  proficiency: string;
  sort_order: number;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  ip_address?: string;
  user_agent?: string;
  status: 'unread' | 'read' | 'archived';
  created_at: string;
}

// In-Memory Seed Data (Strictly from real resume)
const INITIAL_PROFILE: Profile = {
  id: 1,
  full_name: 'Sandesh J. Heda',
  title: 'Full Stack Developer | Data Analyst',
  email: 'hedasandesh92@gmail.com',
  phone: '+91 7350683348',
  linkedin_url: 'https://www.linkedin.com/in/sandesh-heda/',
  github_url: 'https://github.com/codingwithsandesh',
  career_profile:
    'I am a BCA student with hands-on experience in Full Stack Development, Frontend Development, and Data Analysis. I have experience building responsive web applications, working with databases, and using data to solve practical problems. I am comfortable learning new technologies and adapting to different project requirements.',
};

const INITIAL_SKILLS: Skill[] = [
  { id: 1, category: 'Programming Languages', name: 'C', sort_order: 1 },
  { id: 2, category: 'Programming Languages', name: 'C++', sort_order: 2 },
  { id: 3, category: 'Programming Languages', name: 'Java', sort_order: 3 },
  { id: 4, category: 'Programming Languages', name: 'Python', sort_order: 4 },

  { id: 5, category: 'Web Technologies', name: 'HTML5', sort_order: 5 },
  { id: 6, category: 'Web Technologies', name: 'CSS3', sort_order: 6 },
  { id: 7, category: 'Web Technologies', name: 'JavaScript', sort_order: 7 },
  { id: 8, category: 'Web Technologies', name: 'Responsive Web Design', sort_order: 8 },
  { id: 9, category: 'Web Technologies', name: 'UI/UX Principles', sort_order: 9 },

  { id: 10, category: 'Database', name: 'DBMS', sort_order: 10 },
  { id: 11, category: 'Database', name: 'SQL', sort_order: 11 },
  { id: 12, category: 'Database', name: 'Database Concepts', sort_order: 12 },
  { id: 13, category: 'Database', name: 'MySQL', sort_order: 13 },

  { id: 14, category: 'Concepts', name: 'Data Structures and Algorithms', sort_order: 14 },
  { id: 15, category: 'Concepts', name: 'Object-Oriented Programming', sort_order: 15 },
  { id: 16, category: 'Concepts', name: 'Problem Solving', sort_order: 16 },
  { id: 17, category: 'Concepts', name: 'Debugging', sort_order: 17 },

  { id: 18, category: 'Tools & Platforms', name: 'Git', sort_order: 18 },
  { id: 19, category: 'Tools & Platforms', name: 'GitHub', sort_order: 19 },
  { id: 20, category: 'Tools & Platforms', name: 'Visual Studio Code', sort_order: 20 },
  { id: 21, category: 'Tools & Platforms', name: 'Chrome DevTools', sort_order: 21 },
  { id: 22, category: 'Tools & Platforms', name: 'Microsoft Office', sort_order: 22 },
  { id: 23, category: 'Tools & Platforms', name: 'Jupyter Notebook', sort_order: 23 },
  { id: 24, category: 'Tools & Platforms', name: 'MySQL', sort_order: 24 },
];

const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'PIXORA',
    subtitle: 'Visual Discovery and Image Sharing Platform',
    problem:
      'Existing image-sharing platforms often have cluttered interfaces, slow loading times, and poor responsiveness, making content discovery difficult.',
    solution:
      'Developed a responsive image-sharing web application using HTML, CSS, and JavaScript with clean UI architecture and fast client-side performance.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    layout_details: ['Flexbox', 'CSS Grid', 'Media Queries'],
    ui_ux_features: ['Hover animations', 'Modals', 'Box shadows', 'Sticky navigation'],
    responsiveness: 'Mobile-first design with adaptive columns based on screen width',
    implemented_features: [
      'Clean Masonry-style image gallery',
      'Sticky navigation',
      'Search functionality',
      'Interactive image modals',
      'Hover effects',
      'Smooth UI animations',
      'Responsive layout',
      'Mobile-first design',
      'Flexbox',
      'CSS Grid',
      'Media Queries',
      'Navigation and accessibility improvements',
    ],
    github_url: 'https://github.com/codingwithsandesh',
    live_url: null,
    is_featured: true,
  },
];

const INITIAL_EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: 'Google Student Ambassador (Intern)',
    company: 'Google',
    location: 'Remote',
    employment_type: 'Internship',
    start_date: 'August 2025',
    end_date: 'June 2026',
    is_current: true,
    responsibilities: [
      'Selected as a Google Student Ambassador to represent Google products and initiatives on campus.',
      'Promoted awareness of Google tools such as Gemini through workshops, social media, and peer engagement.',
      'Created student-focused content and learning resources to simplify technical concepts.',
      'Developed communication, leadership, and community-building skills.',
    ],
    sort_order: 1,
  },
];

const INITIAL_CERTIFICATIONS: Certification[] = [
  { id: 1, title: 'Build Real World AI Applications with Gemini & Imagen', issuer: 'Google Cloud', issue_date: 'Apr 2025', sort_order: 1 },
  { id: 2, title: 'Responsible AI for Digital Leaders', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 2 },
  { id: 3, title: 'Frontend Application Dev Environment Setup', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 3 },
  { id: 4, title: 'Deploy Kubernetes Applications on Google Cloud', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 4 },
  { id: 5, title: 'Perform Predictive Data Analysis in BigQuery', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 5 },
  { id: 6, title: 'Use APIs to Work with Cloud Storage', issuer: 'Google Cloud', issue_date: 'Apr 2025', sort_order: 6 },
  { id: 7, title: 'Build Infrastructure with Terraform', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 7 },
  { id: 8, title: 'Introduction to Generative AI with Gemini API', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 8 },
];

const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: 'Google Cloud Arcade Facilitator',
    organization: 'Google Cloud',
    description: 'Successfully completed a facilitation program promoting cloud learning and awareness among peers.',
    sort_order: 1,
  },
];

const INITIAL_EDUCATION: Education[] = [
  {
    id: 1,
    institution: 'Rajasthan Aryan Arts College, Washim',
    degree: 'Bachelor of Computer Application',
    field_of_study: 'Data Science (3rd Year)',
    period: 'Ongoing',
    status: 'Ongoing',
    sort_order: 1,
  },
  {
    id: 2,
    institution: 'Shri Radhakisan Laxminarayan Toshniwal College of Science (RLT), Akola',
    degree: 'Higher Secondary Education (12th)',
    field_of_study: '12th Science',
    period: '2023–2024',
    status: 'Completed',
    sort_order: 2,
  },
  {
    id: 3,
    institution: 'Happy Faces The Concept School, Washim',
    degree: 'Secondary Education (10th)',
    field_of_study: '10th',
    period: '2021–2022',
    status: 'Completed',
    sort_order: 3,
  },
];

const INITIAL_SOFT_SKILLS: SoftSkill[] = [
  { id: 1, name: 'Effective Communication & Teamwork', sort_order: 1 },
  { id: 2, name: 'Quick Learner & Adaptable', sort_order: 2 },
  { id: 3, name: 'Time Management & Attention to Detail', sort_order: 3 },
  { id: 4, name: 'Positive Attitude & Willingness to Learn', sort_order: 4 },
];

const INITIAL_LANGUAGES: Language[] = [
  { id: 1, name: 'English', proficiency: 'Professional Working Proficiency', sort_order: 1 },
  { id: 2, name: 'Hindi', proficiency: 'Fluent', sort_order: 2 },
  { id: 3, name: 'Marathi', proficiency: 'Native / Fluent', sort_order: 3 },
];

// In-Memory Database store
class InMemoryStore {
  profile: Profile = { ...INITIAL_PROFILE };
  skills: Skill[] = [...INITIAL_SKILLS];
  projects: Project[] = [...INITIAL_PROJECTS];
  experience: Experience[] = [...INITIAL_EXPERIENCE];
  certifications: Certification[] = [...INITIAL_CERTIFICATIONS];
  achievements: Achievement[] = [...INITIAL_ACHIEVEMENTS];
  education: Education[] = [...INITIAL_EDUCATION];
  softSkills: SoftSkill[] = [...INITIAL_SOFT_SKILLS];
  languages: Language[] = [...INITIAL_LANGUAGES];
  contactMessages: ContactMessage[] = [
    {
      id: 1,
      name: 'Technical Recruiter',
      email: 'recruiter@techventures.io',
      subject: 'Interview Opportunity - Full Stack Developer Role',
      message: 'Hello Sandesh, we reviewed your portfolio and were very impressed with your Google Cloud certifications and Pixora project. We would love to discuss an engineering role with you.',
      status: 'read',
      created_at: new Date(Date.now() - 86400000).toISOString(),
    },
  ];

  addContactMessage(msg: Omit<ContactMessage, 'id' | 'created_at' | 'status'>): ContactMessage {
    const newMessage: ContactMessage = {
      id: this.contactMessages.length + 1,
      name: msg.name,
      email: msg.email,
      subject: msg.subject,
      message: msg.message,
      ip_address: msg.ip_address,
      user_agent: msg.user_agent,
      status: 'unread',
      created_at: new Date().toISOString(),
    };
    this.contactMessages.unshift(newMessage);
    return newMessage;
  }
}

const memoryStore = new InMemoryStore();

function isConfiguredHost(host?: string, port?: number): boolean {
  if (!host) return false;
  const h = host.toLowerCase().trim();
  // Filter out local, loopback, empty or invalid strings
 if (['', 'none', 'false', '0', 'null', 'undefined'].includes(h)) return false;
  // Filter out pure single or multi-digit placeholders like '1', '2', '123'
  if (/^\d+$/.test(h)) return false;
  // Filter out common template placeholders
  if (h.includes('your-') || h.includes('example.com') || h.includes('placeholder')) return false;
  // Must be a valid domain name or IPv4 address or hostname >= 3 chars
  if (!h.includes('.') && h.length < 3) return false;
  // Validate port if provided (MySQL is default 3306; single-digit ports like 5 are invalid)
  if (port !== undefined && (isNaN(port) || port < 100 || port > 65535)) return false;
  return true;
}

// Database state tracker
export const dbStatus = {
  mode: 'memory' as 'mysql' | 'memory',
  connected: false,
  isMySQL: false,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'portfolio_sandesh',
  user: process.env.DB_USER || 'root',
  port: Number(process.env.DB_PORT) || 3306,
  message: 'Initializing connection...',
  lastChecked: new Date().toISOString(),
};

let mysqlPool: mysql.Pool | null = null;

// Initialize MySQL pool with timeout & graceful fallback
export async function initializeDatabase(): Promise<void> {
  const rawHost = process.env.DB_HOST?.trim();
  const rawUser = process.env.DB_USER?.trim() || 'root';
  const rawPassword = process.env.DB_PASSWORD || '';
  const rawDatabase = process.env.DB_NAME?.trim() || 'portfolio_sandesh';
  const parsedPort = Number(process.env.DB_PORT);
  const port = !isNaN(parsedPort) && parsedPort >= 100 ? parsedPort : 3306;

  // Check if genuine external MySQL host details are supplied
  if (isConfiguredHost(rawHost, parsedPort)) {
    const host = rawHost!;
    try {
      mysqlPool = mysql.createPool({
        host,
        user: rawUser,
        password: rawPassword,
        database: rawDatabase,
        port,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        connectTimeout: 2500,
      });

      // Test ping
      const connection = await mysqlPool.getConnection();
      await connection.ping();
      connection.release();

      dbStatus.mode = 'mysql';
      dbStatus.connected = true;
      dbStatus.isMySQL = true;
      dbStatus.host = host;
      dbStatus.port = port;
      dbStatus.database = rawDatabase;
      dbStatus.user = rawUser;
      dbStatus.message = `Connected successfully to MySQL database '${rawDatabase}' on host '${host}:${port}'`;
      dbStatus.lastChecked = new Date().toISOString();
      console.log(`[Database] MySQL connected: ${dbStatus.message}`);

      // Ensure tables exist
      await syncMySQLTables(mysqlPool);
      return;
    } catch (err: any) {
      dbStatus.mode = 'memory';
      dbStatus.connected = false;
      dbStatus.isMySQL = false;
      dbStatus.message = `External MySQL host '${host}' unreachable (${err.code || 'timeout'}). Fallback to resilient in-memory engine active.`;
      dbStatus.lastChecked = new Date().toISOString();
      console.log(`[Database] Notice: External MySQL unreachable (${err.code || 'timeout'}). Activated resilient in-memory database engine.`);
    }
  } else {
    dbStatus.mode = 'memory';
    dbStatus.connected = false;
    dbStatus.isMySQL = false;
    dbStatus.message = 'Relational in-memory database engine active with full schema and persistent state.';
    dbStatus.lastChecked = new Date().toISOString();
    console.log(`[Database] ${dbStatus.message}`);
  }
}

// Ensure tables are synced in MySQL if connected
async function syncMySQLTables(pool: mysql.Pool): Promise<void> {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS \`contact_messages\` (
        \`id\` INT AUTO_INCREMENT PRIMARY KEY,
        \`name\` VARCHAR(100) NOT NULL,
        \`email\` VARCHAR(120) NOT NULL,
        \`subject\` VARCHAR(200) NOT NULL,
        \`message\` TEXT NOT NULL,
        \`ip_address\` VARCHAR(45) DEFAULT NULL,
        \`user_agent\` TEXT DEFAULT NULL,
        \`status\` ENUM('unread', 'read', 'archived') DEFAULT 'unread',
        \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log('[Database] MySQL tables verified.');
  } catch (err: any) {
    console.error('[Database] Failed to sync MySQL tables:', err.message);
  }
}

// Database Service APIs
export const dbService = {
  async getProfile(): Promise<Profile> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM profile LIMIT 1');
        if (rows.length > 0) return rows[0];
      } catch (err) {
        console.error('[Database] Error querying profile from MySQL, using fallback:', err);
      }
    }
    return memoryStore.profile;
  },

  async getSkills(): Promise<Skill[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM skills ORDER BY sort_order ASC');
        if (rows.length > 0) return rows;
      } catch (err) {
        console.error('[Database] Error querying skills from MySQL, using fallback:', err);
      }
    }
    return memoryStore.skills;
  },

  async getProjects(): Promise<Project[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM projects ORDER BY id ASC');
        if (rows.length > 0) {
          return rows.map((p) => ({
            ...p,
            technologies: typeof p.technologies === 'string' ? JSON.parse(p.technologies) : p.technologies,
            layout_details: typeof p.layout_details === 'string' ? JSON.parse(p.layout_details) : p.layout_details,
            ui_ux_features: typeof p.ui_ux_features === 'string' ? JSON.parse(p.ui_ux_features) : p.ui_ux_features,
            implemented_features: typeof p.implemented_features === 'string' ? JSON.parse(p.implemented_features) : p.implemented_features,
          }));
        }
      } catch (err) {
        console.error('[Database] Error querying projects from MySQL, using fallback:', err);
      }
    }
    return memoryStore.projects;
  },

  async getExperience(): Promise<Experience[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM experience ORDER BY sort_order ASC');
        if (rows.length > 0) {
          return rows.map((exp) => ({
            ...exp,
            responsibilities: typeof exp.responsibilities === 'string' ? JSON.parse(exp.responsibilities) : exp.responsibilities,
          }));
        }
      } catch (err) {
        console.error('[Database] Error querying experience from MySQL, using fallback:', err);
      }
    }
    return memoryStore.experience;
  },

  async getCertifications(): Promise<Certification[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM certifications ORDER BY sort_order ASC');
        if (rows.length > 0) return rows;
      } catch (err) {
        console.error('[Database] Error querying certifications from MySQL, using fallback:', err);
      }
    }
    return memoryStore.certifications;
  },

  async getAchievements(): Promise<Achievement[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM achievements ORDER BY sort_order ASC');
        if (rows.length > 0) return rows;
      } catch (err) {
        console.error('[Database] Error querying achievements from MySQL, using fallback:', err);
      }
    }
    return memoryStore.achievements;
  },

  async getEducation(): Promise<Education[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM education ORDER BY sort_order ASC');
        if (rows.length > 0) return rows;
      } catch (err) {
        console.error('[Database] Error querying education from MySQL, using fallback:', err);
      }
    }
    return memoryStore.education;
  },

  async getSoftSkills(): Promise<SoftSkill[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM soft_skills ORDER BY sort_order ASC');
        if (rows.length > 0) return rows;
      } catch (err) {
        console.error('[Database] Error querying soft skills from MySQL, using fallback:', err);
      }
    }
    return memoryStore.softSkills;
  },

  async getLanguages(): Promise<Language[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM languages ORDER BY sort_order ASC');
        if (rows.length > 0) return rows;
      } catch (err) {
        console.error('[Database] Error querying languages from MySQL, using fallback:', err);
      }
    }
    return memoryStore.languages;
  },

  async saveContactMessage(msg: {
    name: string;
    email: string;
    subject: string;
    message: string;
    ip_address?: string;
    user_agent?: string;
  }): Promise<ContactMessage> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [result]: any = await mysqlPool.query(
          'INSERT INTO contact_messages (name, email, subject, message, ip_address, user_agent, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [msg.name, msg.email, msg.subject, msg.message, msg.ip_address || null, msg.user_agent || null, 'unread']
        );
        return {
          id: result.insertId,
          ...msg,
          status: 'unread',
          created_at: new Date().toISOString(),
        };
      } catch (err) {
        console.error('[Database] Error inserting contact message into MySQL, falling back to memory store:', err);
      }
    }
    return memoryStore.addContactMessage(msg);
  },

  async getContactMessages(): Promise<ContactMessage[]> {
    if (dbStatus.isMySQL && mysqlPool) {
      try {
        const [rows] = await mysqlPool.query<any[]>('SELECT * FROM contact_messages ORDER BY id DESC');
        return rows;
      } catch (err) {
        console.error('[Database] Error querying contact messages from MySQL, using fallback:', err);
      }
    }
    return memoryStore.contactMessages;
  },

  getStatus() {
    return {
      ...dbStatus,
      lastChecked: new Date().toISOString(),
      stats: {
        skillsCount: memoryStore.skills.length,
        projectsCount: memoryStore.projects.length,
        certificationsCount: memoryStore.certifications.length,
        messagesCount: memoryStore.contactMessages.length,
      },
    };
  },
};
