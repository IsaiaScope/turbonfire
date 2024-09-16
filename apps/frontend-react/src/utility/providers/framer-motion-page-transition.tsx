import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

const slideVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  console.log(`🧊 ~ pathname: `, pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={Math.random()}
        onAnimationStart={(t) => {
          console.log(`🧊 ~ onAnimationStart`, t);
        }}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={slideVariants}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
