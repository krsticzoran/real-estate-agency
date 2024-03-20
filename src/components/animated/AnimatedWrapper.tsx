import { FC } from "react";
import { motion } from "framer-motion";

interface AnimatedCardChildren {
  children: React.ReactNode;
  delay: number;
}

const AnimatedWrapper: FC<AnimatedCardChildren> = ({ children, delay }) => {
  const fadeInAnimationVariants = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.2,
        delay,
        type: "spring",
        damping: 12,
        stiffness: 35,
      },
    },
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
