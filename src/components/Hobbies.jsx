import { easeInOut, motion } from "framer-motion";
import { useRef, useState } from "react";

const Hobbies = ({ image, title, subtitle, videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const videoRef = useRef(null);

  return (
    <>
      <motion.div
        className="flex flex-col"
        style={{ cursor: "none" }}
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
        <p className="text-gray-500" style={{ fontSize: "12px" }}>
          {subtitle}
        </p>
      </motion.div>

      {/* VIDEO */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50"
          style={{ position: "fixed", width: "100vw", height: "100vh" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)} // Clicking backdrop closes modal
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <video
              ref={videoRef}
              autoPlay
              className="h-[600px] w-auto max-w-[90]"
              onClick={() => {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hobbies;
