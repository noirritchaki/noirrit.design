import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState([]);

  const handleClick = (e) => {
    const sparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setSparkles((prev) => [...prev, sparkle]);

    // Remove after animation
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 600); // match animation duration
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-4 h-4 bg-yellow-300 rounded-full"
            style={{
              left: sparkle.x - 15,
              top: sparkle.y - 15,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SparkleEffect;
