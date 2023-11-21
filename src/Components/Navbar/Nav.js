import { Link, NavLink } from "react-router-dom";
import classes from "./dropDown.module.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block h-14 bg-gray-100 shadow-xl">
        <div className="container flex">
          <ul className="flex text-base font-bold gap-x-10 mt-4 m-auto">
            <li className="hover:text-info transition ease-in-out duration-300 cursor-pointer focus:text-info outline-none">
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "#616DA7" } : {};
                }}
                to="/"
              >
                خانه
              </NavLink>
            </li>
            <div className={`hover:text-info h-14 ${classes.dropdown}`}>
              <NavLink to="/Products" className={`ml-[5px]`}>
                محصولات
              </NavLink>
              <div className={`py-2 ${classes["dropdown-content"]}`}>
                <div className="mr-5">
                  <NavLink
                    to={`/Products/Refrigerator`}
                    className={classes["dropdown-content-angle"]}
                  >
                    یخچال
                  </NavLink>
                  <ul className={classes["dropdown-content-detail"]}>
                    <li>اسنوا</li>
                    <li>سامسونگ</li>
                    <li>بوش</li>
                    <li>ال جی</li>
                    <li>یخچال های دو در</li>
                    <li>یخچال های چهار در</li>
                  </ul>
                </div>
                <ul className="mr-10">
                  <NavLink
                    to={`/Products/tv`}
                    className={classes["dropdown-content-angle"]}
                  >
                    تلویزیون
                  </NavLink>
                  <div className={classes["dropdown-content-detail"]}>
                    <li>سونی</li>
                    <li>سامسونگ</li>
                    <li>ایکس ویژن</li>
                    <li>ال جی</li>
                  </div>
                </ul>
                <ul className="mr-10">
                  <NavLink to={"/Products"}>
                  <button className={classes["dropdown-content-angle"]}>
                    لوازم برقی و خانگی
                  </button>
                  </NavLink>
                  <div className={classes["dropdown-content-detail"]}>
                    <li>اتو</li>
                    <Link to="/Products/wash-machine"><li>ماشین لباسشویی</li></Link>
                    <Link to="/Products/dish-washer"><li>ماشین ظرفشویی</li></Link>
                    <Link to="/Products/coffee-maker"><li>قهوه و چای ساز، آب میوه گیر</li></Link>
                    <Link to="/Products/stove"><li>اجاق گاز</li></Link>
                    <Link to="/Products/fry"><li>مایکروویو، ماکروفر</li></Link>
                    <Link to="/Products/vacuum">  <li>جاروبرقی</li></Link>
                  </div>
                </ul>
              </div>
              <span>
                <i className="fa fa-angle-down mt-1"></i>
              </span>
            </div>
            <li className="hover:text-info transition ease-in-out duration-300 cursor-pointer">
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "#616DA7" } : {};
                }}
                to="/Articles"
              >
                {" "}
                اخبار و مقالات
              </NavLink>
            </li>
            <li className="hover:text-info transition ease-in-out duration-300 cursor-pointer">
              درباره ما
            </li>
            <li className="hover:text-info transition ease-in-out duration-300 cursor-pointer">
              تماس با ما
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
