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
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { RsetDarkMode, selectDarkMode } from "../slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import { navData } from "../helpers/index";
import { useRouter } from "next/navigation";

const Nav = () => {
  const route = useRouter();
  const dispatch = useDispatch();

  const [activeLink, setActiveLink] = useState("/");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //select
  const darkMode = useSelector(selectDarkMode);
  //darkmode
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();

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
                      {item.title}
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
            <Button
              variant="outlined"
              size="small"
              className="hidden lg:inline-block text-white border border-gray-500 hover:border-red-600 hover:bg-transparent px-4 rounded-lg py-1.5"
            >
              <span className="text-[12px] dark:text-white text-black">
                <GTranslateIcon fontSize="small" />
              </span>
            </Button>
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
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
              <div className="dark:bg-[#2a2f36] bg-gray-200 h-[100%] ">
                <header className="text-white p-4 mt-3">
                  <div className="flex justify-between">
                    <h3 className="dark:text-white text-black">Menu</h3>
                    <div className="flex gap-1">
                      <div
                        variant="text"
                        size="middle"
                        className=" dark:text-white text-black  hover:text-red-500 dark:hover:text-red-500 px-4 rounded-lg cursor-pointer"
                      >
                        <span className="text-[12px]">
                          <GTranslateIcon />
                        </span>
                      </div>
                      <div
                        variant="text"
                        size="small"
                        className=" dark:text-white text-black  hover:text-red-500 dark:hover:text-red-500 px-4 rounded-lg cursor-pointer"
                        onClick={() => {
                          if (resolvedTheme === "dark") {
                            setTheme("light");
                          } else if (resolvedTheme === "light") {
                            setTheme("dark");
                          }

                          dispatch(RsetDarkMode(!darkMode));
                        }}
                      >
                        <span className="text-[12px]">
                          {theme === "dark" ? (
                            <LightModeIcon />
                          ) : (
                            <Brightness2Icon />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border dark:border-white border-black w-100 mt-4"></div>
                </header>
                <List className="w-[300px] flex flex-col text-white">
                  {navData.map((item, idx) => {
                    return (
                      <ListItem
                        button
                        onClick={toggleDrawer}
                        className="hover:bg-red-900 dark:text-white text-black hover:text-white"
                      >
                        <Link href={item.href}>
                          <ListItemText primary={item.title} />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
