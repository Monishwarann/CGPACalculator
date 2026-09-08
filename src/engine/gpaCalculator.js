/**
 * Regulation-Aware GPA Calculation Engine
 * 
 * Formula: GPA = Σ(Credit × Grade Point) / Σ(Credits of registered courses)
 * Filters courses based on course inclusion flags and regulation grade rules.
 */

export function calculateGPA(courses = [], regulation) {
  if (!courses || courses.length === 0 || !regulation) {
    return {
      gpa: 0,
      gpaFormatted: "0.00",
      totalCreditsRegistered: 0,
      totalCreditsEarned: 0,
      totalGradePoints: 0,
      passedCoursesCount: 0,
      failedCoursesCount: 0,
      withdrawnCoursesCount: 0,
      breakdown: []
    };
  }

  const { gradeScale } = regulation;
  let totalCreditsForGPA = 0;
  let totalGradePoints = 0;
  let totalCreditsEarned = 0;
  let passedCount = 0;
  let failedCount = 0;
  let withdrawnCount = 0;
  
  const breakdown = [];

  for (const course of courses) {
    const gradeKey = course.grade ? course.grade.trim().toUpperCase() : null;
    const gradeInfo = gradeKey ? gradeScale[gradeKey] : null;

    const credits = Number(course.credits) || 0;
    const isIncludedInGPA = course.includedInGPA !== false;
    const isIncludedInCGPA = course.includedInCGPA !== false;

    if (!gradeKey || !gradeInfo) {
      // Grade not selected or invalid grade
      breakdown.push({
        ...course,
        gradePoint: null,
        pointsEarned: 0,
        status: "Pending Grade",
        statusColor: "text-gray-400"
      });
      continue;
    }

    const gradePoint = gradeInfo.point;
    const pointsEarned = credits * gradePoint;

    // Check pass/fail/withdraw status
    if (gradeKey === "WD") {
      withdrawnCount++;
      breakdown.push({
        ...course,
        gradePoint,
        pointsEarned: 0,
        status: "Withdrawn",
        statusColor: "text-amber-400"
      });
      continue;
    }

    if (!gradeInfo.pass) {
      failedCount++;
    } else {
      passedCount++;
      if (course.isCreditBearing !== false) {
        totalCreditsEarned += credits;
      }
    }

    // Accumulate for GPA if course is flagged for GPA calculation and countInGPA rule applies
    if (isIncludedInGPA && gradeInfo.countInGPA !== false) {
      totalCreditsForGPA += credits;
      totalGradePoints += pointsEarned;
    }

    breakdown.push({
      ...course,
      gradePoint,
      pointsEarned,
      status: gradeInfo.pass ? "Pass" : "Re-appear",
      statusColor: gradeInfo.pass ? "text-emerald-400" : "text-rose-400"
    });
  }

  const rawGPA = totalCreditsForGPA > 0 ? totalGradePoints / totalCreditsForGPA : 0;

  return {
    gpa: rawGPA,
    gpaFormatted: rawGPA.toFixed(2),
    totalCreditsRegistered: totalCreditsForGPA,
    totalCreditsEarned,
    totalGradePoints,
    passedCoursesCount: passedCount,
    failedCoursesCount: failedCount,
    withdrawnCoursesCount: withdrawnCount,
    breakdown
  };
}
