import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const AnimatedText = ({ text }) => {
  const controls = text.split("").map(() => useAnimation());
  const delayBetweenLetters = 0.1;
  const wavePause = 0.4;

  useEffect(() => {
    let isCancelled = false;

    const animateWave = async () => {
      while (!isCancelled) {
        for (let i = 0; i < controls.length; i++) {
          controls[i].start({
            scale: [1, 1.3, 1],
            color: ["rgb(31, 12, 79)", "black", "rgb(5, 12, 134)"],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          });
          await new Promise((res) =>
            setTimeout(res, delayBetweenLetters * 1000)
          );
        }
        await new Promise((res) => setTimeout(res, wavePause * 1000));
      }
    };

    animateWave();

    return () => {
      isCancelled = true;
    };
  }, [controls]);

  return (
    <div className="min-h-[200px] p-8 bg-white">
      <div className="flex flex-wrap justify-center items-center gap-2 text-4xl md:text-6xl lg:text-9xl font-bold">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            animate={controls[index]}
            initial={{
              scale: 1,
              opacity: 0.7,
              color: "rgb(31, 12, 79)", // blue-900
            }}
            className="inline-block font-sans"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
