"use client";
import { ThemeProvider } from "next-themes";

const ThemeProviderNextJs = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderNextJs;
