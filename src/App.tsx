import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Achievements } from './components/Achievements.tsx';
import { Education } from './components/Education.tsx';
import { SoftSkillsAndLanguages } from './components/SoftSkillsAndLanguages.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ApiMonitorModal } from './components/ApiMonitorModal.tsx';
import { api, RESUME_DATA } from './services/api.ts';
import {
  Profile,
  Skill,
  Project,
  Experience as ExperienceType,
  Certification,
  Achievement,
  Education as EducationType,
  SoftSkill,
  Language,
  ApiHealthStatus,
} from './types.ts';

export default function App() {
  const [profile, setProfile] = useState<Profile>(RESUME_DATA.profile);
  const [skills, setSkills] = useState<Skill[]>(RESUME_DATA.skills);
  const [projects, setProjects] = useState<Project[]>(RESUME_DATA.projects);
  const [experience, setExperience] = useState<ExperienceType[]>(RESUME_DATA.experience);
  const [certifications, setCertifications] = useState<Certification[]>(RESUME_DATA.certifications);
  const [achievements, setAchievements] = useState<Achievement[]>(RESUME_DATA.achievements);
  const [education, setEducation] = useState<EducationType[]>(RESUME_DATA.education);
  const [softSkills, setSoftSkills] = useState<SoftSkill[]>(RESUME_DATA.softSkills);
  const [languages, setLanguages] = useState<Language[]>(RESUME_DATA.languages);
  const [healthStatus, setHealthStatus] = useState<ApiHealthStatus | null>(null);
  const [isApiMonitorOpen, setIsApiMonitorOpen] = useState(false);

  // Sync data from backend REST API
  const refreshBackendData = async () => {
    try {
      const [
        pData,
        sData,
        projData,
        expData,
        certData,
        achData,
        eduData,
        softData,
        langData,
        health,
      ] = await Promise.all([
        api.getProfile(),
        api.getSkills(),
        api.getProjects(),
        api.getExperience(),
        api.getCertifications(),
        api.getAchievements(),
        api.getEducation(),
        api.getSoftSkills(),
        api.getLanguages(),
        api.getHealth(),
      ]);

      if (pData) setProfile(pData);
      if (sData && sData.length > 0) setSkills(sData);
      if (projData && projData.length > 0) setProjects(projData);
      if (expData && expData.length > 0) setExperience(expData);
      if (certData && certData.length > 0) setCertifications(certData);
      if (achData && achData.length > 0) setAchievements(achData);
      if (eduData && eduData.length > 0) setEducation(eduData);
      if (softData && softData.length > 0) setSoftSkills(softData);
      if (langData && langData.length > 0) setLanguages(langData);
      if (health) setHealthStatus(health);
    } catch (err) {
      console.warn('Backend sync note: Using preloaded resume data.', err);
    }
  };

  useEffect(() => {
    refreshBackendData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-200">
      {/* 1. Navbar */}
      <Navbar
        healthStatus={healthStatus}
        onOpenApiMonitor={() => setIsApiMonitorOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero */}
        <Hero
          profile={profile}
          onOpenApiMonitor={() => setIsApiMonitorOpen(true)}
        />

        {/* 3. About Me */}
        <About profile={profile} />

        {/* 4. Skills */}
        <Skills skills={skills} />

        {/* 5. Projects */}
        <Projects projects={projects} />

        {/* 6. Experience */}
        <Experience experience={experience} />

        {/* 7. Certifications */}
        <Certifications certifications={certifications} />

        {/* 8. Achievements */}
        <Achievements achievements={achievements} />

        {/* 9. Education */}
        <Education education={education} />

        {/* 10. Soft Skills & 11. Languages */}
        <SoftSkillsAndLanguages
          softSkills={softSkills}
          languages={languages}
        />

        {/* 12. Contact */}
        <Contact
          profile={profile}
          onMessageSent={refreshBackendData}
        />
      </main>

      {/* 13. Footer */}
      <Footer
        profile={profile}
        onOpenApiMonitor={() => setIsApiMonitorOpen(true)}
      />

      {/* Full-Stack Database & API Diagnostic Modal */}
      <ApiMonitorModal
        isOpen={isApiMonitorOpen}
        onClose={() => setIsApiMonitorOpen(false)}
        healthStatus={healthStatus}
        onRefreshHealth={refreshBackendData}
      />
    </div>
  );
}
