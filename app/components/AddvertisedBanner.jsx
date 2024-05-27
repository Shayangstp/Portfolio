import React from "react";
import { useTranslations, useLocale } from "next-intl";

const AddvertisedBanner = () => {
  const localeActive = useLocale();

  return (
    <section
      dir="ltr"
      className="relative max-w-[1440px] w-[100vw] py-3 border-t-2 border-b-2 dark:border-white border-black"
    >
      <div className=" flex max-w-[1440px]">
        {/* <ParallaxText baseVelocity={-2}>
          <span className="md:text-[65px] text-[45px]">Shayan-Gstp</span>
        </ParallaxText> */}
        <ParallaxText baseVelocity={-2}>
          <span className="dark:text-white text-black md:text-[70px] text-[40px] mt-1">
            Shayan-Gstp &nbsp; Shayan-Gstp
          </span>
        </ParallaxText>
        {/* <ParallaxText baseVelocity={-5}>
          <span className="md:text-[65px] text-[45px]">wolfi</span>
        </ParallaxText> */}
      </div>
      <div className="max-w-[1440px]">
        <ParallaxText baseVelocity={2}>
          <span className="dark:text-red-500 text-blue-500 md:text-[50px] text-[30px] mt-1">
            * FrontEnd * Backend * FullStack
          </span>
        </ParallaxText>
      </div>
    </section>
  );
};

export default AddvertisedBanner;

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
