import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import classes from "./DetailArticlePage.module.css";
import Loader from "../UI/Loader";
import Login from "../Components/Login/Login";
import SideBar from "../Components/SideBar/SideBar";

const DetailArticlePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
  const { articleId } = useParams();

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  const API = `https://react-test-d4fe8-default-rtdb.firebaseio.com/articles/${articleId}.json`;
  useEffect(() => {
    const getSingleArticle = async () => {
      const request = fetch(API);
      const response = await request;
      const data = await response.json();
      setArticles(data);
    };
    setLoading(false);
    getSingleArticle();
  }, [API]);

  if (articles === undefined) {
    return null;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      {cartIsShown && <Login onHideCart={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <div className="flex">
        <div className="w-[80vw] lg:w-[67vw] xl:w-[70vw] m-auto lg:mr-10 lg:m-0">
          <div className="mt-14 text-center m-auto">
            <p className="text-xl font-semibold mb-2 text-gray-800">
              {articles.title}
            </p>
            <p className="text-gray-700 text-base">{articles.date}</p>
          </div>
          <div>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: articles.description }}
            ></div>
          </div>
        </div>
        <div className="hidden lg:block lg:mr-3 xl:mr-5">
          <SideBar />
        </div>
      </div>
      <div className="w-[60vw] lg:mr-5 xl:mr-10">
        <p className="xs:text-2xl text-xl px-5 md:px-10 md:py-5">
          دیدگاهی بگذارید
        </p>
        <form method="post" className={classes.form}>
          <div className="flex flex-col md:flex-row">
            <div className={classes.mainDiv}>
              <label htmlFor="name">نام و نام خانوادگی : </label>
              <input type="text" id="name" name="user_name" />
            </div>
            <div className={classes.mainDiv}>
              <label htmlFor="mail">ایمیل : </label>
              <input type="email" id="mail" name="user_email" />
            </div>
          </div>
          <div className={classes.mainDiv}>
            <label htmlFor="msg">متن پیام : </label>
            <textarea id="msg" name="user_message"></textarea>
          </div>
          <div className="button">
            <button type="submit">ثبت نظر</button>
          </div>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default DetailArticlePage;
