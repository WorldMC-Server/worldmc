"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Sun className="swap-off size-5" />
      <Moon className="swap-on size-5" />
    </label>
  );
};

export default ThemeToggle;
