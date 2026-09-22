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
  status: 'unread' | 'read' | 'archived';
  created_at: string;
}

export interface ApiHealthStatus {
  status: string;
  timestamp: string;
  service: string;
  database: {
    mode: 'mysql' | 'memory';
    connected: boolean;
    isMySQL: boolean;
    host?: string;
    database?: string;
    user?: string;
    port?: number;
    message: string;
    lastChecked: string;
    stats?: {
      skillsCount: number;
      projectsCount: number;
      certificationsCount: number;
      messagesCount: number;
    };
  };
  version: string;
}
