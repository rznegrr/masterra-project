import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper";
import slider1 from "../../assets/Slider-images/slider01.webp";
import slider2 from "../../assets/Slider-images/slider02.webp";
import slider3 from "../../assets/Slider-images/slider03.jpg";
import slider4 from "../../assets/Slider-images/slider04.jpg";
import { Link } from "react-router-dom";
// import homepage1 from "../../assets/Slider-images/homepage9.webp";
// import homepage2 from "../../assets/Slider-images/homepage1.webp";
// import homepage4 from "../../assets/Slider-images/homepage6.png";
// import classes from "./Slider.module.css";
// import LearnMore from "../../UI/Learn-more/learnMore";

export default function Slider() {
  return (
    <div>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          // pagination={{
          //   clickable: true,
          // }}
          style={{
            "--swiper-navigation-color": "#616DA7",
            "--swiper-navigation-size": "25px",
          }}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, EffectFade, Navigation]}
          loop={true}
          className="mySwiper"
        >
          {" "}
          <SwiperSlide>
            <Link to={"/Products/Refrigerator"}>
              <img
                className="h-[20vh] sm:h-[35vh] md:h-[40vh] lg:h-[52vh] w-full bg-cover cursor-pointer"
                src={slider1}
                alt="sliders"
              />
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to={"/Products/fry"}>
              <img
                className="h-[20vh] sm:h-[35vh] md:h-[40vh] lg:h-[52vh] w-full bg-cover cursor-pointer"
                src={slider2}
                alt="sliders"
              />
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to={"/Products/wash-machine"}>
              <img
                className="h-[20vh] sm:h-[35vh] md:h-[40vh] lg:h-[52vh] w-full bg-cover cursor-pointer"
                src={slider3}
                alt="sliders"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/Products/tv"}>
              <img
                className="h-[20vh] sm:h-[35vh] md:h-[40vh] lg:h-[52vh] w-full bg-cover cursor-pointer"
                src={slider4}
                alt="sliders"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
