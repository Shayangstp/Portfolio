import {
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import us from "../assets/us.jpg";
import iran from "../assets/iran.jpg";
import LightModeIcon from "@mui/icons-material/LightMode";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { lightSelect, darkSelect } from "../helpers/index";
import { RsetDarkMode, selectDarkMode } from "../slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { navData } from "../helpers/index";
import Link from "next/link";

const NavDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const dispatch = useDispatch();
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const darkMode = useSelector(selectDarkMode);
  const selectStyle = darkMode === "dark" ? darkSelect : lightSelect;

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <div className="dark:bg-[#2a2f36] bg-gray-200 h-[100%] ">
        <header className="text-white p-4 mt-3">
          <div className="flex justify-between">
            <h3 className="dark:text-white text-black">Menu</h3>
            <div className="flex">
              <div
                variant="text"
                size="middle"
                id="language-container"
                className=" dark:text-white text-black  hover:text-red-500 dark:hover:text-red-500 rounded-lg"
              >
                {/* <span className="text-[12px]"> */}
                {/* <GTranslateIcon /> */}
                <FormControl id="language">
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
                      width: "60px", // Change the background color here
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
                          backgroundColor: "gray", // Change the background color here
                        },
                      },
                    }}
                    sx={selectStyle}
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>
                      <div className="flex items-center">
                        <span className="text-[12px] text-black dark:text-white">
                          IR
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem value={20}>
                      <div className="flex items-center">
                        <span className="text-black dark:text-white text-[12px]">
                          US
                        </span>
                      </div>
                    </MenuItem>
                  </Select>
                </FormControl>
                {/* </span> */}
              </div>
              <div
                variant="text"
                size="small"
                id="darkMode-container"
                className=" dark:text-white text-black  hover:text-red-500 dark:hover:text-red-500 px-3 mt-1 rounded-lg cursor-pointer"
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
                  {theme === "dark" ? <LightModeIcon /> : <Brightness2Icon />}
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
  );
};

export default NavDrawer;