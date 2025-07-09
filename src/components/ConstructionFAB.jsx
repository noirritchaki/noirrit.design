import { motion } from "framer-motion";
import Lottie from "lottie-react";
import PulseAnimation from "../assets/pulse.json";

const ConstructionFAB = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{
        x: [0, -4, 4, -3, 3, -2, 2, 0],
        y: [0, -2, 2, -1, 1, -1, 1, 0],
        transition: { duration: 0.4 },
      }}
      className="cursor-pointer fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-1 px-2 py-2 bg-white text-[#0cda9f] rounded-full shadow-lg text-[14px]">
        <div className="w-6 h-6">
          <Lottie animationData={PulseAnimation} loop autoplay />
        </div>
        <div className="flex flex-col text-left">
          <p className="text-[12px] font-regular">
            i've been coding this site. so it's still a WIP :)
          </p>
          {/* <p className="text-[12px] font-regular text-[#182230]">
            Coding it takes some time :)
          </p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ConstructionFAB;
