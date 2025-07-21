import arrowBack from "../assets/arrow.svg";
const GoBack = () => {
  return (
    <div>
      <div className="hidden md:flex flex-col items-center gap-1 text-[#8375EF] text-sm">
        {/* shown on md and above screens */}
        <span className="whitespace-nowrap text-center font-caveat text-[16px] tracking-tighter">
          go back
        </span>
        <img src={arrowBack} alt="go back" className="w-8 h-8" />
      </div>

      {/* shown only on mobile -> flex sm:hidden */}
      <div className="flex md:hidden flex-col items-center gap-1 text-[#8375EF] text-sm px-5 -mt-4">
        {/* shown on md and above screens */}
        <span className="whitespace-nowrap text-center font-caveat text-[16px] tracking-tighter">
          go back
        </span>
        <img src={arrowBack} alt="go back" className="w-8 h-8 rotate-[30deg]" />
      </div>
    </div>
  );
};

export default GoBack;
