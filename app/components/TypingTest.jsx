"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../helpers/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    animate="show"
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles, fontStyle }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`mt-[8px] md:text-[64px] text-[40px] text-black dark:text-white ${textStyles}`}
    style={fontStyle}
  >
    {title}
  </motion.h2>
);
