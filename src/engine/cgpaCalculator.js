/**
 * Credit-Weighted CGPA Calculation Engine
 * 
 * Correct Architecture:
 * CGPA = Σ(Semester GPA × Semester Included Credits) / Σ(Semester Included Credits)
 * Or Σ(Course Grade Points) / Σ(Course Credits)
 */

export function calculateCGPA(semesterResults = [], regulation) {
  if (!semesterResults || semesterResults.length === 0 || !regulation) {
    return {
      cgpa: 0,
      cgpaFormatted: "0.00",
      totalCumulativeCredits: 0,
      totalCumulativePoints: 0,
      totalArrearsCount: 0,
      semesterBreakdown: []
    };
  }

  let totalCumulativeCredits = 0;
  let totalCumulativePoints = 0;
  let totalArrears = 0;

  const semesterBreakdown = semesterResults.map((sem, index) => {
    const credits = Number(sem.credits) || 0;
    const gpa = Number(sem.gpa) || 0;
    const points = credits * gpa;
    const arrears = Number(sem.failedCount || sem.arrearsCount) || 0;

    totalCumulativeCredits += credits;
    totalCumulativePoints += points;
    totalArrears += arrears;

    return {
      semesterNumber: sem.semesterNumber || sem.semester || index + 1,
      semesterLabel: sem.semesterLabel || `Semester ${sem.semesterNumber || index + 1}`,
      gpa,
      credits,
      points,
      arrearsCount: arrears
    };
  });

  const rawCGPA = totalCumulativeCredits > 0 ? totalCumulativePoints / totalCumulativeCredits : 0;

  return {
    cgpa: rawCGPA,
    cgpaFormatted: rawCGPA.toFixed(2),
    totalCumulativeCredits,
    totalCumulativePoints,
    totalArrearsCount: totalArrears,
    semesterBreakdown
  };
}
