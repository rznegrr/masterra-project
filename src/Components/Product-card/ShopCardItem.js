import classes from "./ShopCartItem.module.css";

const ShopCartItem = (props) => {
  return (
    <div className={`md:h-32 ${classes.ShopCart}`}>
      <div className="flex flex-col md:flex-row">
        <img className="w-24 md:w-32 p-2" src={props.image} alt={props.name} />
        <p className="text-right md:mt-5 mr-2 text-xs md:text-base font-bold text-[#616DA7] truncate">
          {props.name}
        </p>
      </div>
      <div className="flex justify-between mx-1 xs:mx-5 items-center xxs:my-5">
        <div className="border w-16 flex justify-between items-center px-1 rounded md:absolute md:bottom-4 md:right-[40%]">
          <button onClick={props.onRemove}>-</button>
          <span>{props.quantity}</span>
          <button onClick={props.onAdd}>+</button>
        </div>
          <p className="mt-12 xxs:m-0 mb-2 text-xs xs:text-sm md:absolute md:bottom-4 md:left-3">{`${props.price} تومان`}</p>
      </div>
    </div>
  );
};

export default ShopCartItem;
// 
// 