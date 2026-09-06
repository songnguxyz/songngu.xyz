import { useEffect } from "react";
import { readStored, usePersistedState } from "./usePersistedState";

const STORAGE_KEY = "darkMode";

function getInitialDarkMode() {
  const saved = readStored(STORAGE_KEY);
  if (saved === "true") return true;
  if (saved === "false") return false;
  // Chưa từng chọn thì theo thiết lập hệ điều hành.
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function useDarkMode() {
  const [darkMode, setDarkMode] = usePersistedState(
    STORAGE_KEY,
    getInitialDarkMode,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode: () => setDarkMode((current) => !current),
  };
}
