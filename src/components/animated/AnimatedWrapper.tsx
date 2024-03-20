import { FC } from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.2,
      delay: 0.1,
      type: "spring",
      damping: 12,
      stiffness: 35,
    },
  },
};

interface AnimatedCardChildren {
  children: React.ReactNode;
}

const AnimatedWrapper: FC<AnimatedCardChildren> = ({ children }) => {
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
