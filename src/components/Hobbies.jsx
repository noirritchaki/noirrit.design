import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const Hobbies = ({ image, title, videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <motion.div
      className="flex flex-col"
      style={{cursor: "nesw-resize"}}
      whileHover={{
        scale: 1.05,
        rotate: -2,
        transition: { duration: 0.3, ease: easeInOut },
      }}
      onClick={() => setIsOpen(true)}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-[165px] h-[165px] object-cover shadow-md"
      />
      <p className="mt-2 font-medium text-black" style={{ fontSize: "14px" }}>
        {title}
      </p>
    </motion.div>

{/* VIDEO */}
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)} // Clicking backdrop closes modal
      >
        <motion.div
          className="shadow-lg relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >

          <video 
              autoPlay
              className="h-[600px] w-auto max-w-[90%] rounded-md">
                <source src="/videos/FlagOut.MP4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    )}
</>
  );
};

export default Hobbies;
