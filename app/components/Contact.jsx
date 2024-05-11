import React from "react";
import { TextField, Button, createTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import { useTheme } from "next-themes";
import {
  RsetUserName,
  RsetUserEmail,
  RsetUserMessage,
  RsetUserSubject,
  selectDarkMode,
  selectUserEmail,
  selectUserMessage,
  selectUserName,
  selectUserSubject,
  handleContactReset,
  RsetLoading,
  selectLoading,
  selectFormErrors,
  RsetFormErrors,
} from "../slices/mainSlices";
import { useTranslations, useLocale } from "next-intl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { postContactEmail } from "../services/emailContact";
import { useSelector, useDispatch } from "react-redux";
import { errorMessage, successMessage } from "../utils/msg";
import { ButtonLoader } from "../utils/Loader";

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
  const dispatch = useDispatch();

  const { theme } = useTheme();
  const localeActive = useLocale();
  const t = useTranslations("contactMe");

  //select
  const darkMode = useSelector(selectDarkMode);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userSubject = useSelector(selectUserSubject);
  const userMessage = useSelector(selectUserMessage);
  const loading = useSelector(selectLoading);
  const formErrors = useSelector(selectFormErrors);

  //validation
  const userNameIsValid = userName !== "";
  const userEmailIsValid = userEmail !== "";
  const userEmailFormatIsValid = /\S+@\S+\.com$/.test(userEmail);

  const contactFormIsValid =
    userNameIsValid && userEmailIsValid && userEmailFormatIsValid;

  const validation = () => {
    var errors = {};

    if (!userNameIsValid) {
      errors.userName = true;
    }
    if (!userEmailIsValid) {
      errors.userEmail = true;
    }

    return errors;
  };

  console.log(formErrors.userName);

  const inputStyle = darkMode === "dark" ? inputDark : InputLight;

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const cacheLtr = createCache({
    key: "muiltr",
    stylisPlugins: [prefixer],
  });

  const handelContactEmail = async (e) => {
    e.preventDefault();

    if (userEmailIsValid && !userEmailFormatIsValid) {
      errorMessage(t("contactEmailFormat"));
    }

    if (contactFormIsValid) {
      dispatch(RsetLoading(true));

      const values = {
        name: userName,
        email: userEmail,
        subject: userSubject,
        message: userMessage,
      };
      console.log(values);

      const postContactEmailRes = await postContactEmail(values);
      console.log(postContactEmailRes);

      if (postContactEmailRes.data.code === 200) {
        dispatch(RsetLoading(false));
        successMessage(t("contactSuccessMessage"));
        dispatch(handleContactReset());
      } else {
        dispatch(RsetLoading(false));
        errorMessage(t("contactErrorMessage"));
      }
    } else {
      dispatch(
        RsetFormErrors(
          validation({
            userEmail,
            userName,
          })
        )
      );
    }
  };

  return (
    <div
      id="email"
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
                error={userNameIsValid ? false : formErrors.userEmail}
                type="text"
                className="md:w-[50%] w-[100%]"
                sx={{ ...inputStyle, direction: "ltr" }}
                // InputLabelProps={{
                //   className: "rtl-label",
                // }}
                value={userName}
                onChange={(e) => {
                  dispatch(RsetUserName(e.target.value));
                }}
              />
              {/* make email validation */}
              <TextField
                error={userEmailIsValid ? false : formErrors.userEmail}
                label={`${t("email")}`}
                type="text"
                className="md:w-[50%] w-[100%]"
                sx={inputStyle}
                value={userEmail}
                onChange={(e) => {
                  dispatch(RsetUserEmail(e.target.value));
                }}
              />
            </CacheProvider>
          </div>
          <CacheProvider value={localeActive === "fa" ? cacheRtl : cacheLtr}>
            <TextField
              // error={formErrors.staffCodeMeli}
              label={`${t("subject")}`}
              type="text"
              sx={inputStyle}
              value={userSubject}
              onChange={(e) => {
                dispatch(RsetUserSubject(e.target.value));
              }}
            />
            <TextField
              // error={formErrors.staffCodeMeli}
              label={`${t("message")}`}
              type="text"
              value={userMessage}
              multiline
              rows={4}
              sx={inputStyle}
              onChange={(e) => {
                dispatch(RsetUserMessage(e.target.value));
              }}
            />
          </CacheProvider>
          <Button
            variant="outlined"
            className="rounded-xl py-2 border border-red-600 dark:text-white text-black hover:border-red-500"
            onClick={handelContactEmail}
          >
            {loading === false ? (
              t("submitBtn")
            ) : (
              <ButtonLoader height={25} width={50} />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
