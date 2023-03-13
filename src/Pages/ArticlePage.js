import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Articles from "../Components/ArticlePageItems/Articles";
import Login from "../Components/Login/Login";

const ArticlePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Login onHideCart={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <Articles />
      <Footer />
    </div>
  );
};

export default ArticlePage;
