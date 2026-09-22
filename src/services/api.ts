import {
  Profile,
  Skill,
  Project,
  Experience,
  Certification,
  Achievement,
  Education,
  SoftSkill,
  Language,
  ApiHealthStatus,
  ContactMessage,
} from '../types.ts';

// Default initial state matching the real resume for instant load & offline resilience
export const RESUME_DATA = {
  profile: {
    id: 1,
    full_name: 'Sandesh J. Heda',
    title: 'Full Stack Developer | Data Analyst',
    email: 'hedasandesh92@gmail.com',
    phone: '+91 7350683348',
    linkedin_url: 'https://www.linkedin.com/in/sandesh-heda/',
    github_url: 'https://github.com/codingwithsandesh',
    career_profile:
      'I am a BCA student with hands-on experience in Full Stack Development, Frontend Development, and Data Analysis. I have experience building responsive web applications, working with databases, and using data to solve practical problems. I am comfortable learning new technologies and adapting to different project requirements.',
  } as Profile,

  skills: [
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
  ] as Skill[],

  projects: [
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
  ] as Project[],

  experience: [
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
  ] as Experience[],

  certifications: [
    { id: 1, title: 'Build Real World AI Applications with Gemini & Imagen', issuer: 'Google Cloud', issue_date: 'Apr 2025', sort_order: 1 },
    { id: 2, title: 'Responsible AI for Digital Leaders', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 2 },
    { id: 3, title: 'Frontend Application Dev Environment Setup', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 3 },
    { id: 4, title: 'Deploy Kubernetes Applications on Google Cloud', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 4 },
    { id: 5, title: 'Perform Predictive Data Analysis in BigQuery', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 5 },
    { id: 6, title: 'Use APIs to Work with Cloud Storage', issuer: 'Google Cloud', issue_date: 'Apr 2025', sort_order: 6 },
    { id: 7, title: 'Build Infrastructure with Terraform', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 7 },
    { id: 8, title: 'Introduction to Generative AI with Gemini API', issuer: 'Google Cloud', issue_date: 'May 2025', sort_order: 8 },
  ] as Certification[],

  achievements: [
    {
      id: 1,
      title: 'Google Cloud Arcade Facilitator',
      organization: 'Google Cloud',
      description: 'Successfully completed a facilitation program promoting cloud learning and awareness among peers.',
      sort_order: 1,
    },
  ] as Achievement[],

  education: [
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
  ] as Education[],

  softSkills: [
    { id: 1, name: 'Effective Communication & Teamwork', sort_order: 1 },
    { id: 2, name: 'Quick Learner & Adaptable', sort_order: 2 },
    { id: 3, name: 'Time Management & Attention to Detail', sort_order: 3 },
    { id: 4, name: 'Positive Attitude & Willingness to Learn', sort_order: 4 },
  ] as SoftSkill[],

  languages: [
    { id: 1, name: 'English', proficiency: 'Professional Working Proficiency', sort_order: 1 },
    { id: 2, name: 'Hindi', proficiency: 'Fluent', sort_order: 2 },
    { id: 3, name: 'Marathi', proficiency: 'Native / Fluent', sort_order: 3 },
  ] as Language[],
};

// Generic safe fetch with timeout
async function apiFetch<T>(url: string, fallback: T): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`[API] ${url} returned ${res.status}, using cache/fallback.`);
      return fallback;
    }
    const json = await res.json();
    return json.data !== undefined ? json.data : json;
  } catch (err) {
    // Network or server offline - return fallback seamlessly
    return fallback;
  }
}

export const api = {
  getProfile: () => apiFetch<Profile>('/api/profile', RESUME_DATA.profile),
  getSkills: () => apiFetch<Skill[]>('/api/skills', RESUME_DATA.skills),
  getProjects: () => apiFetch<Project[]>('/api/projects', RESUME_DATA.projects),
  getExperience: () => apiFetch<Experience[]>('/api/experience', RESUME_DATA.experience),
  getCertifications: () => apiFetch<Certification[]>('/api/certifications', RESUME_DATA.certifications),
  getAchievements: () => apiFetch<Achievement[]>('/api/achievements', RESUME_DATA.achievements),
  getEducation: () => apiFetch<Education[]>('/api/education', RESUME_DATA.education),
  getSoftSkills: () => apiFetch<SoftSkill[]>('/api/soft-skills', RESUME_DATA.softSkills),
  getLanguages: () => apiFetch<Language[]>('/api/languages', RESUME_DATA.languages),

  async getHealth(): Promise<ApiHealthStatus | null> {
    try {
      const res = await fetch('/api/health');
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  },

  async sendContactMessage(payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<{ success: boolean; message: string; data?: any; errors?: Record<string, string> }> {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      return data;
    } catch (err: any) {
      return {
        success: false,
        message: 'Failed to send message. Please ensure the backend server is reachable or contact directly by email.',
      };
    }
  },

  async getContactMessages(passcode?: string): Promise<{ success: boolean; data?: ContactMessage[]; error?: string }> {
    try {
      const headers: Record<string, string> = {};
      if (passcode) headers['x-admin-passcode'] = passcode;

      const res = await fetch('/api/contact-messages', { headers });
      return await res.json();
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  },

  async getRawSchema(): Promise<string> {
    try {
      const res = await fetch('/api/db/schema');
      return await res.text();
    } catch {
      return '-- Unable to load schema from server.';
    }
  },
};
