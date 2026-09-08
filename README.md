# 🎓 MSEC & Anna University Automatic GPA & CGPA Calculator

> **Production-Quality, Responsive Web Application built for Meenakshi Sundararajan Engineering College (MSEC Autonomous) & Anna University (R2024, R2023, R2025)**

---

## 🌟 Key Product Features

- **Zero Manual Credit Input**: Students select Institution $\rightarrow$ Regulation $\rightarrow$ Programme $\rightarrow$ Semester. Official course codes, titles, categories, and credits load automatically. The credit column is read-only.
- **Config-Driven Regulation Engine**: Decoupled calculation services supporting:
  - **MSEC Autonomous — R2024**
  - **Anna University — R2023**
  - **Anna University — R2025**
- **Verified Syllabus Datasets**:
  - **MSEC R2024 B.E. Mechanical Engineering** (All 8 Semesters, 169.0 Credits)
  - **MSEC R2024 B.E. Civil Engineering** (All 8 Semesters, 172.0 Credits)
  - **MSEC R2024 & AU R2023 CSE, ECE, EEE, IT, AI & DS**
- **Credit-Weighted CGPA Accumulator**: Computes mathematically accurate credit-weighted CGPA across all saved semester records.
- **"What If I Get..." Grade Simulator**: Test hypothetical grade combinations with real-time projected GPA & CGPA updates.
- **🎯 Target CGPA Planner**: Calculates required average future GPA for remaining credits with mathematical feasibility status (*Achievable*, *Very Difficult*, *Mathematically Impossible*).
- **Export & Sharing**: Download PDF transcript report, export CSV spreadsheet, copy text summary snippet for WhatsApp/SMS.
- **100% Local & Confidential**: All calculations execute locally in the browser with `localStorage` state persistence and full offline PWA support.

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Glassmorphism Dark UI
- **Icons & Visuals**: Lucide React
- **Charting**: Recharts
- **PDF Generation**: jsPDF
- **PWA**: Web App Manifest & Service Worker

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ and `npm`

### Installation & Execution

```bash
# Clone the repository
git clone https://github.com/Monishwarann/CGPACalculator.git

# Navigate into project directory
cd CGPACalculator

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

© 2026 MSEC GPA & CGPA Calculator.

