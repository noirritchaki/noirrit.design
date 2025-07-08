import { motion } from "framer-motion";

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
      <div className="px-4 py-2 bg-white text-[#182230] rounded-full shadow-lg text-[14px] flex flex-col items-center text-center">
        <p className="text-[14px] font-medium">This portfolio is still a WIP</p>
        <p className="text-[12px] font-regular text-[#182230]">
          {" "}
          Coding it takes some time :){" "}
        </p>
      </div>
    </motion.div>
  );
};

export default ConstructionFAB;
