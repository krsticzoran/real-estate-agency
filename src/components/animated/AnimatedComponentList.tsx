import { FC } from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.3 * index,
      type: "spring",
      damping: 12,
      stiffness: 35,
    },
  }),
};

interface AnimatedComponentListProps {
  index: number;
  children: React.ReactNode;
}

const AnimatedComponentList: FC<AnimatedComponentListProps> = ({
  index,
  children,
}) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponentList;
