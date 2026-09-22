import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { dbService, initializeDatabase } from './server/db.ts';

const PORT = 3000;

async function startServer() {
  const app = express();

  // Basic Middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Initialize DB Connection
  await initializeDatabase();

  // ==========================================
  // REST API ENDPOINTS
  // ==========================================

  // Health Check & Database Diagnostic
  app.get('/api/health', (req: Request, res: Response) => {
    const status = dbService.getStatus();
    res.status(200).json({
      status: 'online',
      timestamp: new Date().toISOString(),
      service: 'Sandesh J. Heda - Full Stack Portfolio API',
      database: status,
      version: '1.0.0',
    });
  });

  // Profile
  app.get('/api/profile', async (req: Request, res: Response) => {
    try {
      const profile = await dbService.getProfile();
      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve profile data',
        message: error.message,
      });
    }
  });

  // Skills
  app.get('/api/skills', async (req: Request, res: Response) => {
    try {
      const skills = await dbService.getSkills();
      // Group by category for convenience while maintaining flat list
      const grouped = skills.reduce((acc: Record<string, typeof skills>, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
      }, {});

      res.status(200).json({
        success: true,
        count: skills.length,
        data: skills,
        categories: grouped,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve skills',
        message: error.message,
      });
    }
  });

  // Projects
  app.get('/api/projects', async (req: Request, res: Response) => {
    try {
      const projects = await dbService.getProjects();
      res.status(200).json({
        success: true,
        count: projects.length,
        data: projects,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve projects',
        message: error.message,
      });
    }
  });

  // Single Project by ID
  app.get('/api/projects/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);
      const projects = await dbService.getProjects();
      const project = projects.find((p) => p.id === id);

      if (!project) {
        return res.status(404).json({
          success: false,
          error: `Project with ID ${id} not found`,
        });
      }

      res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve project',
        message: error.message,
      });
    }
  });

  // Experience
  app.get('/api/experience', async (req: Request, res: Response) => {
    try {
      const experience = await dbService.getExperience();
      res.status(200).json({
        success: true,
        count: experience.length,
        data: experience,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve experience',
        message: error.message,
      });
    }
  });

  // Certifications
  app.get('/api/certifications', async (req: Request, res: Response) => {
    try {
      const certs = await dbService.getCertifications();
      res.status(200).json({
        success: true,
        count: certs.length,
        additionalInfo: 'Completed 30+ Google Cloud hands-on labs covering AI, Cloud Infrastructure, and Application Deployment.',
        data: certs,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve certifications',
        message: error.message,
      });
    }
  });

  // Achievements
  app.get('/api/achievements', async (req: Request, res: Response) => {
    try {
      const achievements = await dbService.getAchievements();
      res.status(200).json({
        success: true,
        count: achievements.length,
        data: achievements,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve achievements',
        message: error.message,
      });
    }
  });

  // Education
  app.get('/api/education', async (req: Request, res: Response) => {
    try {
      const education = await dbService.getEducation();
      res.status(200).json({
        success: true,
        count: education.length,
        data: education,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve education',
        message: error.message,
      });
    }
  });

  // Soft Skills
  app.get('/api/soft-skills', async (req: Request, res: Response) => {
    try {
      const softSkills = await dbService.getSoftSkills();
      res.status(200).json({
        success: true,
        data: softSkills,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve soft skills',
        message: error.message,
      });
    }
  });

  // Languages
  app.get('/api/languages', async (req: Request, res: Response) => {
    try {
      const languages = await dbService.getLanguages();
      res.status(200).json({
        success: true,
        data: languages,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve languages',
        message: error.message,
      });
    }
  });

  // Contact Form Submission (POST /api/contact)
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;

      // Backend Input Validation
      const errors: Record<string, string> = {};

      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        errors.name = 'Full name must be at least 2 characters.';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
        errors.email = 'A valid email address is required.';
      }

      if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
        errors.subject = 'Subject must be at least 3 characters.';
      }

      if (!message || typeof message !== 'string' || message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters.';
      }

      if (Object.keys(errors).length > 0) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          errors,
        });
      }

      // Client IP and user agent tracking
      const ip_address = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
      const user_agent = req.headers['user-agent'] || 'Unknown';

      // Persist to database
      const savedMessage = await dbService.saveContactMessage({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        ip_address,
        user_agent,
      });

      return res.status(201).json({
        success: true,
        message: 'Your message has been successfully received and recorded in the database. Thank you for reaching out!',
        data: {
          id: savedMessage.id,
          name: savedMessage.name,
          email: savedMessage.email,
          subject: savedMessage.subject,
          created_at: savedMessage.created_at,
          status: savedMessage.status,
        },
      });
    } catch (error: any) {
      console.error('[API] Contact submission error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to process contact message',
        message: 'Internal server error while saving message. Please try again or contact directly via email.',
      });
    }
  });

  // Admin / Dev API to view contact messages
  app.get('/api/contact-messages', async (req: Request, res: Response) => {
    try {
      const passcode = (req.headers['x-admin-passcode'] || req.query.passcode) as string | undefined;
      const expectedPasscode = process.env.ADMIN_PASSCODE || 'sandesh_admin_2025';

      // Passcode is required to access stored contact inquiries
      if (!passcode || passcode !== expectedPasscode) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized. Valid admin passcode is required to view contact inquiries.',
        });
      }

      const messages = await dbService.getContactMessages();
      res.status(200).json({
        success: true,
        count: messages.length,
        data: messages,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve messages',
        message: error.message,
      });
    }
  });

  // Raw Database Schema endpoint
  app.get('/api/db/schema', (req: Request, res: Response) => {
    try {
      const schemaPath = path.join(process.cwd(), 'server', 'schema.sql');
      if (fs.existsSync(schemaPath)) {
        const sqlContent = fs.readFileSync(schemaPath, 'utf8');
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.send(sqlContent);
      }
      res.status(404).json({ error: 'schema.sql not found' });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ==========================================
  // VITE & STATIC SERVING
  // ==========================================
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Sandesh J. Heda Portfolio Backend running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
