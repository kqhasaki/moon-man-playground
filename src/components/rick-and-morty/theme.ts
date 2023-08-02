import { createMakeAndWithStyles } from "tss-react";

export function useTheme() {
  return {
    palette: {
      background: {
        paper: "rgb(60, 62, 67)",
        default: "rgba(40, 43, 50)",
      },
      divider: "rgba(100, 100, 100)",
      text: {
        default: "rgba(245, 245, 245)",
        secondary: "rgba(157, 157, 158)",
      },
    },
  };
}

export const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});
