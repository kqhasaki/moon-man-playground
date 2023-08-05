import { createMakeAndWithStyles } from "tss-react";

import { Theme } from "../common/theme";

const breakpoints = {
  sm: "@media screen and (max-width:500px)",
  md: "@media screen and (max-width:1000px)",
  lg: "@media screen and (max-width:1440px)",
  xl: "@media screen and (min-width:1440px)",
};

export function useTheme(): Theme {
  return {
    breakpoints,
    palette: {
      background: {
        paper: "rgb(60, 62, 67)",
        primary: "rgba(40, 43, 50)",
        secondary: "rgba(40, 40, 40)",
      },
      divider: "rgba(100, 100, 100)",
      text: {
        primary: "rgba(245, 245, 245)",
        secondary: "rgba(157, 157, 158)",
        highlight: "rgba(240, 240, 24)",
      },
    },
  };
}

export const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});
