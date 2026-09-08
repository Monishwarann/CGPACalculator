/**
 * LocalStorage Service
 * Ensures 100% student privacy by keeping all academic records strictly local in browser.
 */

const STORAGE_KEY = "MSEC_CGPA_CALCULATOR_STATE_V1";

export function loadAcademicState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load local academic state:", err);
    return null;
  }
}

export function saveAcademicState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save local academic state:", err);
  }
}

export function clearAcademicState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("Failed to clear local academic state:", err);
  }
}
