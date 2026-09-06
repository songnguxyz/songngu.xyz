import { createContext } from "react";

// Tách riêng khỏi provider để file provider chỉ export component
// (rule react-refresh/only-export-components).
export const LanguageContext = createContext(null);
