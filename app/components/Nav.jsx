"use client";
import React, { useState, useEffect } from "react";
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
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { RsetDarkMode, selectDarkMode } from "../slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import { navData } from "../helpers/index";
import { useRouter } from "next/navigation";
import us from "../assets/us.jpg";
import iran from "../assets/iran.jpg";
import Image from "next/image";
import { lightSelect, darkSelect } from "../helpers/index";
import NavDrawer from "./NavDrawer";
import { useTranslations } from "next-intl";

const Nav = ({ params }) => {
  const t = useTranslations("Nav");
  const dispatch = useDispatch();

  const [activeLink, setActiveLink] = useState("/");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

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

  return (
    <div className="bg-transparent py-2 max-w-[1920px] w-[100%] border-b border-gray-700 mt-3">
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
          <div className="hidden lg:block mt-2">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
              {navData.map((item, idx) => {
                return (
                  <li>
                    <Link
                      href={item.href}
                      className={`flex items-center ${
                        activeLink === item.href
                          ? "text-[#ff0000]"
                          : "dark:text-white text-black"
                      } hover:text-[#ff0000] dark:hover:text-[#ff0000] text-sm`}
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
              className="hidden lg:inline-block text-white border border-gray-500 hover:border-red-600 hover:bg-transparent px-4 rounded-lg py-1.5"
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
                {theme === "dark" ? (
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
            <FormControl id="locale" className="hidden lg:inline-block">
              <InputLabel
                id="demo-simple-select-label"
                className={`text-black dark:text-white ${
                  isSelectFocused || selectedValue ? "mt-0" : "mt-[-7px]"
                } flex items-center`}
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
                onFocus={() => setIsSelectFocused(true)}
                onBlur={() => setIsSelectFocused(false)}
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }}
                value={selectedValue}
                label="Age"
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "blue",
                    },
                  },
                }}
                sx={selectStyle}
                // onChange={handleChange}
              >
                <MenuItem value={10}>
                  <div className="flex items-center">
                    <span className="text-[12px] text-black dark:text-white">
                      {" "}
                      IR -{" "}
                    </span>
                    <span className="ms-2">
                      <Image src={iran} alt="IR Flag" width={20} height={20} />
                    </span>{" "}
                  </div>
                </MenuItem>
                <MenuItem value={20}>
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

            {/* the drwer */}
            <div id="drwer" className="col-span-5 lg:col-span-0">
              <div className="bg-transparent lg:hidden flex justify-between w-[95vw]">
                <Link
                  href="/"
                  className="text-center ms-10 mr-4 cursor-pointer py-1.5 dark:text-white text-black"
                >
                  Shayan_Gstp
                </Link>
                <IconButton
                  className="dark:text-white text-black me-5"
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
