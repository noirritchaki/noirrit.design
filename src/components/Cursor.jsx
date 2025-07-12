import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CursorSVG from "../assets/cursor1.svg";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.img
      src={CursorSVG}
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
      animate={{
        x: position.x,
        y: position.y,
        rotate: isHovering ? 360 : 0,
        width: isHovering ? 24 : 12, //ive done this to increase its size and lower its opacity
        height: isHovering ? 24 : 12,
        opacity: isHovering ? 0.35 : 1,
      }}
      transition={{
        // duration: 0,
        x: { duration: 0 },
        y: { duration: 0 },
        width: { duration: 0.2, ease: "easeInOut" },
        height: { duration: 0.2, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut" },
        rotate: isHovering
          ? {
              repeat: Infinity,
              ease: "linear",
              duration: 2,
            }
          : { duration: 0 },
      }}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default CustomCursor;
