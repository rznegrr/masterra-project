// import { useState } from "react";
import { Link } from "react-router-dom";
import FetchProduct from "./FetchProduct";
// import classes from "./ShowProducts.module.css";

const ShowProductsTab = () => {
  // const [productTab, setProductTab] = useState({
  //   firstbtn: true,
  //   secondbtn: false,
  //   thirdbtn: false,
  // });

  // const showTabHandler = (show) => {
  //   const resetTabs = {
  //     firstbtn: false,
  //     secondbtn: false,
  //     thirdbtn: false,
  //   };
  //   setProductTab({
  //     ...resetTabs,
  //     [show]: true,
  //   });
  // };

  return (
    <div>
      <div className="flex justify-between pt-10 md:pt-24 mx-7 lg:mx-20">
        <div className="flex md:flex-col">
          <span className="text-[10px] sm:text-lg md:text-xl text-info">
            محبوب ترین
          </span>
          <span className="text-sm sm:text-xl md:text-3xl font-semibold text-gray-800 mr-[-30px] mt-4 sm:mt-8 md:mt-2 md:mr-4">
            محصولات
          </span>
        </div>
      </div>
      <section className="mb-10 overflow-hidden h-[780px] xs:h-[890px] sm:h-[75rem] xl:h-[50rem]">
        <FetchProduct />
      </section>
      <div className="flex justify-center my-16">
        <Link to="/Products">
          <button className="text-md bg-info hover:bg-slate-600 rounded-md text-white px-4 py-2">
            نمایش بیشتر
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowProductsTab;
