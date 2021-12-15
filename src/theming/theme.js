import React from "react";
import { ThemeProvider } from "theming";

const theme = {
  color: "blue",
  background: "white",
  primary: {
    colorPrimary: "green",
    colorSecondary: "red",
    textPrimary: "#ccc",
    textSecondary: "coral",
  },
  border: {
    colorPrimary: "green",
    colorSecondary: "black",
    shadow: "#E8F9D2",
  },
};

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
