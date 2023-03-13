const ShowAll = (props) => {
  return (
    <div>
      <button
        className={`text-sm text-white bg-gray-900 rounded-full py-[5px] px-4 hover:bg-gray-700 transition duration-300`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ShowAll;
