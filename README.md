# Aditya Narayan Sahoo — IBM Internal Portfolio

> **Cloud & Data Engineering Specialist | Applied AI Specialist at IBM India**  
> Supporting business-critical cloud data engineering platforms, enterprise applications, and AI-enabled workflows across global markets.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-purple.svg)](https://vitejs.dev/)
[![SLA](https://img.shields.io/badge/Platform_SLA-99.98%25-emerald.svg)](#)
[![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-sky.svg)](#)

---

## ⚡ Overview

This repository hosts the interactive portfolio web application for **Aditya Narayan Sahoo**, showcasing enterprise cloud and data engineering expertise, production L2 reliability engineering, and applied AI workflows honed through high-throughput engagements with **IBM** and client engagements including **Philip Morris International**.

### 🌟 Key Features

1. **Interactive Multi-Cloud Data Pipeline Visualizer**:
   - Visual architectural flow: **Source Ingestion ➔ Matillion ETL & Maia ➔ AWS Cloud (S3/IAM) ➔ Snowflake DWH ➔ Databricks Lakehouse ➔ Enterprise Consumers & Reporting**.
   - Real-time telemetry inspector displaying response latency, sustained throughput, core runtimes, and 24/7 SLA monitoring scope.
   - **Enterprise L2 Production Incident & RCA Simulator**: 3 real-world scenarios (*High-Volume ETL Ingestion Lock Contention*, *Databricks Spark Worker OOM & Data Skew*, and *AWS S3 Staging Format Drift*) with diagnostic stream logs, Root Cause Analysis (RCA), and step-by-step remediation with resolution confetti.

2. **Enterprise Experience & Track Record**:
   - **Applied AI Specialist** at IBM India (Jul 2026 - Present).
   - **Data & Cloud Engineer** on featured client engagement with **Philip Morris International** (May 2025 - Present) supporting global market workflows across Matillion, Snowflake, Databricks, and AWS.
   - **Associate Systems Engineer** at IBM India (Feb 2024 - Jun 2026).
   - **Software Engineer Intern** at KPIT Technologies (Dec 2023 - May 2024).

3. **Skills & Capabilities Matrix**:
   - Filterable tabs across **Cloud & Data Engineering**, **Applied AI & Intelligent Engineering**, **DevOps & Production Operations**, **Software & Web Engineering**, and **Ways of Working**.
   - Real-time search filter and proficiency level badges.

4. **Verified Digital Credentials**:
   - Gallery of 14 verified badges across IBM watsonx, Azure Fundamentals, Matillion Maia, Red Hat Premier Tier, IBM Cloud Essentials, and Agile methodologies.

5. **Theme Engine & Design System**:
   - Built on pure **Vanilla CSS** design tokens inspired by modern Linear/Vercel minimalist aesthetics.
   - **Dark Mode**: Obsidian slate palette (`#060911`, `#0f172a`, `#38bdf8`) with glowing telemetry accents.
   - **Light Mode**: Crisp corporate slate palette (`#f8fafc`, `#ffffff`, `#0f172a`) with signature **IBM Blue (`#0f62fe`)** primary controls.
   - **Butter-Smooth Theme Cross-Fade**: Hardware-accelerated dual-layer ambient gradient cross-fade with zero visual snap/disruption.

6. **Privacy-First Contact Suite & In-Browser Printable CV**:
   - One-click copy for corporate email `adityasahoo@ibm.com` with toast confirmation.
   - Integrated full curriculum vitae modal ready for `Print / Save to PDF`.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS Design Tokens (Zero Tailwind dependency for full custom control)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive FX**: Canvas Confetti

---

## 📂 Project Structure

```
portfolio/
├── index.html                  # HTML entry point, fonts & theme restoration
├── package.json                # Project configuration & dependencies
├── vite.config.js              # Vite bundler configuration
├── src/
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # Master page layout & component assembly
│   ├── index.css               # Core design tokens, theme palettes & transitions
│   ├── App.css                 # Component-specific styles & light mode rules
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth (CV, metrics, pipeline nodes, RCA)
│   └── components/
│       ├── Navbar.jsx          # Glassmorphic header with dark/light toggle & CV trigger
│       ├── Hero.jsx            # Headline, KPI metrics grid & platform runtime strip
│       ├── PipelineVisualizer.jsx # Interactive architecture flow & incident simulator
│       ├── ExperienceSection.jsx # Chronological career cards & PMI assignment spotlight
│       ├── SkillsSection.jsx   # Filterable technical capabilities & search matrix
│       ├── CredentialsSection.jsx # Digital credential badges & verification gallery
│       ├── EducationSection.jsx# Academic foundation & degree milestones
│       ├── ContactSection.jsx  # 1-click email copy, privacy metadata & message form
│       ├── ResumeModal.jsx     # Printable CV view with browser print support
│       └── Footer.jsx          # Live operational SLA heartbeat & navigation links
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Local Run
```bash
# 1. Clone or navigate to the repository
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open your browser to:
```
http://localhost:5173/
```

### Production Build
To create an optimized production build:
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

---

## 👤 Author

**Aditya Narayan Sahoo**  
- Email: `adityasahoo@ibm.com`  
- Current Role: Applied AI Specialist, IBM India Pvt. Ltd.  
- Client Engagement: Philip Morris International  

---

© 2026 Aditya Narayan Sahoo. All rights reserved.
