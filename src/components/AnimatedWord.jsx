const AnimatedWord = ({ word }) => (
  <div className="relative inline-block overflow-hidden h-[20px]">
    <span className="block transition-transform duration-300 group-hover:-translate-y-[100%]">
      {word}
    </span>
    <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-[100%]">
      {word}
    </span>
  </div>
);

export default AnimatedWord;
