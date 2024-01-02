import { Link } from "react-router-dom";
import ShowAll from "../../UI/showAll";
import LearnMore from "../../UI/learnMore";
import classes from "./Category.module.css";

const CategoryItem = (props) => {
  return (
    <div>
      <Link to={`/Products/${props.link}`}>
        <img src={props.photo} className={`h-[55vh] 2xl:${classes.fade}`} alt="category-item" />
      </Link>
      <div className={`flex flex-col text-center ${classes["slide-animate"]}`}>
        <h2 className="text-md md:text-3xl font-bold text-gray-800 mt-7 md:mt-10">
          {props.title}
        </h2>
        <p className="mt-4 text-xs leading-5 md:text-lg text-gray-900">
          {props.desc}
        </p>
      </div>
      <div
        className={`flex items-center justify-center mt-8 ${classes["slide-buttons"]}`}
      >
        <div className={classes["slide-buttons"]}>
          <ShowAll text="نمایش بیشتر" />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
