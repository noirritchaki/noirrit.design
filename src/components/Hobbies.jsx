import { easeInOut, motion } from "framer-motion";

const Hobbies = ({ image, title }) => {
  return (
    <motion.div
      className="flex flex-col"
      whileHover={{
        scale: 1.05,
        rotate: -2,
        transition: { duration: 0.3, ease: easeInOut },
      }}
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
  );
};

export default Hobbies;
