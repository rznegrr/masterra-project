import Account from "./Icons/account";
import SearchBox from "./Search-box";
import Sitelogo from "./Logo/logo";
import ShoppingCart from "./Icons/shop-icon/shopping-cart";
import MenuBurger from "./Icons/menu-burger";

const Topmenu = (props) => {
  return (
    <div>
      <div className="h-24 xs:h-28 bg-gray-100 xs:bg-white flex overflow-x-hidden">
        <div className="container flex items-center justify-between ">
          <div className="md:hidden">
            <button>
              <MenuBurger />
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <ShoppingCart />
            <Account />
            <SearchBox />
          </div>
          <div className="w-32 xs:w-36 lg:w-44 md:pr-2 lg:ml-6">
            <Sitelogo />
          </div>
        </div>
      </div>
      <div className="hidden xs:flex items-center md:hidden h-14 bg-gray-100 shadow-xl pr-3">
        <div className="flex items-center justify-between m-auto">
          <div className="flex items-center">
            <ShoppingCart />
            <Account />
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
