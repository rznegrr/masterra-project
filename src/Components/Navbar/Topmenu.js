import Account from "../../UI/Icons/account";
import SearchBox from "../../UI/Search-box";
import Sitelogo from "../../UI/Logo/logo";
import React from "react";
import MenuBurger from "./menu-burger";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";
import ShoppingCartIcon from "../../UI/Icons/shopping-icon";
import classes from "./Topmenu.module.css";
import { useState } from "react";
import CardContext from "../../Store/ProductCart-Context";
import Modal from "../../UI/Modal";
import ShopCartItem from "../Product-card/ShopCardItem";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Topmenu = (props) => {
  const [toggle, setToggle] = useState(false);
  const [shopCart, setShopCart] = useState(false);
  const authCtx = useContext(AuthContext);
  const {
    lengthOfItems,
    addItem,
    removeItem,
    getItems,
    // getTotalPrice,
  } = useContext(CardContext);

  const ShowMenuHandler = () => {
    setToggle(true);
  };

  const ShowShopHandler = () => {
    setShopCart(true);
  };

  const HideMenuHandler = () => {
    setShopCart(false);
    setToggle(false);
  };

  return (
    <div>
      <div className="h-24 xs:h-28 bg-gray-100 xs:bg-white flex overflow-x-hidden">
        <div className="container flex items-center justify-between ">
          <div className="md:hidden">
            <button onClick={ShowMenuHandler}>
              <MenuBurger />
            </button>
            {toggle && (
              <div className={classes.sideNav}>
                <div className={classes.sidebar}>
                  <button
                    onClick={HideMenuHandler}
                    className={classes.closebtn}
                  >
                    ×
                  </button>
                  <ul>
                    <li>حساب کاربری</li>
                    <Link to={"/"}>
                      <li>صفحه اصلی</li>
                    </Link>
                    <Link to={"/Products"}>             
                      <li>محصولات</li>
                    </Link>
                    <Link to={"/Articles"}>
                      <li>مقالات</li>
                    </Link>
                    <li>تماس با ما</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center relative">
            <ShoppingCartIcon onClick={ShowShopHandler} />
            <span className={classes.shop}>{lengthOfItems}</span>
            {shopCart && (
              <Modal onHideCart={HideMenuHandler}>
                <div className={classes.shopCart}>
                  {lengthOfItems === 0 ? (
                    <p>سبد خرید خالی است</p>
                  ) : (
                    <Fragment>
                      <div className="relative">
                        {getItems().map((item) => (
                          <ShopCartItem
                            key={item.id}
                            {...item}
                            onRemove={() => removeItem(item.id)}
                            onAdd={() => addItem(item.id)}
                          />
                        ))}
                      </div>
                      <div><button className="text-xs md:text-sm border border-1 py-1 px-2 bg-[#616DA7] text-white rounded mt-5">ادامه فرآیند خرید</button></div>
                    </Fragment>
                  )}
                </div>
                {/* <span>{getTotalPrice}</span> */}
              </Modal>
            )}
            {!authCtx.isLoggedIn && <Account onClick={props.onShowCart} />}
            <SearchBox />
          </div>
          <div className="w-32 xs:w-36 lg:w-44 md:pr-2 lg:ml-6">
            <Sitelogo />
          </div>
        </div>
      </div>
      <div className="hidden xs:flex items-center md:hidden h-14 bg-gray-100 shadow-xl pr-3">
        <div className="flex items-center justify-between m-auto">
          <div className="flex items-center relative">
            <ShoppingCartIcon onClick={ShowShopHandler}/>
            <span className={classes.shop}>{lengthOfItems}</span>
            {!authCtx.isLoggedIn && <Account onClick={props.onShowCart} />}
          </div>
          <div>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topmenu;
