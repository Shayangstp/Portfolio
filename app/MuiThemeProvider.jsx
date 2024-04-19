"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "iranSans, Arial, sans-serif", // Change the font family as desired
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
