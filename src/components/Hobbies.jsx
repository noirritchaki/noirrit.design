import { motion } from "framer-motion";

const Hobbies = ({ image, title }) => {
  return (
    <div className="flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-[165px] h-[165px] object-cover shadow-md"
      />
      <p className="mt-2 font-medium text-black" style={{ fontSize: "14px" }}>
        {title}
      </p>
    </div>
  );
};

export default Hobbies;
