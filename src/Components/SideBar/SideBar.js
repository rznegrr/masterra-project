import { useState , useEffect } from "react";
import SideBarItems from "./SiderBarItems";

const SideBar = () => {
  const [Article, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `https://react-test-d4fe8-default-rtdb.firebaseio.com/articles.json`
      );

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
    };
    fetchArticles()
  }, []);

  const articleItemsList = Article.map((item) => (
    <SideBarItems
      key={item.id}
      id={item.id}
      date={item.date}
      photo={item.image}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <div className="mt-36">
      <p className="text-xl font-semibold text-gray-800">آخرین مطالب</p>
      <p className="w-16 border-b-2 border-gray-300 my-4"></p>
      <ul className="flex flex-col">{articleItemsList}</ul>
    </div>
  );
};

export default SideBar;
