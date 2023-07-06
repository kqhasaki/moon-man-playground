import { createMakeAndWithStyles } from "tss-react";

export function useTheme() {
  return {
    palette: {
      background: {
        paper: "rgb(37, 36, 32)",
        default: "rgba(30, 28, 22)",
      },
      text: {
        default: "rgba(245, 245, 245)",
        secondary: "rgba(187, 187, 188)",
        gold: "rgba(180, 136, 82)",
      },
      divider: "rgba(119, 102, 68)",
    },
  };
}

export const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});
