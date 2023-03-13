import classes from "./SideNav.module.css";
// import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const SideNav = (props) => {
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.sidenav}>
        {/* <NavLink className={classes.link}></NavLink> */}
      </div>
        <p>سلام</p>
        <p>چو خبر</p>
        <p>koooooooooooosh</p>
    </Modal>
  );
};

export default SideNav;
