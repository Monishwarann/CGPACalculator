/**
 * Regulation-Specific Percentage Conversion Engine
 */

export function calculatePercentage(cgpa, regulation) {
  if (!regulation || cgpa === undefined || cgpa === null || isNaN(cgpa)) {
    return {
      percentage: 0,
      percentageFormatted: "0.00%",
      formulaText: "N/A"
    };
  }

  const numCGPA = Number(cgpa);
  if (numCGPA <= 0) {
    return {
      percentage: 0,
      percentageFormatted: "0.00%",
      formulaText: regulation.percentageFormulaText || "Percentage = CGPA × 10"
    };
  }

  let percentage = 0;
  if (typeof regulation.percentageFormula === "function") {
    percentage = regulation.percentageFormula(numCGPA);
  } else {
    percentage = numCGPA * 10;
  }

  return {
    percentage,
    percentageFormatted: `${percentage.toFixed(2)}%`,
    formulaText: regulation.percentageFormulaText || "Percentage = CGPA × 10"
  };
}
