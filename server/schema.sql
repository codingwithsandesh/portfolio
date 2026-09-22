-- =======================================================
-- Database Schema for Sandesh J. Heda's Portfolio
-- Target RDBMS: MySQL 8.0+ / MariaDB
-- =======================================================

CREATE DATABASE IF NOT EXISTS `portfolio_sandesh` 
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `portfolio_sandesh`;

-- 1. Profile Table
CREATE TABLE IF NOT EXISTS `profile` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(100) NOT NULL,
  `title` VARCHAR(150) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `linkedin_url` VARCHAR(255) NOT NULL,
  `github_url` VARCHAR(255) NOT NULL,
  `career_profile` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Skills Table
CREATE TABLE IF NOT EXISTS `skills` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `category` ENUM('Programming Languages', 'Web Technologies', 'Database', 'Concepts', 'Tools & Platforms') NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `proficiency_level` VARCHAR(50) DEFAULT 'Proficient',
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Projects Table
CREATE TABLE IF NOT EXISTS `projects` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(150) NOT NULL,
  `subtitle` VARCHAR(255) NOT NULL,
  `problem` TEXT NOT NULL,
  `solution` TEXT NOT NULL,
  `technologies` JSON NOT NULL,
  `layout_details` JSON NOT NULL,
  `ui_ux_features` JSON NOT NULL,
  `responsiveness` TEXT NOT NULL,
  `implemented_features` JSON NOT NULL,
  `github_url` VARCHAR(255) DEFAULT 'https://github.com/codingwithsandesh',
  `live_url` VARCHAR(255) DEFAULT NULL,
  `is_featured` BOOLEAN DEFAULT TRUE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Experience Table
CREATE TABLE IF NOT EXISTS `experience` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `role` VARCHAR(150) NOT NULL,
  `company` VARCHAR(150) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `employment_type` VARCHAR(50) NOT NULL,
  `start_date` VARCHAR(50) NOT NULL,
  `end_date` VARCHAR(50) NOT NULL,
  `is_current` BOOLEAN DEFAULT TRUE,
  `responsibilities` JSON NOT NULL,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Certifications Table
CREATE TABLE IF NOT EXISTS `certifications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `issuer` VARCHAR(100) NOT NULL,
  `issue_date` VARCHAR(50) NOT NULL,
  `credential_type` VARCHAR(50) DEFAULT 'Course / Skill Badge',
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Achievements Table
CREATE TABLE IF NOT EXISTS `achievements` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `organization` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Education Table
CREATE TABLE IF NOT EXISTS `education` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `institution` VARCHAR(200) NOT NULL,
  `degree` VARCHAR(200) NOT NULL,
  `field_of_study` VARCHAR(150) DEFAULT NULL,
  `period` VARCHAR(50) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Soft Skills Table
CREATE TABLE IF NOT EXISTS `soft_skills` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `sort_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. Languages Table
CREATE TABLE IF NOT EXISTS `languages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(80) NOT NULL,
  `proficiency` VARCHAR(80) NOT NULL,
  `sort_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. Contact Inquiries / Messages Table
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `subject` VARCHAR(200) NOT NULL,
  `message` TEXT NOT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `user_agent` TEXT DEFAULT NULL,
  `status` ENUM('unread', 'read', 'archived') DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =======================================================
-- SEED DATA (Exact Resume Details Only)
-- =======================================================

-- Profile Seed
INSERT INTO `profile` (`id`, `full_name`, `title`, `email`, `phone`, `linkedin_url`, `github_url`, `career_profile`)
VALUES (
  1,
  'Sandesh J. Heda',
  'Full Stack Developer | Data Analyst',
  'hedasandesh92@gmail.com',
  '+91 7350683348',
  'https://www.linkedin.com/in/sandesh-heda/',
  'https://github.com/codingwithsandesh',
  'I am a BCA student with hands-on experience in Full Stack Development, Frontend Development, and Data Analysis. I have experience building responsive web applications, working with databases, and using data to solve practical problems. I am comfortable learning new technologies and adapting to different project requirements.'
) ON DUPLICATE KEY UPDATE `updated_at` = CURRENT_TIMESTAMP;

-- Skills Seed
INSERT INTO `skills` (`category`, `name`, `sort_order`) VALUES
('Programming Languages', 'C', 1),
('Programming Languages', 'C++', 2),
('Programming Languages', 'Java', 3),
('Programming Languages', 'Python', 4),
('Web Technologies', 'HTML5', 5),
('Web Technologies', 'CSS3', 6),
('Web Technologies', 'JavaScript', 7),
('Web Technologies', 'Responsive Web Design', 8),
('Web Technologies', 'UI/UX Principles', 9),
('Database', 'DBMS', 10),
('Database', 'SQL', 11),
('Database', 'Database Concepts', 12),
('Database', 'MySQL', 13),
('Concepts', 'Data Structures and Algorithms', 14),
('Concepts', 'Object-Oriented Programming', 15),
('Concepts', 'Problem Solving', 16),
('Concepts', 'Debugging', 17),
('Tools & Platforms', 'Git', 18),
('Tools & Platforms', 'GitHub', 19),
('Tools & Platforms', 'Visual Studio Code', 20),
('Tools & Platforms', 'Chrome DevTools', 21),
('Tools & Platforms', 'Microsoft Office', 22),
('Tools & Platforms', 'Jupyter Notebook', 23),
('Tools & Platforms', 'MySQL', 24);

