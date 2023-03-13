import { Fragment, useState } from "react";
import Header from "../Components/Header";
import Brands from "../UI/Brands/Brands";
import Category from "../Components/Category/Category";
import CardTab from "../UI/Card-Tab/CardTab";
import Slider from "../Components/Slider/Slider";
import DescSection from "../UI/Desc-section/DescSection";
import NewBlogs from "../Components/NewBlogs/NewBlogs";
import Login from "../Components/Login/Login";
import ShowProductsTab from "../Components/Product-card/ShowProducts";
import Footer from "../Components/Footer";
import OtherProduct from "../Components/Product-card/OtherProduct";

const HomePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Login onHideCart={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler}/>
      <Slider />
      <CardTab />
      <ShowProductsTab/>
      <Brands />
      <Category />
      <DescSection />
      <NewBlogs />
      <div className="w-[95vw] my-10 md:mt-20 m-auto">
          <p className="mb-10 text-center text-2xl font-bold">
            محصولات پیشنهادی
          </p>
          <OtherProduct />
        </div>
      <Footer />
      </Fragment>
  );
};

export default HomePage;
