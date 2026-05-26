import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "theme";

const getSystemTheme = () => {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = () => {
  if (typeof document !== "undefined") {
    const currentTheme = document.documentElement?.dataset?.theme;

    if (currentTheme === "light" || currentTheme === "dark") {
      return currentTheme;
    }
  }

  return "light";
};

const getDocumentTheme = () => {
  if (typeof document === "undefined") {
    return null;
  }

  const currentTheme = document.documentElement?.dataset?.theme;

  return currentTheme === "light" || currentTheme === "dark"
    ? currentTheme
    : null;
};

const applyTheme = (theme) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const body = document.body;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  if (body) {
    body.dataset.theme = theme;
    body.style.colorScheme = theme;
  }
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const hasStoredPreference = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    let initialTheme = getInitialTheme();

    if (stored === "light" || stored === "dark") {
      initialTheme = stored;
      hasStoredPreference.current = true;
    } else {
      initialTheme = getDocumentTheme() || getSystemTheme();
    }

    setTheme(initialTheme);
    applyTheme(initialTheme);

    if (typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      if (hasStoredPreference.current) {
        return;
      }

      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleChange);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    hasStoredPreference.current = true;
    setTheme(nextTheme);
    applyTheme(nextTheme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    }
  };

  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const icon = theme === "dark" ? "🌙" : "☀️";
  const text = theme === "dark" ? "Dark mode" : "Light mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={theme === "dark"}
    >
      <span aria-hidden="true" className="theme-toggle__icon">
        {icon}
      </span>
      <span className="theme-toggle__text">{text}</span>
      <style jsx>{`
        .theme-toggle {
          align-items: center;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 999px;
          color: inherit;
          cursor: pointer;
          display: inline-flex;
          font: inherit;
          gap: 0.4em;
          padding: 0.35em 0.9em;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
          white-space: nowrap;
          margin: 1em 1em 0em 0em;
        }

        .theme-toggle:hover,
        .theme-toggle:focus-visible {
          background: var(--surface-hover-color);
          border-color: var(--focus-outline);
        }

        .theme-toggle:focus-visible {
          outline: 2px solid var(--focus-outline);
          outline-offset: 2px;
        }

        .theme-toggle__icon {
          font-size: 1rem;
          line-height: 1;
        }

        .theme-toggle__text {
          font-size: 0.95rem;
          display: none;
        }

        @media only screen and (max-width: 575px) {
          .theme-toggle__text {
            display: none;
          }

          .theme-toggle {
            padding: 0.35em 0.65em;
          }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
