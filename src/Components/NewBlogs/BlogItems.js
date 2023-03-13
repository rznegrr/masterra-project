import { Link } from "react-router-dom";
import classes from "./Blogs.module.css";

const BlogItem = (props) => {
  return (
    <div>
      <Link to={`/Articles/${props.id}`}>
      <div
        className={`${classes["blogs-items"]} ${classes[props.className]}`}
      >
        <img
          className={classes["blogs-image"]}
          src={props.photo}
          alt="blogs"
        />
        <div className={`flex flex-col mr-9 mt-1 relative w-[65%] ${classes["large-items"]}`}>
          <span className="text-gray-500 text-[13px] self-start">
            {props.date}
          </span>
          <p
            className={`my-2 text-gray-800 text-base font-semibold ${classes["large-title"]}`}
          >
            {props.title}
          </p>
          <p className={`text-sm text-gray-800 truncate ... ${classes["large-desc"]}`}>{props.desc}</p>
          <button className={`w-[90px] text-info text-[14px] font-bold absolute bottom-1 hover:text-gray-600 transition duration-300 ${classes["large-btn"]}`}>
            بیشتر بخوانید
          </button>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BlogItem;
