import classes from "./Articles.module.css";
import { Link } from "react-router-dom";

const ArticleItems = (props) => {
  return (
    <li className={`col-span-12 md:col-span-6 lg:col-span-4 ${classes["article-items"]}`}>
      <Link to={`/Articles/${props.id}`}>
      <img
        className={classes["article-image"]}
        src={props.photo}
        alt="articles"
      />
      <div className="p-3">
        <p className="text-sm text-gray-700 mt-2">{props.date}</p>
        <p className="font-bold mt-3 text-gray-800 truncate">{props.title}</p>
        <p className={`${classes["article-desc"]}`}>{props.desc}</p>
      </div>
        <button className={classes["article-btn"]}>بیشتر بخوانید</button>
      </Link>  
    </li>
  );
};

export default ArticleItems;
