"use client";
import { ThemeProvider } from "next-themes";

const ThemeProviderNextJs = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderNextJs;
