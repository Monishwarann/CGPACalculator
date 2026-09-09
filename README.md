# 🎓 MSEC & Anna University Automatic GPA & CGPA Engine

![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite 8](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-v13.2-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![PWA Ready](https://img.shields.io/badge/PWA-Offline_Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

> **Production-Quality, High-Performance Web Application built specifically for Meenakshi Sundararajan Engineering College (MSEC Autonomous) & Anna University (Regulations R2024, R2023, R2025)**

---

## 📑 Table of Contents

- [🌟 Key Features](#-key-features)
- [📚 Supported Regulations & Syllabus Datasets](#-supported-regulations--syllabus-datasets)
- [🧮 Calculation Formulas & Rules Engine](#-calculation-formulas--rules-engine)
- [📊 Interactive Simulators & Analytics](#-interactive-simulators--analytics)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start & Installation](#-quick-start--installation)
- [📄 Export & Reporting Features](#-export--reporting-features)
- [🔒 Privacy & Offline PWA Support](#-privacy--offline-pwa-support)
- [📜 License](#-license)

---

## 🌟 Key Features

- **Zero Manual Credit Input**: Students select Institution → Regulation → Programme → Semester. Official course codes, titles, course categories, and locked credits load automatically. The credit column is strictly locked to official curriculum specs to eliminate student error.
- **Config-Driven Regulations Engine**: Decoupled engine supporting autonomous MSEC R2024 and Anna University R2023/R2025 grade scales and formulas.
- **Credit-Weighted CGPA Accumulator**: Computes mathematically exact credit-weighted CGPA across all saved semester history records.
- **"What If I Get..." Grade Simulator**: Test hypothetical grade combinations in real-time before official university results are published.
- **🎯 Target CGPA Planner**: Calculates the exact minimum average GPA required across remaining semesters to achieve your target graduation CGPA, complete with mathematical feasibility status (*Easily Achievable*, *Achievable*, *Very Difficult*, *Mathematically Impossible*).
- **Modern Dark Glassmorphic UI**: High-contrast visual design, smooth Framer Motion micro-animations, Recharts performance trajectory charts, and custom dark/light theme switcher.
- **Full Offline PWA & Local Storage**: 100% client-side privacy. All grade data is stored locally in `localStorage` without any server tracking.

---

## 📚 Supported Regulations & Syllabus Datasets

| Institution / Regulation | Regulation Code | Max Grade Point | Verified Programmes & Datasets |
| :--- | :--- | :---: | :--- |
| **MSEC Autonomous (R2024)** | `MSEC_R2024` | `10.0` | Mechanical (169 Cr), Civil (172 Cr), CSE, ECE, EEE, IT, AI & DS |
| **Anna University (R2023)** | `AU_R2023` | `10.0` | CSE, ECE, EEE, IT, Mechanical, Civil, AI & DS |
| **Anna University (R2025)** | `AU_R2025` | `10.0` | Universal Choice Based Credit System (CBCS) Syllabus Datasets |

### Grade Scale & Letter Points Matrix

| Grade Letter | Point Value | Performance Label | Result Status |
| :---: | :---: | :---: | :---: |
| **O** | `10.0` | Outstanding | Pass |
| **A+** | `9.0` | Excellent | Pass |
| **A** | `8.0` | Very Good | Pass |
| **B+** | `7.0` | Good | Pass |
| **B** | `6.0` | Average | Pass |
| **C** | `5.0` | Satisfactory | Pass |
| **RA / U** | `0.0` | Re-appear / Backlog | Fail |

---

## 🧮 Calculation Formulas & Rules Engine

### 1. Semester Grade Point Average (GPA)

$$\text{GPA} = \frac{\sum_{i=1}^{n} (C_i \times \text{GP}_i)}{\sum_{i=1}^{n} C_i}$$

Where:
- $C_i$ = Locked credit value of subject $i$
- $\text{GP}_i$ = Grade point earned in subject $i$
- $n$ = Number of GPA-eligible subjects registered in current semester

### 2. Cumulative Grade Point Average (CGPA)

$$\text{CGPA} = \frac{\sum_{j=1}^{m} \text{GPA}_j \times C_{\text{sem}, j}}{\sum_{j=1}^{m} C_{\text{sem}, j}}$$

Where $C_{\text{sem}, j}$ is total credits registered in semester $j$.

### 3. Equivalent Percentage

$$\text{Percentage } (\%) = \text{CGPA} \times 10$$

---

## 📊 Interactive Simulators & Analytics

### 🎯 Target CGPA Feasibility Matrix
The Target CGPA engine evaluates required future GPA:

$$\text{Required GPA} = \frac{(\text{Target CGPA} \times T) - (\text{Current CGPA} \times C_{\text{done}})}{C_{\text{remaining}}}$$

- **Easily Achievable**: Required GPA ≤ Current CGPA
- **Achievable**: Current CGPA < Required GPA ≤ 9.50
- **Very Difficult**: 9.50 < Required GPA ≤ Max Grade Point (10.0)
- **Mathematically Impossible**: Required GPA > Max Grade Point (10.0)

---

## 🛠️ Technology Stack

- **Core & Framework**: React 19.2 + Vite 8.2 (ESM)
- **Styling & Aesthetics**: Tailwind CSS v4 + Custom Glassmorphism + Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)
- **Animations**: Framer Motion 13.2
- **Data Visualization**: Recharts 3.10
- **Document Export**: jsPDF + HTML2Canvas
- **Icons**: Lucide React
- **PWA & Offline**: Web App Manifest + Service Worker

---

## 📁 Project Structure

```
cgpa/
├── public/
│   ├── favicon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   └── manifest.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AcademicSelector.jsx      # Step 1-3 Institution, Branch & Semester selector
│   │   ├── AdminPanelModal.jsx       # JSON Curriculum Schema & Dataset Manager
│   │   ├── CalculationBreakdown.jsx  # Step-by-step credit formula audit log
│   │   ├── CourseTable.jsx           # Locked course table with dynamic grade dropdowns
│   │   ├── CurriculumBadge.jsx       # Live syllabus dataset status pill badge
│   │   ├── Footer.jsx                # Responsive glass footer & disclaimers
│   │   ├── Header.jsx                # Sticky glassmorphic navbar with PWA install
│   │   ├── HeroSection.jsx           # Animated header banner with floating glowing spheres
│   │   ├── PerformanceChart.jsx      # Recharts GPA & CGPA performance trajectory chart
│   │   ├── ResultDashboard.jsx       # KPI stat glass cards & action toolbar
│   │   ├── SemesterHistory.jsx       # CGPA credit-weighted accumulator history
│   │   ├── TargetCGPACalculator.jsx  # Target CGPA strategy planner & feasibility gauge
│   │   └── WhatIfCalculator.jsx      # Real-time "What-If" grade scenario simulator
│   ├── data/
│   │   ├── curriculumData.js         # Verified curriculum datasets (MSEC & AU)
│   │   └── regulations.js            # Regulation rules, grade scales & degree programs
│   ├── engine/
│   │   ├── cgpaCalculator.js         # Cumulative CGPA accumulator engine
│   │   ├── classificationEngine.js   # Class degree classification engine
│   │   ├── gpaCalculator.js          # GPA calculation engine
│   │   ├── percentageCalculator.js   # CGPA to percentage engine
│   │   └── validation.js             # Target CGPA feasibility calculator
│   ├── services/
│   │   ├── exportService.js          # PDF, CSV, and Text summary export generator
│   │   └── storageService.js         # localStorage persistence service
│   ├── App.css
│   ├── App.jsx                       # Root dashboard application context
│   ├── index.css                     # Global styles, glassmorphism tokens, Google fonts
│   └── main.jsx                      # Vite application entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Quick Start & Installation

### Prerequisites

- Node.js `v18.0.0` or higher
- `npm` or `yarn`

### Installation Commands

```bash
# 1. Clone repository
git clone https://github.com/Monishwarann/CGPACalculator.git

# 2. Change working directory
cd CGPACalculator

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

### Build & Lint Commands

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview

# Run Oxlint code analysis
npm run lint
```

---

## 📄 Export & Reporting Features

- 📑 **PDF Report Download**: Generates a official formatted transcript report containing institution metadata, active course grades, GPA, CGPA, and degree classification.
- 📊 **CSV Export**: Downloads a `.csv` spreadsheet ready for Excel or Google Sheets.
- 📋 **Copy Text Summary**: One-click copy formatted text snippet ready to share via WhatsApp, Email, or SMS.

---

## 🔒 Privacy & Offline PWA Support

- **100% Client-Side**: All calculations execute locally inside your Web Browser. Zero personal data, roll numbers, or grades are transmitted over the network.
- **Offline PWA Support**: Installable as a Progressive Web App (PWA) on Mobile (iOS/Android) and Desktop (Chrome/Edge/Safari) for offline use without active internet connectivity.

---

## 📜 License

This project is open-source and licensed under the [MIT License](LICENSE).

© 2026 MSEC Automatic GPA & CGPA Engine. Developed for MSEC & Anna University Students.
