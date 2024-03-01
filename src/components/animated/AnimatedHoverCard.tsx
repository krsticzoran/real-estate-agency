import { FC } from "react";
import { motion } from "framer-motion";

interface AnimatedHoverCardChildren {
  children: React.ReactNode;
}

const AnimatedHoverCard: FC<AnimatedHoverCardChildren> = ({ children }) => {
  return (
    <motion.div
      className="search-rent-sale-link"
      whileHover={{
        scale: 1.05,

        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
      transition={{
        layout: {
          duration: 1,
          type: "spring",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedHoverCard;
