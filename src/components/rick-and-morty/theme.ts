import { createMakeAndWithStyles } from "tss-react";

export function useTheme() {
  return {
    palette: {
      border: "#ddd",
      background: {
        paper: "rgb(60, 62, 67)",
        default: "rgba(40, 43, 50)",
      },
      text: {
        default: "#eee",
      },
    },
  };
}

export const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});
