import { Fragment } from "react";
import Contactheader from "../UI/Contact-Header";
import Navbar from "./Navbar/Nav";
import Topmenu from "./Navbar/Topmenu";

const Header = (props) => {
  return (
    <Fragment>
      <Contactheader />
      <Topmenu onShowCart={props.onShowCart}/>
      <Navbar />
    </Fragment>
  );
};

export default Header;
