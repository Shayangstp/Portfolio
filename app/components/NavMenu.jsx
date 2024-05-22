import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
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
import LightModeIcon from "@mui/icons-material/LightMode";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { lightSelect, darkSelect } from "../helpers/index";
import { RsetDarkMode, selectDarkMode } from "../slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const overlayVariants = {
  open: { opacity: 1, transition: { duration: 0.3 } },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

export default function NavMenu({ isDrawerOpen, setIsDrawerOpen }) {
  const dispatch = useDispatch();
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const t = useTranslations("Nav");
  const localeActive = useLocale();

  const darkMode = useSelector(selectDarkMode);
  const selectStyle = darkMode === "dark" ? darkSelect : lightSelect;

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div dir="rtl">
      <motion.nav
        initial={false}
        animate={isDrawerOpen ? "open" : "closed"}
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm ${
          isDrawerOpen && "z-40"
        }`}
        variants={overlayVariants}
      >
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isDrawerOpen ? "auto" : "none" }}
          className="border bg-gray-200 h-[100vh] w-[50%]"
        >
          <header dir="ltr" className="text-white p-4 mt-3">
            <div className="flex justify-between">
              <h3 className="dark:text-white text-black text-[20px]">Menu</h3>
              <div className="flex gap-2">
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
                <Button
                  size="small"
                  variant="outlined"
                  id="darkMode-container"
                  className=" dark:text-white border-black  text-black  hover:text-red-500 dark:hover:text-red-500   rounded-lg cursor-pointer"
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
                </Button>
              </div>
            </div>
            <div className="border dark:border-white border-black w-100 mt-4"></div>
          </header>
          <motion.li variants={itemVariants} className="text-white">
            Item 1{" "}
          </motion.li>
          <motion.li variants={itemVariants}>Item 2 </motion.li>
          <motion.li variants={itemVariants}>Item 3 </motion.li>
          <motion.li variants={itemVariants}>Item 4 </motion.li>
          <motion.li variants={itemVariants}>Item 5 </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
}
