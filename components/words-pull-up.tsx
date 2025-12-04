"use client";

import { motion } from "motion/react";

type Props = {
  children: string;
};

export const WordsPullUp = ({ children }: Props) => {
  const splittedText = children.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0, filter: "blur(10px)" },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.13,
      },
    }),
  };

  return (
    <motion.div className="flex flex-wrap justify-center md:justify-start">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className="pr-2"
        >
          {current}
        </motion.div>
      ))}
    </motion.div>
  );
};
