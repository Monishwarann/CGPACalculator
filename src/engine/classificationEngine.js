/**
 * Academic Classification Engine
 * 
 * Determines student academic performance class based on CGPA, backlog history,
 * and regulation classification rules.
 */

export function getAcademicClassification(cgpa, arrearsCount = 0, regulation) {
  if (!regulation || !regulation.classificationRules) {
    return {
      label: "Pending",
      description: "Insufficient data",
      color: "gray",
      disclaimer: "Classification requires valid CGPA and regulation criteria."
    };
  }

  const numCGPA = Number(cgpa) || 0;
  const numArrears = Number(arrearsCount) || 0;

  for (const rule of regulation.classificationRules) {
    if (numCGPA >= rule.minCGPA) {
      if (rule.maxArrears !== undefined && numArrears > rule.maxArrears) {
        // Fall to next tier if arrears limit exceeded for Distinction
        continue;
      }

      return {
        label: rule.label,
        description: rule.description,
        color: rule.color,
        disclaimer: "Classification is an estimate based on CGPA & active arrears; verify all additional eligibility conditions (e.g. attempt limits, duration of study) in official regulation gazette."
      };
    }
  }

  return {
    label: "Second Class / Re-appear",
    description: "Course requirements pending",
    color: "amber",
    disclaimer: "Classification is an estimate based on CGPA; verify official regulation."
  };
}
