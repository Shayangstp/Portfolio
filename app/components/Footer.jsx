import React, { useState } from "react";
import Link from "next/link";
import { socials } from "../helpers/index";
import { TextField } from "@mui/material";
import { Button } from "@material-tailwind/react";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { navData } from "../helpers/index";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations, useLocale } from "next-intl";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { errorMessage, successMessage } from "../utils/msg";
import { postContactEmail } from "../services/emailContact";
import {
  selectDarkMode,
  RsetUserHireEmail,
  selectUserHireEmail,
  RsetFormErrors,
  selectFormErrors,
} from "../slices/mainSlices";
import { ButtonLoader, ButtonLoader2 } from "../utils/Loader";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import axios from "axios";

const textFeildDark = {
  "& input": {
    color: "white",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
};
const textFeildLight = {
  "& input": {
    color: "black",
  },
  "& label": {
    color: "black",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "black",
  },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
};

const Footer = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const [activeLink, setActiveLink] = useState("/");
  const [loading, setLoading] = useState(false);

  const t = useTranslations("footer");
  const localeActive = useLocale();

  const darkMode = useSelector(selectDarkMode);
  const userEmail = useSelector(selectUserHireEmail);
  const formErrors = useSelector(selectFormErrors);

  //validation
  const userEmailIsValid = userEmail !== "";
  const userEmailFormatIsValid = /\S+@\S+\.com$/.test(userEmail);

  const validation = () => {
    var errors = {};

    if (!userEmailIsValid) {
      errors.userEmail = true;
    }

    return errors;
  };

  const style = darkMode === "dark" ? textFeildDark : textFeildLight;

  const cacheLtr = createCache({
    key: "muiltr",
    stylisPlugins: [prefixer],
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const handelContactEmail = async (e) => {
    e.preventDefault();
    // if (userEmailIsValid && !userEmailFormatIsValid) {
    //   errorMessage(t("contactEmailFormat"));
    // }

    if (userEmailIsValid && userEmailFormatIsValid) {
      setLoading(true);
      const values = {
        name: "userHireMe",
        email: userEmail,
        subject: "hireMeSubject",
        message: "hireMeMessage",
      };
      const postContactEmailRes = await axios.post("/api/contactEmail", values);
      if (postContactEmailRes.data.code === 200) {
        setLoading(false);
        successMessage(t("contactSuccessMessage"));
        dispatch(RsetUserHireEmail(""));
        dispatch(RsetFormErrors(""));
      } else {
        setLoading(false);
        errorMessage(t("contactErrorMessage"));
      }
    } else {
      dispatch(
        RsetFormErrors(
          validation({
            userEmail,
          })
        )
      );
    }
  };

  return (
    <div
      dir={localeActive === "fa" ? "rtl" : "ltr"}
      className="w-[100vw] p-16 bg-gradient-to-b dark:from-[#161616] from-[#fff] dark:to-[#260b0b] to-blue-200 bg-opacity-80"
    >
      <div clas>
        <div
          id="ready_toGrow"
          className="flex flex-col justify-center items-center text-white"
        >
          <div className="dark:text-white text-black font-bold lg:text-[100px] md:text-[70px] text-[30px]">
            {t("ready")}
          </div>
          <p className="dark:text-white text-gray-700 text-center sm:text-start text-[9px] md:text-[12px] lg:text-[15px] mt-2">
            {t("readySub")}
          </p>
          <div className="flex gap-2 items-end mt-10">
            <CacheProvider value={localeActive === "fa" ? cacheRtl : cacheLtr}>
              <TextField
                error={userEmailIsValid ? false : formErrors.userEmail}
                id="standard-basic"
                value={userEmail}
                label={t("email")}
                variant="standard"
                className="mt-5 me-3"
                onChange={(e) => {
                  dispatch(RsetUserHireEmail(e.target.value));
                }}
                sx={style}
              />
            </CacheProvider>
            <Button
              size="small"
              className="dark:text-black text-white border-black px-3 py-3 rounded-xl dark:bg-white bg-gray-900 sm:text-[12px] text-[10px] hover:dark:bg-gray-200 hover:bg-gray-800"
              onClick={handelContactEmail}
            >
              <span>
                {loading === false ? (
                  t("hireMeBtn")
                ) : (
                  <div className="px-3">
                    <ButtonLoader2
                      height={20}
                      width={50}
                      color={theme === "dark" ? "black" : "white"}
                    />
                  </div>
                )}
              </span>
              <ArrowOutwardOutlinedIcon
                fontSize="small"
                className={`${localeActive === "fa" ? "rotate-[270deg]" : ""}`}
              />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 mt-28 mb-10">
          <div id="lable" className="lg:col-span-1 col-span-3 lg:text-end">
            <div className="dark:text-white text-black">Shayan_gstp</div>
          </div>
          <div id="navFooter" className="col-span-3 lg:inline-block hidden">
            <ul className="flex gap-5 justify-center ">
              {navData.map((item, idx) => {
                return (
                  <Link
                    href={item.href}
                    key={idx}
                    className={`flex items-center ${
                      activeLink === item.href
                        ? "text-[#ff0000]"
                        : "dark:text-white text-black"
                    } hover:text-[#ff0000] dark:hover:text-[#ff0000] text-sm`}
                    // onClick={() => handleLinkClick("#ContactUS")}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div id="social" className="lg:col-span-1 col-span-2">
            <div className="flex gap-2 md:gap-5 lg:justify-start justify-end">
              {socials.map((item, idx) => {
                return (
                  <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}
                    key={idx}
                    className="hover:text-blue-600 hover:dark:text-red-400 cursor-pointer dark:text-gray-300"
                  >
                    <a
                      href={`${item.href}`}
                      target={`${item.href === "#email" ? "" : "_blank"}`}
                    >
                      {item.icon}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center pt-10 me-5 md:text-[13px] text-[10px]">
          <p>Copyrights © 2024 Your Shayan_gstp. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
