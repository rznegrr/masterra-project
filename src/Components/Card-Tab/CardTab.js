import vacuum from "../../assets/CardTab-images/vacuum.webp";
import refrigerator from "../../assets/CardTab-images/refrigerator.webp";
import machinewash from "../../assets/CardTab-images/machinewash.webp";
import onepack from "../../assets/CardTab-images/onepack.webp";
import tv from "../../assets/CardTab-images/tvi.png";
import classes from "./CardTab.module.css";
import CardTabItems from "./CardTabItem";
import pic1 from "../../assets/CardTab-images/p1.jpg";
import pic2 from "../../assets/CardTab-images/p2.jpg";
import pic3 from "../../assets/CardTab-images/p3.jpg";
import pic4 from "../../assets/CardTab-images/p4.jpg";
import pic5 from "../../assets/CardTab-images/pict1.jpg";
import pic6 from "../../assets/CardTab-images/pict2.jpg";

const CardTab = () => {
  return (
    <div className="flex justify-center">
      <section className="pt-10 md:pt-20 grid grid-cols-12 mx-2 w-[96vw]">
        <div className="col-span-12 grid grid-cols-12 gap-x-3">
          <img className="col-span-3 h-[69px] xs:h-[79px] md:h-[145px] lg:h-[195px] xl:h-[276px] rounded-3xl cursor-pointer" src={pic1} alt="category" />
          <img className="col-span-3 h-[69px] xs:h-[79px] md:h-[145px] lg:h-[195px] xl:h-[276px] rounded-3xl cursor-pointer" src={pic2} alt="category" />
          <img className="col-span-6 rounded-3xl cursor-pointer" src={pic5} alt="category" />
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-x-3 mt-3">
          <img className="col-span-6 rounded-3xl cursor-pointer" src={pic6} alt="category" />
          <img className="col-span-3 h-[69px] xs:h-[79px] md:h-[145px] lg:h-[195px] xl:h-[276px] rounded-3xl cursor-pointer" src={pic3} alt="category" />
          <img className="col-span-3 h-[69px] xs:h-[79px] md:h-[145px] lg:h-[195px] xl:h-[276px] rounded-3xl cursor-pointer" src={pic4} alt="category" />
        </div>
        {/* <div className="col-span-6 lg:col-span-12">
            <CardTabItems
              photo={tv}
              title="تلویزیون های هوشمند "
              desc="صفحه نمایشگر QLED"
            />
          </div>
          <div className="col-span-6 lg:col-span-12">
            <CardTabItems
              photo={vacuum}
              title="جاروبرقی بدون پاکت"
              desc=" مجهز به موتور اینورتر"
            />
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 lg:col-span-3">
          <div className="col-span-6 lg:col-span-12">
            <CardTabItems
              photo={refrigerator}
              title="یخچال ساید بای ساید"
              desc="مجهز به سیستم اکونومی"
            />
          </div>
          <div className="col-span-6 lg:col-span-12">
            <CardTabItems
              photo={machinewash}
              title="ماشین لباسشویی اسنوا"
              desc="دارای برنامه های متنوع شستشو"
            />
          </div>
        </div>
        <div className={`col-span-12 lg:col-span-6 ${classes["card-center"]}`}>
            <img
              className={classes["card-image-center"]}
              src={onepack}
              alt="card-item"
            />
          <button className={classes["card-button-center"]}>مشاهده</button>*/}
      </section>
    </div>
  );
};

export default CardTab;
