import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

const WorkLink = ({ showcase, title, year }) => {
  return (
    <div
      className="relative group hover:bg-zinc-100 hover:ease-in duration-300"
      // the "group" here is what helps to control the hover state of child elements
    >
      <motion.div className="relative">
        <a
          href="#"
          className="relative inline-flex flex-col gap-1 py-2 no-underline  text-black"
        >
          <span className="underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-transparent hover:ease-in duration-300 cursor-pointer">
            {title}
          </span>
          <span className="text-sm font-normal text-zinc-400">{year}</span>
        </a>

        {/* case study preview on hover */}

        {/* image preview */}

        <motion.div
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkLink;
