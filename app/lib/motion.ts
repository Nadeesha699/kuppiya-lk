import { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        opacity: { duration: 1.2 },
        ease: "easeOut",
      },
    },
  };

  export const titleAnimation: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)", // hidden from right
  },
  show: {
    clipPath: "inset(0 0% 0 0)", // reveal fully
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};