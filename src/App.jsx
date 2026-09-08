import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AcademicSelector from "./components/AcademicSelector";
import CurriculumBadge from "./components/CurriculumBadge";
import CourseTable from "./components/CourseTable";
import ResultDashboard from "./components/ResultDashboard";
import CalculationBreakdown from "./components/CalculationBreakdown";
import SemesterHistory from "./components/SemesterHistory";
import PerformanceChart from "./components/PerformanceChart";
import WhatIfCalculator from "./components/WhatIfCalculator";
import TargetCGPACalculator from "./components/TargetCGPACalculator";
import AdminPanelModal from "./components/AdminPanelModal";
import Footer from "./components/Footer";

import { REGULATIONS, PROGRAMMES, SEMESTERS } from "./data/regulations";
import { getCurriculum } from "./data/curriculumData";
import { calculateGPA } from "./engine/gpaCalculator";
import { calculateCGPA } from "./engine/cgpaCalculator";
import { calculatePercentage } from "./engine/percentageCalculator";
import { getAcademicClassification } from "./engine/classificationEngine";
import { loadAcademicState, saveAcademicState, clearAcademicState } from "./services/storageService";
import { generatePDFReport, exportToCSV, generateTextSummary } from "./services/exportService";

export default function App() {
  // 1. Initial State Loading
  const savedState = loadAcademicState();

  const [isDarkMode, setIsDarkMode] = useState(savedState?.isDarkMode ?? true);
  const [selectedRegulationId, setSelectedRegulationId] = useState(savedState?.selectedRegulationId || "MSEC_R2024");
  const [selectedProgrammeId, setSelectedProgrammeId] = useState(savedState?.selectedProgrammeId || "BE_CSE");
  const [selectedSemesterNum, setSelectedSemesterNum] = useState(savedState?.selectedSemesterNum || 3);
  
  const [semesterHistory, setSemesterHistory] = useState(savedState?.semesterHistory || []);
  const [gradeStore, setGradeStore] = useState(savedState?.gradeStore || {}); // { "MSEC_R2024_BE_CSE_3_CS24311": "A+" }
  const [customCurriculums, setCustomCurriculums] = useState(savedState?.customCurriculums || {});

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState(null);
  const [notification, setNotification] = useState(null);

  // Active Context Objects
  const activeRegulation = REGULATIONS[selectedRegulationId] || REGULATIONS["MSEC_R2024"];
  const activeProgramme = PROGRAMMES.find((p) => p.id === selectedProgrammeId) || PROGRAMMES[0];
  const activeSemester = SEMESTERS.find((s) => s.number === selectedSemesterNum) || SEMESTERS[2];

  // 2. Curriculum Retrieval & Course Grade Binding
  const customKey = `${selectedRegulationId}_${selectedProgrammeId}_${selectedSemesterNum}`;
  const rawCurriculum = customCurriculums[customKey] || getCurriculum(selectedRegulationId, selectedProgrammeId, selectedSemesterNum);

  const currentCourses = rawCurriculum.courses.map((course) => {
    const courseGradeKey = `${customKey}_${course.code}`;
    return {
      ...course,
      grade: gradeStore[courseGradeKey] || ""
    };
  });

  // 3. Calculation Engines Execution
  const gpaResult = calculateGPA(currentCourses, activeRegulation);

  // Merge current active semester into history for overall CGPA calculation
  const historyMap = [...semesterHistory];
  const currentSemInHistoryIdx = historyMap.findIndex((s) => s.semesterNumber === selectedSemesterNum);
  
  if (gpaResult.totalCreditsRegistered > 0) {
    const currentSemRecord = {
      semesterNumber: selectedSemesterNum,
      semesterLabel: activeSemester.label,
      gpa: gpaResult.gpa,
      credits: gpaResult.totalCreditsRegistered,
      failedCount: gpaResult.failedCoursesCount
    };

    if (currentSemInHistoryIdx >= 0) {
      historyMap[currentSemInHistoryIdx] = currentSemRecord;
    } else {
      historyMap.push(currentSemRecord);
    }
  }

  const cgpaResult = calculateCGPA(historyMap, activeRegulation);
  const percentageResult = calculatePercentage(cgpaResult.cgpa, activeRegulation);
  const classificationResult = getAcademicClassification(cgpaResult.cgpa, cgpaResult.totalArrearsCount, activeRegulation);

  // 4. Persistence Effect
  useEffect(() => {
    saveAcademicState({
      isDarkMode,
      selectedRegulationId,
      selectedProgrammeId,
      selectedSemesterNum,
      semesterHistory,
      gradeStore,
      customCurriculums
    });
  }, [isDarkMode, selectedRegulationId, selectedProgrammeId, selectedSemesterNum, semesterHistory, gradeStore, customCurriculums]);

  // PWA Install Prompt Listener
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // 5. Event Handlers
  const handleGradeChange = (courseIdx, grade) => {
    const targetCourse = currentCourses[courseIdx];
    if (!targetCourse) return;

    const courseGradeKey = `${customKey}_${targetCourse.code}`;
    setGradeStore((prev) => ({
      ...prev,
      [courseGradeKey]: grade
    }));
  };

  const handleQuickFill = (grade) => {
    const newGrades = { ...gradeStore };
    currentCourses.forEach((c) => {
      const key = `${customKey}_${c.code}`;
      if (grade) {
        newGrades[key] = grade;
      } else {
        delete newGrades[key];
      }
    });
    setGradeStore(newGrades);
    showNotification(grade ? `Applied grade '${grade}' to all subjects!` : "Cleared all grades for current semester.");
  };

  const handleSaveSemesterResult = () => {
    if (gpaResult.totalCreditsRegistered === 0) {
      showNotification("Please select grades for current semester before saving.");
      return;
    }

    const newHistory = [...semesterHistory];
    const existingIdx = newHistory.findIndex((s) => s.semesterNumber === selectedSemesterNum);

    const record = {
      semesterNumber: selectedSemesterNum,
      semesterLabel: activeSemester.label,
      gpa: gpaResult.gpa,
      credits: gpaResult.totalCreditsRegistered,
      failedCount: gpaResult.failedCoursesCount
    };

    if (existingIdx >= 0) {
      newHistory[existingIdx] = record;
    } else {
      newHistory.push(record);
    }

    // Sort by semester number
    newHistory.sort((a, b) => a.semesterNumber - b.semesterNumber);

    setSemesterHistory(newHistory);
    showNotification(`Semester ${selectedSemesterNum} saved to CGPA history! (GPA: ${gpaResult.gpaFormatted})`);
  };

  const handleAddManualSemester = (manualRecord) => {
    const newHistory = [...semesterHistory];
    const existingIdx = newHistory.findIndex((s) => s.semesterNumber === manualRecord.semesterNumber);

    if (existingIdx >= 0) {
      newHistory[existingIdx] = manualRecord;
    } else {
      newHistory.push(manualRecord);
    }
    newHistory.sort((a, b) => a.semesterNumber - b.semesterNumber);
    setSemesterHistory(newHistory);
    showNotification(`Added Semester ${manualRecord.semesterNumber} to history!`);
  };

  const handleRemoveSemester = (idx) => {
    const newHistory = semesterHistory.filter((_, i) => i !== idx);
    setSemesterHistory(newHistory);
    showNotification("Removed semester record from history.");
  };

  const handleResetData = () => {
    if (window.confirm("Are you sure you want to clear all grade inputs and semester history?")) {
      clearAcademicState();
      setSemesterHistory([]);
      setGradeStore({});
      setCustomCurriculums({});
      showNotification("All academic data has been reset.");
    }
  };

  const handleExportPDF = () => {
    generatePDFReport({
      institution: activeRegulation,
      regulation: activeRegulation,
      programme: activeProgramme,
      semester: activeSemester,
      gpaResult,
      cgpaResult,
      percentageResult,
      classificationResult,
      courses: currentCourses
    });
    showNotification("Generating & downloading PDF Report...");
  };

  const handleExportCSV = () => {
    exportToCSV(gpaResult, activeProgramme, activeSemester);
    showNotification("Downloading CSV spreadsheet...");
  };

  const handleShareText = () => {
    const text = generateTextSummary({
      institution: activeRegulation,
      regulation: activeRegulation,
      programme: activeProgramme,
      semester: activeSemester,
      gpaResult,
      cgpaResult,
      percentageResult,
      classificationResult
    });

    navigator.clipboard.writeText(text);
    showNotification("Summary snippet copied to clipboard!");
  };

  const handleImportCustomCurriculum = (customDataset) => {
    setCustomCurriculums((prev) => ({
      ...prev,
      [customKey]: customDataset
    }));
    setIsAdminOpen(false);
    showNotification("Applied custom curriculum dataset to current semester!");
  };

  const handleInstallApp = () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.then(() => setDeferredInstallPrompt(null));
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${
      isDarkMode ? "bg-[#060912] text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium text-xs shadow-2xl shadow-indigo-500/50 animate-bounce">
          {notification}
        </div>
      )}

      {/* Top Header */}
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onResetData={handleResetData}
        onOpenAdmin={() => setIsAdminOpen(true)}
        deferredInstallPrompt={deferredInstallPrompt}
        onInstallApp={handleInstallApp}
      />

      {/* Hero Section */}
      <HeroSection isDarkMode={isDarkMode} activeRegulation={activeRegulation} />

      {/* Main Dashboard Workspace Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Step 1 - 3: Academic Selector */}
        <AcademicSelector
          isDarkMode={isDarkMode}
          selectedRegulationId={selectedRegulationId}
          setSelectedRegulationId={setSelectedRegulationId}
          selectedProgrammeId={selectedProgrammeId}
          setSelectedProgrammeId={setSelectedProgrammeId}
          selectedSemesterNum={selectedSemesterNum}
          setSelectedSemesterNum={setSelectedSemesterNum}
        />

        {/* Dataset Verification Banner */}
        <CurriculumBadge
          isDarkMode={isDarkMode}
          regulation={activeRegulation}
          programme={activeProgramme}
          semesterNum={selectedSemesterNum}
          curriculum={rawCurriculum}
        />

        {/* Step 4: Course Table & Auto Credit Display */}
        <CourseTable
          isDarkMode={isDarkMode}
          courses={currentCourses}
          regulation={activeRegulation}
          onGradeChange={handleGradeChange}
          onQuickFill={handleQuickFill}
        />

        {/* Step 5: Results Dashboard */}
        <ResultDashboard
          isDarkMode={isDarkMode}
          gpaResult={gpaResult}
          cgpaResult={cgpaResult}
          percentageResult={percentageResult}
          classificationResult={classificationResult}
          onSaveSemester={handleSaveSemesterResult}
          onExportPDF={handleExportPDF}
          onExportCSV={handleExportCSV}
          onShareText={handleShareText}
        />

        {/* Calculation Audit Breakdown */}
        <CalculationBreakdown
          isDarkMode={isDarkMode}
          gpaResult={gpaResult}
          regulation={activeRegulation}
        />

        {/* Semester History & CGPA Accumulator */}
        <SemesterHistory
          isDarkMode={isDarkMode}
          semesterHistory={semesterHistory}
          onSaveCurrentSemester={handleSaveSemesterResult}
          onAddManualSemester={handleAddManualSemester}
          onRemoveSemester={handleRemoveSemester}
          onClearAllHistory={() => setSemesterHistory([])}
        />

        {/* Performance Chart */}
        <PerformanceChart
          isDarkMode={isDarkMode}
          semesterHistory={semesterHistory}
          currentSemesterResult={gpaResult}
          currentSemesterNum={selectedSemesterNum}
        />

        {/* Dual Simulator Grid: What-If & Target CGPA */}
        <div className="grid grid-cols-1 gap-8">
          <WhatIfCalculator
            isDarkMode={isDarkMode}
            currentCourses={currentCourses}
            regulation={activeRegulation}
            semesterHistory={semesterHistory}
            currentSemNum={selectedSemesterNum}
          />

          <TargetCGPACalculator
            isDarkMode={isDarkMode}
            currentCGPAVal={cgpaResult.cgpaFormatted}
            currentCompletedCreditsVal={cgpaResult.totalCumulativeCredits}
            maxGradePoint={activeRegulation.maxGradePoint}
          />
        </div>

      </main>

      {/* Admin Panel Modal */}
      <AdminPanelModal
        isDarkMode={isDarkMode}
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currentCurriculum={rawCurriculum}
        activeRegulation={activeRegulation}
        activeProgramme={activeProgramme}
        activeSemesterNum={selectedSemesterNum}
        onImportCustomCurriculum={handleImportCustomCurriculum}
      />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
