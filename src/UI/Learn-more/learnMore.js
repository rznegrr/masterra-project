import classes from "./learnMore.module.css"

const LearnMore = () => {
  return (
    <div>
      <button
        className={`text-black mr-10 text-sm font-semibold transition duration-300 ${classes["hover-animate"]}`}
      >
        اطلاعات بیشتر
      </button>
    </div>
  );
};

export default LearnMore;
