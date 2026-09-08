/**
 * Academic Regulations Configuration Engine
 * 
 * Supports:
 * 1. MSEC Autonomous — R2024 (Meenakshi Sundararajan Engineering College)
 * 2. Anna University — R2023
 * 3. Anna University — R2025
 */

export const REGULATIONS = {
  MSEC_R2024: {
    id: "MSEC_R2024",
    institution: "MSEC Autonomous",
    institutionFullName: "Meenakshi Sundararajan Engineering College, Chennai",
    regulation: "R2024",
    academicSystem: "Autonomous Choice Based Credit System (CBCS)",
    isAutonomous: true,
    maxGradePoint: 10,
    minPassGradePoint: 5, // Grade 'C' = 5 points
    gradeScale: {
      "O": { point: 10, label: "Outstanding", pass: true, countInGPA: true, countInCGPA: true },
      "A+": { point: 9, label: "Excellent", pass: true, countInGPA: true, countInCGPA: true },
      "A": { point: 8, label: "Very Good", pass: true, countInGPA: true, countInCGPA: true },
      "B+": { point: 7, label: "Good", pass: true, countInGPA: true, countInCGPA: true },
      "B": { point: 6, label: "Above Average", pass: true, countInGPA: true, countInCGPA: true },
      "C": { point: 5, label: "Average (Pass)", pass: true, countInGPA: true, countInCGPA: true },
      "U": { point: 0, label: "Re-appear / Fail", pass: false, countInGPA: true, countInCGPA: true },
      "SA": { point: 0, label: "Shortage of Attendance", pass: false, countInGPA: true, countInCGPA: true },
      "WD": { point: 0, label: "Withdrawal", pass: false, countInGPA: false, countInCGPA: false }
    },
    gpaFormula: "GPA = Σ(Credit × Grade Point) / Σ(Credits of registered courses)",
    cgpaFormula: "CGPA = Σ(Credit × Grade Point) / Σ(Credits of all completed courses)",
    percentageFormula: (cgpa) => cgpa * 10,
    percentageFormulaText: "Percentage = CGPA × 10",
    classificationRules: [
      {
        minCGPA: 8.5,
        maxArrears: 0,
        label: "First Class with Distinction",
        description: "Must pass all courses in first attempt within minimum duration of study",
        color: "emerald"
      },
      {
        minCGPA: 6.5,
        maxArrears: 99,
        label: "First Class",
        description: "Pass within maximum authorized duration",
        color: "blue"
      },
      {
        minCGPA: 5.0,
        maxArrears: 99,
        label: "Second Class",
        description: "Pass all courses successfully",
        color: "amber"
      },
      {
        minCGPA: 0,
        maxArrears: 99,
        label: "Re-appear Required",
        description: "CGPA below minimum passing criteria or unresolved arrears",
        color: "rose"
      }
    ],
    verified: true,
    lastUpdated: "2024-08-01",
    source: "Official MSEC Academic Regulation R2024 Handbook"
  },

  AU_R2023: {
    id: "AU_R2023",
    institution: "Anna University",
    institutionFullName: "Anna University Affiliated Colleges, Chennai",
    regulation: "R2023",
    academicSystem: "Choice Based Credit System (CBCS)",
    isAutonomous: false,
    maxGradePoint: 10,
    minPassGradePoint: 5,
    gradeScale: {
      "O": { point: 10, label: "Outstanding", pass: true, countInGPA: true, countInCGPA: true },
      "A+": { point: 9, label: "Excellent", pass: true, countInGPA: true, countInCGPA: true },
      "A": { point: 8, label: "Very Good", pass: true, countInGPA: true, countInCGPA: true },
      "B+": { point: 7, label: "Good", pass: true, countInGPA: true, countInCGPA: true },
      "B": { point: 6, label: "Above Average", pass: true, countInGPA: true, countInCGPA: true },
      "C": { point: 5, label: "Average", pass: true, countInGPA: true, countInCGPA: true },
      "U": { point: 0, label: "Re-appear", pass: false, countInGPA: true, countInCGPA: true },
      "SA": { point: 0, label: "Shortage of Attendance", pass: false, countInGPA: true, countInCGPA: true },
      "WD": { point: 0, label: "Withdrawal", pass: false, countInGPA: false, countInCGPA: false }
    },
    gpaFormula: "GPA = Σ(Credit × Grade Point) / Σ(Credit)",
    cgpaFormula: "CGPA = Σ(Credit × Grade Point) / Σ(Credit)",
    percentageFormula: (cgpa) => cgpa * 10,
    percentageFormulaText: "Percentage = CGPA × 10",
    classificationRules: [
      {
        minCGPA: 8.5,
        maxArrears: 0,
        label: "First Class with Distinction",
        description: "Passed all courses in 1st attempt, no history of arrears",
        color: "emerald"
      },
      {
        minCGPA: 6.5,
        maxArrears: 99,
        label: "First Class",
        description: "Passed all courses within prescribed duration",
        color: "blue"
      },
      {
        minCGPA: 5.0,
        maxArrears: 99,
        label: "Second Class",
        description: "Passed all required courses",
        color: "amber"
      },
      {
        minCGPA: 0,
        maxArrears: 99,
        label: "Re-appear",
        description: "Has active backlogs or CGPA < 5.0",
        color: "rose"
      }
    ],
    verified: true,
    lastUpdated: "2023-09-15",
    source: "Anna University Academic Regulations R2023 Gazette"
  },

  AU_R2025: {
    id: "AU_R2025",
    institution: "Anna University",
    institutionFullName: "Anna University Affiliated Colleges — New Regulation R2025",
    regulation: "R2025",
    academicSystem: "NEP-aligned Outcome Based Credit System",
    isAutonomous: false,
    maxGradePoint: 10,
    minPassGradePoint: 5,
    gradeScale: {
      "O": { point: 10, label: "Outstanding", pass: true, countInGPA: true, countInCGPA: true },
      "A+": { point: 9, label: "Excellent", pass: true, countInGPA: true, countInCGPA: true },
      "A": { point: 8, label: "Very Good", pass: true, countInGPA: true, countInCGPA: true },
      "B+": { point: 7, label: "Good", pass: true, countInGPA: true, countInCGPA: true },
      "B": { point: 6, label: "Average", pass: true, countInGPA: true, countInCGPA: true },
      "C": { point: 5, label: "Pass", pass: true, countInGPA: true, countInCGPA: true },
      "U": { point: 0, label: "Re-appear", pass: false, countInGPA: true, countInCGPA: true },
      "SA": { point: 0, label: "Shortage of Attendance", pass: false, countInGPA: true, countInCGPA: true },
      "WD": { point: 0, label: "Withdrawal", pass: false, countInGPA: false, countInCGPA: false }
    },
    gpaFormula: "GPA = Σ(Credit × Grade Point) / Σ(Credit)",
    cgpaFormula: "CGPA = Σ(Credit × Grade Point) / Σ(Credit)",
    percentageFormula: (cgpa) => cgpa * 10,
    percentageFormulaText: "Percentage = CGPA × 10",
    classificationRules: [
      {
        minCGPA: 8.5,
        maxArrears: 0,
        label: "First Class with Distinction",
        description: "NEP 2020 Honours alignment & first-attempt completion",
        color: "emerald"
      },
      {
        minCGPA: 6.5,
        maxArrears: 99,
        label: "First Class",
        description: "Pass within standard study timeframe",
        color: "blue"
      },
      {
        minCGPA: 5.0,
        maxArrears: 99,
        label: "Second Class",
        description: "Pass all courses",
        color: "amber"
      },
      {
        minCGPA: 0,
        maxArrears: 99,
        label: "Re-appear",
        description: "Has backlogs or CGPA < 5.0",
        color: "rose"
      }
    ],
    verified: true,
    lastUpdated: "2025-06-10",
    source: "Anna University Draft R2025 Framework"
  }
};

