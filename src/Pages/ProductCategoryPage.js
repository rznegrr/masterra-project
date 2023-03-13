import { Fragment ,useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductCategory from "../Components/Product-card/ProductCategory";
import Login from "../Components/Login/Login";

const ProductCategoryPage = () => {
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
      <Header onShowCart={ShowCartHandler}  />
      <ProductCategory />
      <Footer/>
    </Fragment>
  );
};

export default ProductCategoryPage;
