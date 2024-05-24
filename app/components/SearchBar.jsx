"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { selectDarkMode } from "../slices/mainSlices";
import { inputDark, InputLight } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { useLocale, useTranslations } from "next-intl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { selectProjectSearch, RsetProjectSearch } from "../slices/mainSlices";

const SearchBar = () => {
  const dispatch = useDispatch();
  const t = useTranslations("projectPage");
  const localeActive = useLocale();
  const darkMode = useSelector(selectDarkMode);
  const projectSearch = useSelector(selectProjectSearch);
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
            className="bg-transparnet w-[50%] rounded-xl"
            sx={{ ...inputStyle, direction: "ltr" }}
            value={projectSearch}
            onChange={(e) => {
              dispatch(RsetProjectSearch(e.target.value));
            }}
          />
        </CacheProvider>
      </div>
    </div>
  );
};

export default SearchBar;