-- Projects Seed (Pixora)
INSERT INTO `projects` (
  `id`, `title`, `subtitle`, `problem`, `solution`, `technologies`, `layout_details`, `ui_ux_features`, `responsiveness`, `implemented_features`, `github_url`, `live_url`, `is_featured`
) VALUES (
  1,
  'PIXORA',
  'Visual Discovery and Image Sharing Platform',
  'Existing image-sharing platforms often have cluttered interfaces, slow loading times, and poor responsiveness, making content discovery difficult.',
  'Developed a responsive image-sharing web application using HTML, CSS, and JavaScript with modern client-side performance and accessibility.',
  '["HTML5", "CSS3", "JavaScript"]',
  '["Flexbox", "CSS Grid", "Media Queries"]',
  '["Hover animations", "Modals", "Box shadows", "Sticky navigation"]',
  'Mobile-first design with adaptive columns based on screen width',
  '["Clean Masonry-style image gallery", "Sticky navigation", "Search functionality", "Interactive image modals", "Hover effects", "Smooth UI animations", "Responsive layout", "Mobile-first design", "Flexbox", "CSS Grid", "Media Queries", "Navigation and accessibility improvements"]',
  'https://github.com/codingwithsandesh',
  NULL,
  TRUE
) ON DUPLICATE KEY UPDATE `updated_at` = CURRENT_TIMESTAMP;

-- Experience Seed
INSERT INTO `experience` (`id`, `role`, `company`, `location`, `employment_type`, `start_date`, `end_date`, `is_current`, `responsibilities`, `sort_order`)
VALUES (
  1,
  'Google Student Ambassador (Intern)',
  'Google',
  'Remote',
  'Internship',
  'August 2025',
  'June 2026',
  TRUE,
  '["Selected as a Google Student Ambassador to represent Google products and initiatives on campus.", "Promoted awareness of Google tools such as Gemini through workshops, social media, and peer engagement.", "Created student-focused content and learning resources to simplify technical concepts.", "Developed communication, leadership, and community-building skills."]',
  1
) ON DUPLICATE KEY UPDATE `id` = 1;

-- Certifications Seed
INSERT INTO `certifications` (`title`, `issuer`, `issue_date`, `sort_order`) VALUES
('Build Real World AI Applications with Gemini & Imagen', 'Google Cloud', 'Apr 2025', 1),
('Responsible AI for Digital Leaders', 'Google Cloud', 'May 2025', 2),
('Frontend Application Dev Environment Setup', 'Google Cloud', 'May 2025', 3),
('Deploy Kubernetes Applications on Google Cloud', 'Google Cloud', 'May 2025', 4),
('Perform Predictive Data Analysis in BigQuery', 'Google Cloud', 'May 2025', 5),
('Use APIs to Work with Cloud Storage', 'Google Cloud', 'Apr 2025', 6),
('Build Infrastructure with Terraform', 'Google Cloud', 'May 2025', 7),
('Introduction to Generative AI with Gemini API', 'Google Cloud', 'May 2025', 8);

-- Achievements Seed
INSERT INTO `achievements` (`id`, `title`, `organization`, `description`, `sort_order`)
VALUES (
  1,
  'Google Cloud Arcade Facilitator',
  'Google Cloud',
  'Successfully completed a facilitation program promoting cloud learning and awareness among peers.',
  1
) ON DUPLICATE KEY UPDATE `id` = 1;

-- Education Seed
INSERT INTO `education` (`institution`, `degree`, `field_of_study`, `period`, `status`, `sort_order`) VALUES
('Rajasthan Aryan Arts College, Washim', 'Bachelor of Computer Application', 'Data Science (3rd Year)', 'Ongoing', 'Ongoing', 1),
('Shri Radhakisan Laxminarayan Toshniwal College of Science (RLT), Akola', 'Higher Secondary Education (12th)', '12th Science', '2023–2024', 'Completed', 2),
('Happy Faces The Concept School, Washim', 'Secondary Education (10th)', '10th', '2021–2022', 'Completed', 3);

-- Soft Skills Seed
INSERT INTO `soft_skills` (`name`, `sort_order`) VALUES
('Effective Communication & Teamwork', 1),
('Quick Learner & Adaptable', 2),
('Time Management & Attention to Detail', 3),
('Positive Attitude & Willingness to Learn', 4);

-- Languages Seed
INSERT INTO `languages` (`name`, `proficiency`, `sort_order`) VALUES
('English', 'Professional Working', 1),
('Hindi', 'Fluent', 2),
('Marathi', 'Native / Fluent', 3);
