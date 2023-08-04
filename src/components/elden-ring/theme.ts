import { useEffect, useMemo, useState } from "react";
import { createMakeAndWithStyles } from "tss-react";

import { Theme } from "../common/theme";

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDark(event.matches);
      });
  }, []);

  const theme = useMemo(() => {
    return isDark ? darkTheme : brightTheme;
  }, [isDark]);

  return theme;
}

const breakpoints = {
  sm: "@media (max-width:400px)",
  md: "@media (max-width:1000px)",
  lg: "@media (max-width:1440px)",
  xl: "@media (min-width:1440px)",
};

const darkTheme: Theme = {
  breakpoints,
  palette: {
    background: {
      paper: "rgb(37, 36, 32)",
      primary: "rgba(30, 28, 22)",
      secondary: "rgba(30, 30, 30)",
    },
    text: {
      primary: "rgba(245, 245, 245)",
      secondary: "rgba(187, 187, 188)",
      highlight: "rgba(180, 136, 82)",
    },
    divider: "rgba(119, 102, 68)",
  },
};

const brightTheme: Theme = {
  breakpoints,
  palette: {
    background: {
      paper: "rgba(255, 255, 255)",
      primary: "rgba(245, 245, 245)",
      secondary: "rgba(100, 100, 200)",
    },
    text: {
      primary: "rgba(30, 30, 30)",
      secondary: "rgba(45, 45, 45)",
      highlight: "rgba(180, 136, 82)",
    },
    divider: "rgba(220, 220, 220)",
  },
};

export const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});
