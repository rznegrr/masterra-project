import React, { useEffect } from "react";
import { useState } from "react";
import ArticleItems from "./ArticleItems";
import Loader from "../../UI/Loader"

const Articles = () => {
  const [Article, setArticles] = useState([]);
  const [loading , setLoading] = useState(true)
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `https://react-test-d4fe8-default-rtdb.firebaseio.com/articles.json`
      );

      if (!response.ok) {
       throw new Error("خطایی رخ داده است !")
      }

      const responseData = await response.json();
      const loadedArticles = [];
      for (const key in responseData) {
        loadedArticles.push({
          id: key,
          date: responseData[key].date,
          title: responseData[key].title,
          desc: responseData[key].desc,
          image: responseData[key].image,
        });
      }
      setArticles(loadedArticles);
      setLoading(false)
    };
    fetchArticles().catch((err)=>{
      setLoading(false)
      setHttpError(err.message)
    })
  }, []);

  if(httpError){
    return (
      <section className="error-content">
        <p>{httpError}</p>
      </section>
    );
  }

  if(loading){
    return (
      <div className="h-[500px] m-auto">
        <Loader/>
      </div>
    )
  }

  const articleItemsList = Article.map((item) => (
    <ArticleItems
      key={item.id}
      id={item.id}
      date={item.date}
      photo={item.image}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <div className="flex justify-center mb-20">
        <ul className="grid grid-cols-12 lg:gap-x-16">{articleItemsList}</ul>
    </div>
  );
};

export default Articles;