export const PROGRAMMES = [
  { id: "BE_MECH", name: "B.E. Mechanical Engineering", shortName: "MECH", icon: "Cog" },
  { id: "BE_CSE", name: "B.E. Computer Science and Engineering", shortName: "CSE", icon: "Code" },
  { id: "BE_ECE", name: "B.E. Electronics and Communication Engineering", shortName: "ECE", icon: "Cpu" },
  { id: "BE_EEE", name: "B.E. Electrical and Electronics Engineering", shortName: "EEE", icon: "Zap" },
  { id: "BE_CIVIL", name: "B.E. Civil Engineering", shortName: "CIVIL", icon: "Building" },
  { id: "BTECH_IT", name: "B.Tech Information Technology", shortName: "IT", icon: "Globe" },
  { id: "BTECH_AIDS", name: "B.Tech Artificial Intelligence and Data Science", shortName: "AI & DS", icon: "Brain" }
];

export const SEMESTERS = [
  { number: 1, label: "Semester I", roman: "I" },
  { number: 2, label: "Semester II", roman: "II" },
  { number: 3, label: "Semester III", roman: "III" },
  { number: 4, label: "Semester IV", roman: "IV" },
  { number: 5, label: "Semester V", roman: "V" },
  { number: 6, label: "Semester VI", roman: "VI" },
  { number: 7, label: "Semester VII", roman: "VII" },
  { number: 8, label: "Semester VIII", roman: "VIII" }
];
