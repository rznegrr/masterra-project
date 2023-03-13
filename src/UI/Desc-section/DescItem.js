const DescItem = (props) => {
  return (
    <div className="w-full md:py-[33px] col-span-3 border-x border-gray-400/50">
      <img
        src={props.photo}
        className="w-[45px] md:w-[80px] md:h-[52px] m-auto my-2 md:mb-4"
        alt="descriptions"
      />
      <p className="text-white text-center text-[10px] md:text-base px-2">
        {props.desc}
      </p>
    </div>
  );
};

export default DescItem;
