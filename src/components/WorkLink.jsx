import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

const WorkLink = ({ showcase, title, year }) => {
  return (
    <div
      className="relative group -ml-4"
      initial={{ opacity: 0.8, scale: 0.95 }}
      whileHover={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      // the "group" here is what helps to control the hover state of child elements
    >
      <motion.div className="relative">
        <a
          href="#"
          className="relative p-4 w-screen max-w-[512px] transition-all duration-300 inline-flex flex-col gap-1 py-2 no-underline text-black"
        >
          <motion.span
            className="underline decoration-zinc-100 underline-offset-2 cursor-pointer"
            initial={{ color: "#333" }}
            whileHover={{ color: "#000", transition: { duration: 0.2 } }}
          >
            {title}
          </motion.span>
          <motion.span
            className="text-sm font-normal text-zinc-400"
            initial={{ color: "#888" }}
            whileHover={{ color: "#444", transition: { duration: 0.2 } }}
          >
            {year}
          </motion.span>
        </a>

        {/* adding hover on text  */}
        <motion.div
          className="absolute left-0 top-0 w-screen h-full max-w-[512px] inset-0 group-hover:bg-zinc-100 group-hover:rounded-lg transition-all duration-300 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        {/* case study preview on hover */}

        {/* image preview */}

        {/* <motion.div
          className="absolute top-[-20px] left-[200%] w-80 h-64 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={showcase}
            alt="preview image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            // group-hover:opacity-100: The image becomes visible (opacity-100) when hovering over any part of the parent container with the group class.
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 0, scale: 1 }}
            // whileHover={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.3 }}
          />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default WorkLink;
