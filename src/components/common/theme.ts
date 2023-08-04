export type Theme = {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  palette: {
    background: {
      paper: string;
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      highlight: string;
    };
    divider: string;
  };
};
