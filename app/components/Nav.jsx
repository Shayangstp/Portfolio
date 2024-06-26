"use client";
import React, { useState, useEffect, useTransition } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Button } from "@material-tailwind/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { RsetDarkMode, selectDarkMode } from "../slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import { navData } from "../helpers/index";
import { useRouter, usePathname } from "next/navigation";
import us from "../assets/us.jpg";
import iran from "../assets/iran.jpg";
import Image from "next/image";
import { lightSelect, darkSelect } from "../helpers/index";
import NavDrawer from "./NavDrawer";
import { useLocale, useTranslations } from "next-intl";
import NavMenu from "./NavMenu";

const Nav = () => {
  const t = useTranslations("Nav");
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //select
  const darkMode = useSelector(selectDarkMode);
  const selectStyle = darkMode === "dark" ? darkSelect : lightSelect;
  //darkmode
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    dispatch(RsetDarkMode(theme));
  }, [theme]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleLocaleSelect = (e) => {
    startTransition(() => {
      router.replace(
        `/${e.target.value}/${pathname.replace(/^\/(en|fa)/, "")}`
      );
    });
  };

  const dropdownStyle = {
    backgroundColor: theme === "dark" ? "#262626" : "white",
  };

  return (
    <div className="bg-transparent py-2 max-w-[1440px] w-[100%] border-b border-gray-700 mt-3">
      <div className="grid grid-cols-5 text-blue-gray-900">
        <div id="logo" className="lg:col-span-1 flex justify-center p-2">
          <Link
            href="/"
            className="text-center ms-10 mr-4 cursor-pointer py-1.5 dark:text-white text-black lg:inline-block hidden"
          >
            Shayan_Gstp
          </Link>
        </div>
        <div id="navList" className="lg:col-span-3 flex justify-center p-2">
          <div
            dir={localeActive === "fa" ? "rtl" : "ltr"}
            className="hidden lg:block mt-2"
          >
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
              {navData.map((item, idx) => {
                //handle text active
                const pathWithoutLocale = pathname.replace(/^\/(en|fa)/, "");
                let isActive;

                if (pathWithoutLocale === "" && item.href === "/") {
                  isActive = true;
                } else {
                  isActive = pathWithoutLocale === item.href;
                }

                return (
                  <li key={idx}>
                    <Link
                      href={` /${localeActive}/${item.href}`}
                      className={`flex items-center ${
                        isActive
                          ? "dark:text-[#ff7070] text-blue-500"
                          : "dark:text-white text-black"
                      } hover:text-blue-500 dark:hover:text-[#ff0000] text-sm`}
                    >
                      {t(item.titleKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center gap-x-3 p-2">
            <Button
              variant="outlined"
              size="small"
              className="hidden lg:inline-block border-2 text-white border-black dark:border-white hover:border-gray-900 hover:bg-transparent px-4 rounded-lg py-1.5"
              onClick={() => {
                if (resolvedTheme === "dark") {
                  setTheme("light");
                } else if (resolvedTheme === "light") {
                  setTheme("dark");
                }

                dispatch(RsetDarkMode(!darkMode));
              }}
            >
              <span className="text-[12px] dark:text-white text-black">
                {resolvedTheme === "dark" ? (
                  <LightModeIcon fontSize="small" />
                ) : (
                  <Brightness2Icon fontSize="small" />
                )}
              </span>
            </Button>
            {/* <Button
              variant="outlined"
              size="small"
              className="hidden lg:inline-block text-white border border-gray-500 hover:border-red-600 hover:bg-transparent px-4 rounded-lg py-1.5"
            > */}
            {/* <span className="text-[12px] dark:text-white text-black"> */}
            <div className="hidden lg:inline-block">
              <FormControl id="locale">
                <InputLabel
                  id="demo-simple-select-label"
                  className={`text-black dark:text-white flex items-center`}
                >
                  <GTranslateIcon fontSize="small" />
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{
                    width: "100px", // Change the background color here
                    height: "40px",
                  }}
                  // onFocus={() => setIsSelectFocused(true)}
                  // onBlur={() => setIsSelectFocused(false)}
                  onChange={(e) => {
                    handleLocaleSelect(e);
                    document.documentElement.lang = e.target.value;
                  }}
                  value={localeActive}
                  defaultValue={localeActive}
                  label="Age"
                  MenuProps={{
                    PaperProps: {
                      style: dropdownStyle,
                    },
                  }}
                  sx={selectStyle}
                  // onChange={handleChange}
                >
                  <MenuItem value={"fa"}>
                    <div className="flex items-center">
                      <span className="text-[12px] text-black dark:text-white">
                        {" "}
                        IR -{" "}
                      </span>
                      <span className="ms-2">
                        <Image
                          src={iran}
                          alt="IR Flag"
                          width={20}
                          height={20}
                        />
                      </span>{" "}
                    </div>
                  </MenuItem>
                  <MenuItem value={"en"}>
                    <div className="flex items-center">
                      <span className="text-black dark:text-white text-[12px]">
                        {" "}
                        US -{" "}
                      </span>
                      <span className="ms-1">
                        <Image src={us} alt="US Flag" width={20} />
                      </span>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* the drwer */}
            <div id="drwer" className="col-span-5 lg:col-span-0">
              <div className="bg-transparent lg:hidden flex justify-between w-[95vw]">
                <Link
                  href="/"
                  className="text-center ms-3 cursor-pointer py-1.5 dark:text-white text-black"
                >
                  Shayan_Gstp
                </Link>
                <IconButton
                  className="dark:text-white text-black me-3 relative"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <Menu />
                </IconButton>
              </div>
            </div>
            {/* drawer */}
            <NavDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
