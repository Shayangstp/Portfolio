"use client";
import React, { use, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RsetDarkMode, selectDarkMode } from "./slices/mainSlices";
import { useDispatch, useSelector } from "react-redux";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SklillsP2 from "./components/SklillsP2";
import { useLocale } from "next-intl";

const Home = () => {
  const dispatch = useDispatch();
  const localeActive = useLocale();
  console.log(localeActive);

  // can return cookies for dir
  return (
    <div className=" bg-white dark:bg-[#161616] flex justify-center relative ">
      <div className="bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center w-[100vw]">
        <Nav />
        <Hero />
        <SklillsP2 />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
