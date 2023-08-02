import { ReactElement, ReactNode } from "react";
import { GlobalStyles } from "tss-react";

import { useTheme } from "./theme";

export function RickAndMortyThemeProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const theme = useTheme();

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            boxSizing: "border-box",
            height: "100%",
            width: "100%",

            // https://github.com/necolas/normalize.css/blob/master/normalize.css#L12
            lineHeight: 1.15,
          },
          "*, *:before, *:after": {
            margin: 0,
            padding: 0,
            boxSizing: "inherit",
            listStyle: "none",
          },
          body: {
            background: theme.palette.background.default,
            color: theme.palette.text.default,

            // Prevent scroll "bouncing" since the app workspace is not scrollable. Allows individual
            // scrollable elements to be scrolled without the whole page moving (even if they don't
            // preventDefault on scroll events).
            overscrollBehavior: "none",
          },
        }}
      />
      {children}
    </>
  );
}
