import React from "react";
import { TextField, Button, createTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import { useTheme } from "next-themes";
import { selectDarkMode } from "../slices/mainSlices";
import { useSelector } from "react-redux";
import { useTranslations, useLocale } from "next-intl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const inputDark = {
  "& label.Mui-focused": {
    color: "#914343",
  },
  "& label": {
    fontSize: "13px",
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#914343",
    },
    // "& input[type=number]": {
    //   "-moz-appearance": "textfield",
    //   "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    //     display: "none",
    //     "-webkit-appearance": "none",
    //     margin: 0,
    //   },
    //   "&::placeholder": {
    //     color: "gray",
    //     fontStyle: "italic",
    //   },
    // },
  },
  "& input": {
    // Prevent browser from autofilling
    autoComplete: "off",
  },
};
const InputLight = {
  "& label.Mui-focused": {
    color: "#914343",
  },
  "& label": {
    fontSize: "13px",
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#914343",
    },
    // "& input[type=number]": {
    //   "-moz-appearance": "textfield",
    //   "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    //     display: "none",
    //     "-webkit-appearance": "none",
    //     margin: 0,
    //   },
    //   "&::placeholder": {
    //     color: "gray",
    //     fontStyle: "italic",
    //   },
    // },
  },
  "& input": {
    // Prevent browser from autofilling
    autoComplete: "off",
  },
};

const Contact = () => {
  const { theme } = useTheme();
  const darkMode = useSelector(selectDarkMode);
  const localeActive = useLocale();
  const t = useTranslations("contactMe");

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
    <div
      dir={localeActive === "fa" ? "rtl" : "ltr"}
      className="h-[90vh] relative max-w-[1440px] w-[100%] mt-16 md:mt-32 p-2"
    >
      <div
        id="header"
        className="text-[70px] rounded-2xl py-2 px-5  md:ms-10 ms-0"
      >
        <div className="flex items-center">
          <span>
            <MarkunreadOutlinedIcon className="me-2 text-[50px]" />
          </span>
          <span
            className={`${
              localeActive === "fa" ? "text-[30px]" : "text-[50px]"
            } md:text-[70px]`}
          >
            {t("title1")}
          </span>
          <span
            className={`text-[20px] md:text-[30px] text-red-600 md:mt-7  ${
              localeActive === "fa" ? "mt-2" : "mt-5"
            }`}
          >
            {t("title2")}
          </span>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center mt-24 max-w-[100%]">
        <form
          id="contact"
          className="flex flex-col gap-5 md:w-[50%] p-5 md:p-0"
        >
          <div className="flex gap-4 border-red-900">
            <CacheProvider value={localeActive === "fa" ? cacheRtl : cacheLtr}>
              <TextField
                // error={formErrors.staffCodeMeli}
                label={t("name")}
                type="text"
                className="md:w-[50%] w-[100%]"
                sx={{ ...inputStyle, direction: "ltr" }}
                // InputLabelProps={{
                //   className: "rtl-label",
                // }}
                // value={staffCodeMeli}
                // onChange={(e) => {
                //   //limit the input
                //   let inputValue = e.target.value;
                //   const maxLength = 10;
                //   if (inputValue.length > maxLength) {
                //     inputValue = inputValue.slice(0, maxLength);
                //   }
                //   dispatch(RsetStaffCodeMeli(inputValue));
                // }}
              />
              {/* make email validation */}
              <TextField
                // error={formErrors.staffCodeMeli}
                label={`${t("email")}`}
                type="text"
                className="md:w-[50%] w-[100%]"
                sx={inputStyle}
                // value={staffCodeMeli}
                // onChange={(e) => {
                //   //limit the input
                //   let inputValue = e.target.value;
                //   const maxLength = 10;
                //   if (inputValue.length > maxLength) {
                //     inputValue = inputValue.slice(0, maxLength);
                //   }
                //   dispatch(RsetStaffCodeMeli(inputValue));
                // }}
              />
            </CacheProvider>
          </div>
          <CacheProvider value={localeActive === "fa" ? cacheRtl : cacheLtr}>
            <TextField
              // error={formErrors.staffCodeMeli}
              label={`${t("subject")}`}
              type="text"
              sx={inputStyle}
              // value={staffCodeMeli}
              // onChange={(e) => {
              //   //limit the input
              //   let inputValue = e.target.value;
              //   const maxLength = 10;
              //   if (inputValue.length > maxLength) {
              //     inputValue = inputValue.slice(0, maxLength);
              //   }
              //   dispatch(RsetStaffCodeMeli(inputValue));
              // }}
            />
            <TextField
              // error={formErrors.staffCodeMeli}
              label={`${t("message")}`}
              type="text"
              // value={staffCodeMeli}
              multiline
              rows={4}
              sx={inputStyle}
              // onChange={(e) => {
              //   //limit the input
              //   let inputValue = e.target.value;
              //   const maxLength = 10;
              //   if (inputValue.length > maxLength) {
              //     inputValue = inputValue.slice(0, maxLength);
              //   }
              //   dispatch(RsetStaffCodeMeli(inputValue));
              // }}
            />
          </CacheProvider>
          <Button
            variant="outlined"
            className="rounded-xl py-2 border border-red-600 dark:text-white text-black hover:border-red-500"
          >
            {t("submitBtn")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
