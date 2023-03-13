import classes from "./SideBar.module.css"
import { Link } from "react-router-dom";

const SideBarItems = (props) => {
  return (
    <div>
      <Link to={`/Articles/${props.id}`}>
        <div
          className={`${classes["blogs-items"]}`}
        >
          <img
            className={classes["blogs-image"]}
            src={props.photo}
            alt="blogs"
          />
          <div
            className={`flex flex-col mr-2 mt-1 relative w-[60%]`}
          >
            <p
              className={`my-1 text-gray-800 text-sm font-semibold truncate ...`}
            >
              {props.title}
            </p>
            <p
              className={`text-[13px] text-gray-800 truncate ...`}
            >
              {props.desc}
            </p>
            <button
              className={` text-info text-[12px] font-bold absolute bottom-1 hover:text-gray-600 transition duration-300`}
            >
              بیشتر بخوانید
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBarItems;
