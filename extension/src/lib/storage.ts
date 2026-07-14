import { AnalysisResult, ScanProgress } from "./types";

const ANALYSIS_KEY = "fc_analysis_result";
const PROGRESS_KEY = "fc_scan_progress";

// Helper check to determine if running in a Chrome Extension environment
const isChromeExtension = typeof chrome !== "undefined" && typeof chrome.storage !== "undefined";

export const storage = {
  getAnalysisResult: async (): Promise<AnalysisResult | null> => {
    if (isChromeExtension) {
      const data = await chrome.storage.local.get(ANALYSIS_KEY);
      return data[ANALYSIS_KEY] || null;
    } else {
      const data = localStorage.getItem(ANALYSIS_KEY);
      return data ? JSON.parse(data) : null;
    }
  },

  saveAnalysisResult: async (result: AnalysisResult): Promise<void> => {
    if (isChromeExtension) {
      await chrome.storage.local.set({ [ANALYSIS_KEY]: result });
    } else {
      localStorage.setItem(ANALYSIS_KEY, JSON.stringify(result));
    }
  },

  clearAnalysisResult: async (): Promise<void> => {
    if (isChromeExtension) {
      await chrome.storage.local.remove(ANALYSIS_KEY);
    } else {
      localStorage.removeItem(ANALYSIS_KEY);
    }
  },

  getScanProgress: async (): Promise<ScanProgress | null> => {
    if (isChromeExtension) {
      const data = await chrome.storage.local.get(PROGRESS_KEY);
      return data[PROGRESS_KEY] || null;
    } else {
      const data = localStorage.getItem(PROGRESS_KEY);
      return data ? JSON.parse(data) : null;
    }
  },

  saveScanProgress: async (progress: ScanProgress): Promise<void> => {
    if (isChromeExtension) {
      await chrome.storage.local.set({ [PROGRESS_KEY]: progress });
    } else {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  },

  clearScanProgress: async (): Promise<void> => {
    if (isChromeExtension) {
      await chrome.storage.local.remove(PROGRESS_KEY);
    } else {
      localStorage.removeItem(PROGRESS_KEY);
    }
  },
};
