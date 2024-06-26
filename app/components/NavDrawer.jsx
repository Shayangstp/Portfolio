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
import React, { useState, useTransition } from "react";
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
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const NavDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const dispatch = useDispatch();
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const t = useTranslations("Nav");
  const localeActive = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const darkMode = useSelector(selectDarkMode);
  const selectStyle = darkMode === "dark" ? darkSelect : lightSelect;

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();

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
    <div>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="dark:bg-[#2a2f36] bg-gray-200 h-[100%]">
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
          <div dir={localeActive === "fa" ? "rtl" : "ltr"}>
            <List className="w-[300px] flex flex-col text-white">
              {navData.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    button
                    onClick={() => {
                      toggleDrawer();
                      router.push(item.href);
                    }}
                    className="hover:bg-red-900 dark:text-white text-black hover:text-white px-4 py-4 cursor-pointer"
                  >
                    <div key={idx}>
                      <ListItemText key={idx} primary={t(item.titleKey)} />
                    </div>
                  </div>
                );
              })}
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
