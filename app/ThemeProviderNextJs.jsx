"use client";

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "next-themes";

const ThemeProviderNextJs = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

ThemeProviderNextJs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProviderNextJs;
