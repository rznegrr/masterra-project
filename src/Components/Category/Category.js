import React from "react";
import { useState } from "react";
import dishwasher from "../../assets/Category-images/category-dishwash.webp";
import refrigerator from "../../assets/Category-images/category-refrigerator.webp";
import stove from "../../assets/Category-images/category-stove.webp";
import vacuum from "../../assets/Category-images/category-vacuum.webp";
import washmachine from "../../assets/Category-images/category-wash.webp";
import classes from "./Category.module.css";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const [imageActive, setImageActive] = useState({
    firstbtn: true,
    secondbtn: false,
    thirdbtn: false,
    fourthbtn: false,
    fifthbtn: false,
  });

  const imageClickHandler = (order) => {
    const resetImages = {
      firstbtn: false,
      secondbtn: false,
      thirdbtn: false,
      fourthbtn: false,
      fifthbtn: false,
    };
    setImageActive({
      ...resetImages,
      [order]: true,
    });
  };

  return (
    <div>
      <div className="h-[75vh] sm:h-[90vh] md:h-[110vh] 2xl:h-[80vh]">
        <p className="text-xl md:text-3xl font-semibold text-gray-800 text-center mt-14 md:mt-20 2xl:my-20">
           دسته بندی محصولات
        </p>
        <ul className="flex gap-x-0 lg:gap-x-14 justify-center my-8 md:text-lg text-xs">
          <li
            className={
              imageActive.firstbtn ? classes.active : classes["menu-style"]
            }
            onClick={() => imageClickHandler("firstbtn")}
          >
            ماشین ظرفشویی
          </li>
          <li
            className={
              imageActive.secondbtn ? classes.active : classes["menu-style"]
            }
            onClick={() => imageClickHandler("secondbtn")}
          >
            یخچال
          </li>
          <li
            className={
              imageActive.thirdbtn ? classes.active : classes["menu-style"]
            }
            onClick={() => imageClickHandler("thirdbtn")}
          >
            اجاق گاز
          </li>
          <li
            className={
              imageActive.fourthbtn ? classes.active : classes["menu-style"]
            }
            onClick={() => imageClickHandler("fourthbtn")}
          >
            جارو برقی
          </li>
          <li
            className={
              imageActive.fifthbtn ? classes.active : classes["menu-style"]
            }
            onClick={() => imageClickHandler("fifthbtn")}
          >
            ماشین لباسشویی
          </li>
        </ul>

        <div className="container flex justify-center overflow-hidden mb-10">
          {imageActive.firstbtn && (
            <CategoryItem
              link={"dish-washer"}
              photo={dishwasher}
              title="  ماشین ظرفشویی"
              desc="با تکنولوژی Active water دیگر نگران مصرف بالای آب نباشید"
            />
          )}
          {imageActive.secondbtn && (
            <CategoryItem
            link={"Refrigerator"}
              photo={refrigerator}
              title=" یخچال های ساید بای ساید"
              desc="   دارای سیستم گردش هوای چند گانه که می‌تواند هوای داخل یخچال را
          تازه‌تر نگاه دارد"
            />
          )}
          {imageActive.thirdbtn && (
            <CategoryItem
            link={"fry"}
            photo={stove}
              title="اجاق گاز فردار"
              desc="سیستم سوخت رسانی کامل، فندک و ترموکوپل ساباف ایتالیا"
            />
          )}
          {imageActive.fourthbtn && (
            <CategoryItem
            link={"vacuum"}
            photo={vacuum}
              title="جاروبرقی بدون کیسه و رباتیک"
              desc="دارای موتور کمپرسور HiSpin با تیغه های ایرودینامیک و کاملا
          کالیبره"
            />
          )}
          {imageActive.fifthbtn && (
            <CategoryItem
            link={"wash-machine"}
            photo={washmachine}
              title="ماشین لباسشویی و خشک کن"
              desc=" دارای موتور پر قدرت دایرکت درایو اینورتر"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
