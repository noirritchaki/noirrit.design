import arrowBack from "../assets/arrow.svg";
const GoBack = () => {
  return (
    <div className="flex flex-col items-center gap-1 text-[#8375EF] text-sm">
      {/* shown on md and above screens */}
      <span className="hidden md:flex whitespace-nowrap text-center font-caveat text-[16px] tracking-tighter">
        go back
      </span>
      <img src={arrowBack} alt="go back" className="w-8 h-8" />
      {/* shown only on mobile -> flex sm:hidden */}
    </div>
  );
};

export default GoBack;
