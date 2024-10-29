// import React from "react";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollTransformSquare = () => {
  const { scrollY } = useScroll();
  const [hasScrolledPast100, setHasScrolledPast100] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolledPast100(latest > 100);
      if (isFirstRender) setIsFirstRender(false);
    });
    return () => unsubscribe();
  }, [scrollY, isFirstRender]);

  return (
    <div className="relative">
      {/* Spacer to demonstrate scroll */}
      <div className="h-[2000px]" />

      <motion.div
        className="fixed top-4 left-4 w-16 h-16 bg-blue-500"
        animate={{
          borderRadius: hasScrolledPast100 ? "9999px" : "0px",
          x: hasScrolledPast100 ? 0 : isFirstRender ? 0 : -1000,
        }}
        initial={{
          borderRadius: "0px",
          x: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default ScrollTransformSquare;
