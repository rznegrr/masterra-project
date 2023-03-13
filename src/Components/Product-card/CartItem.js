import classes from "./CartItem.module.css";
import { Link, NavLink } from "react-router-dom";

const CartItem = (props) => {
  return (
    <li
      className={`col-span-6 lg:col-span-4 xl:col-span-3 ${classes.Productcontainer}`}
    >
      <Link
        to={`/Product/${props.id}`}
        className={`bg-gray-50 flex flex-col p-2 rounded h-full ${classes.items}`}
      >
        <img
          className="rounded h-[110px] xs:h-[142px] sm:h-60 object-cover p-2"
          src={props.photo}
          alt="Product-img"
        />
        <h3 className="text-[9px] xs:text-xs md:text-sm font-semibold text-right mt-5 px-2 truncate ...">
          {props.name}
        </h3>
        <del className={classes.offPrice}>{props.offPrice}</del>
        <span className="text-[10px] xs:text-xs md:text-sm text-left absolute bottom-5 left-4 font-bold text-gray-800">
          {props.price} تومان
        </span>
      </Link>
        <div className={classes.middle}>
          <NavLink to={`/Product/${props.id}`} className={classes.button}>مشاهده </NavLink>
        </div>
    </li>
  );
};

export default CartItem;
