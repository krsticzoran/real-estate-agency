import { FC } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 10,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
