"use client";

import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      suppressHydrationWarning
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
