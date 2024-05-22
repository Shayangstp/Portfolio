"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { selectDarkMode } from "../slices/mainSlices";
import { inputDark, InputLight } from "../helpers";
import { useSelector } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { useLocale, useTranslations } from "next-intl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const SearchBar = () => {
  const t = useTranslations("projectPage");
  const localeActive = useLocale();
  const darkMode = useSelector(selectDarkMode);
  const inputStyle = darkMode === "dark" ? inputDark : InputLight;

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const cacheLtr = createCache({
    key: "muiltr",
    stylisPlugins: [prefixer],
  });

  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <CacheProvider value={localeActive === "fa" ? cacheRtl : cacheLtr}>
          <TextField
            id="outlined-search"
            label={t("searchFeild")}
            type="search"
            className="dark:bg-gray-900 bg-gray-200 w-[50%] rounded-xl"
            sx={{ ...inputStyle, direction: "ltr" }}
          />
        </CacheProvider>
      </div>
    </div>
  );
};

export default SearchBar;
