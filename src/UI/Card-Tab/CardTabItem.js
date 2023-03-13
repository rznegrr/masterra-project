import classes from "./CardTab.module.css";

const CardTabItems = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <img className={classes["card-image"]}src={props.photo} alt="card-item" />
        <p className={classes["card-title"]}>{props.title}</p>
        <p className={classes["card-desc"]}>{props.desc}</p>
        <div className={classes.overlay}>
          <button className={`hidden md:block ${classes["ShowMore_button"]}`}>نمایش بیشتر</button>
        </div>
      </div>
    </div>
  );
};

export default CardTabItems;
