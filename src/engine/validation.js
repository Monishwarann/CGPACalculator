/**
 * Academic Validation & Target CGPA Helper Engine
 */

export function validateCourseData(courses) {
  const errors = [];
  if (!Array.isArray(courses)) {
    return { valid: false, errors: ["Invalid course list structure."] };
  }

  courses.forEach((c, idx) => {
    if (c.credits < 0) {
      errors.push(`Course #${idx + 1} (${c.code || 'Unknown'}): Credits cannot be negative.`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Calculates required future average GPA for a target CGPA.
 * 
 * Target CGPA Math:
 * Target CGPA = (Current Points + Future Points) / (Completed Credits + Remaining Credits)
 * Target CGPA × (Completed Credits + Remaining Credits) = (Current CGPA × Completed Credits) + (Required GPA × Remaining Credits)
 * Required GPA = [Target CGPA × (Completed Credits + Remaining Credits) - (Current CGPA × Completed Credits)] / Remaining Credits
 */
export function calculateTargetGPA({ currentCGPA, completedCredits, remainingCredits, targetCGPA, maxGradePoint = 10 }) {
  const curCGPA = Number(currentCGPA) || 0;
  const compCredits = Number(completedCredits) || 0;
  const remCredits = Number(remainingCredits) || 0;
  const tarCGPA = Number(targetCGPA) || 0;

  if (remCredits <= 0) {
    return {
      requiredGPA: 0,
      requiredGPAFormatted: "0.00",
      feasibility: "Invalid",
      message: "Remaining credits must be greater than 0."
    };
  }

  const totalCredits = compCredits + remCredits;
  const currentPoints = curCGPA * compCredits;
  const targetTotalPoints = tarCGPA * totalCredits;
  const requiredFuturePoints = targetTotalPoints - currentPoints;
  const requiredGPA = requiredFuturePoints / remCredits;

  let feasibility = "Achievable";
  let message = "This target CGPA is mathematically achievable within remaining credits!";
  let badgeColor = "emerald";

  if (requiredGPA > maxGradePoint) {
    feasibility = "Mathematically Impossible";
    message = `Required GPA (${requiredGPA.toFixed(2)}) exceeds maximum possible grade point (${maxGradePoint}.00).`;
    badgeColor = "rose";
  } else if (requiredGPA > 9.0) {
    feasibility = "Very Difficult";
    message = `Requires an outstanding average GPA of ${requiredGPA.toFixed(2)} across all remaining courses.`;
    badgeColor = "amber";
  } else if (requiredGPA < 5.0 && requiredGPA > 0) {
    feasibility = "Easily Achievable";
    message = `Requires a moderate average GPA of ${requiredGPA.toFixed(2)}.`;
    badgeColor = "emerald";
  } else if (requiredGPA <= 0) {
    feasibility = "Already Achieved";
    message = "Your current CGPA already satisfies or exceeds this target!";
    badgeColor = "blue";
  }

  return {
    requiredGPA: Math.max(0, requiredGPA),
    requiredGPAFormatted: Math.max(0, requiredGPA).toFixed(2),
    feasibility,
    message,
    badgeColor
  };
}
