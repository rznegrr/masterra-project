import React, { useEffect } from "react";
import { useState } from "react";
import Articles from "../ArticlePageItems/Articles";
import BlogItem from "./BlogItems";

const NewBlogs = () => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        `https://react-test-d4fe8-default-rtdb.firebaseio.com/articles.json`
      );
      const responseData = await response.json();
      const loadedBlogs = [];
      for (const key in responseData) {
        loadedBlogs.push({
          id: key,
          date: responseData[key].date,
          title: responseData[key].title,
          desc: responseData[key].desc,
          image: responseData[key].image,
        });
      }
      setBlogs(loadedBlogs);
    };
    fetchBlogs();
  }, []);

  const blogList = Blogs.map((item, index) => (
    <BlogItem
      key={item.id}
      id={item.id}
      date={item.date}
      photo={item.image}
      title={item.title}
      desc={item.desc}
      className={index === 3 ? "large-blogs" : ""}
    />
  ));

  return (
    <div>
      <section className="hidden xl:block relative h-[500px] mt-[17rem] mb-20">
        <div className="absolute top-[-28%] right-[49%] flex flex-col">
          <span className="text-info">بلاگ مسترا</span>
          <span className="mt-4 text-3xl text-gray-800 mr-4 font-semibold">
            جدیدترین خبرها
          </span>
        </div>
        <ul className="mr-[44rem]">{blogList}</ul>
      </section>
      <section className="xl:hidden mt-14 lg:mt-20">
        <div className="flex justify-between items-center container mx-1">
          <span className="text-info text-[18px] font-semibold md:text-xl">بلاگ مسترا</span>
          <span className="text-gray-800 text-sm hover:text-info cursor-pointer transition-all ease-in duration-150">بیشتر بخوانید</span>
        </div>
        <Articles />
      </section>
    </div>
  );
};

export default NewBlogs;
