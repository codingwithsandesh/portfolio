# Sandesh J. Heda – Full Stack Portfolio

A professional full-stack personal portfolio website developed to showcase my profile, technical skills, projects, experience, education, certifications, and achievements.

## 🌐 Demo

🌐 **Live Demo:** [View Website](https://task1-personal-portfolio.netlify.app/)

## 📌 Project Overview

This project was developed as **Task 1 – Personal Portfolio Website** during my internship.

The objective was to build a full-stack portfolio website with a responsive frontend, Express.js backend, REST APIs, and MySQL database integration.

## ✨ Features

- Responsive personal portfolio website
- Professional homepage and profile section
- About Me section
- Technical Skills section
- Projects showcase
- Work Experience section
- Education section
- Certifications and achievements
- Languages and soft skills
- Contact section
- REST API integration
- MySQL database integration
- Backend health-check API
- Dynamic portfolio data retrieval

## 🛠️ Technologies Used

### Frontend
- React.js
- TypeScript
- HTML5
- CSS3
- Vite

### Backend
- Node.js
- Express.js
- REST API

### Database
- MySQL 8.0
- SQL

### Tools
- Visual Studio Code
- Git
- GitHub
- MySQL
- Web Browser

## 🏗️ Project Architecture

```text
React Frontend
      │
      │ REST API
      ▼
Express.js Backend
      │
      │ SQL Queries
      ▼
MySQL Database
portfolio_sandesh
```

## 📂 Project Structure

```text
Task-1-main/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── services/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
│
├── server/
│   ├── db.ts
│   └── schema.sql
│
├── index.html
├── server.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🗄️ Database

Database name:

```text
portfolio_sandesh
```

Tables:

```text
achievements
certifications
contact_messages
education
experience
languages
profile
projects
skills
soft_skills
```

## 🔌 API Endpoints

| Endpoint | Purpose |
|---|---|
| `/api/health` | Check backend and database status |
| `/api/profile` | Retrieve profile information |
| `/api/skills` | Retrieve technical skills |
| `/api/projects` | Retrieve project information |
| `/api/experience` | Retrieve work experience |
| `/api/education` | Retrieve education details |
| `/api/certifications` | Retrieve certifications |
| `/api/achievements` | Retrieve achievements |
| `/api/languages` | Retrieve languages |
| `/api/soft-skills` | Retrieve soft skills |

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Task-1-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MySQL

```sql
CREATE DATABASE portfolio_sandesh;
```

Import the schema:

```bash
mysql -u root -p portfolio_sandesh < server/schema.sql
```

### 4. Configure Environment Variables

Create a `.env` file:

```env
APP_URL=http://localhost:3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_DATABASE_PASSWORD
DB_NAME=portfolio_sandesh
DB_PORT=3306
```

> Never upload `.env` or database passwords to GitHub.

### 5. Run the Project

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🧪 Testing

Test the following endpoints:

```text
http://localhost:3000/api/health
http://localhost:3000/api/profile
http://localhost:3000/api/skills
http://localhost:3000/api/projects
```

## 📊 Project Outcome

This project provided practical experience in:

- Frontend development
- React component development
- Responsive web design
- Node.js and Express.js backend development
- REST API development
- MySQL database integration
- SQL and relational database management
- Frontend-backend communication
- Application testing and debugging

## 👨‍💻 Developer

**Sandesh J. Heda**

BCA – Data Science  
R.A. College, Washim  
Sant Gadge Baba Amravati University

- GitHub: YOUR_GITHUB_PROFILE
- LinkedIn: YOUR_LINKEDIN_PROFILE
- Portfolio: YOUR_DEMO_LINK_HERE

## 📄 Internship Task

**Task:** Personal Portfolio Website  
**Domain:** Full Stack Web Development  
**Frontend:** React.js / TypeScript  
**Backend:** Node.js / Express.js  
**Database:** MySQL

## 📜 License

This project was developed for educational and internship purposes.
