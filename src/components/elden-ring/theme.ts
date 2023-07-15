import { useEffect, useMemo, useState } from "react";
import { createMakeAndWithStyles } from "tss-react";

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

const darkTheme = {
  palette: {
    background: {
      paper: "rgb(37, 36, 32)",
      primary: "rgb(40, 40, 36)",
      default: "rgba(30, 28, 22)",
      secondary: "rgba(50, 50, 50)",
    },
    text: {
      default: "rgba(245, 245, 245)",
      primary: "rgba(245, 245, 245)",
      secondary: "rgba(187, 187, 188)",
      gold: "rgba(180, 136, 82)",
    },
    divider: "rgba(119, 102, 68)",
  },
};

const brightTheme = {
  palette: {
    background: {
      paper: "rgba(255, 255, 255)",
      primary: "rgba(240, 240, 240)",
      default: "rgba(245, 245, 245)",
      secondary: "rgba(230, 230, 230)",
    },
    text: {
      default: "rgba(30, 30, 30)",
      primary: "rgba(30, 30, 30)",
      secondary: "rgba(45, 45, 45)",
      gold: "rgba(180, 136, 82)",
    },
    divider: "rgba(220, 220, 220)",
  },
};

export const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});
