import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper";
import bosch from "../../assets/Brand-images/bosch.webp";
import bost from "../../assets/Brand-images/bost.webp";
import lg from "../../assets/Brand-images/lg.jpg";
import devoo from "../../assets/Brand-images/devoo.webp";
import snowa from "../../assets/Brand-images/snowa.webp";
import gplus from "../../assets/Brand-images/gplus.webp";
import sony from "../../assets/Brand-images/sony.jpg";
import delmonti from "../../assets/Brand-images/delmonti.webp";

export default function BrandSlide() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={6}
        spaceBetween={15}
        loop={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={bosch}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="bosch"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bost}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="bost"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={lg}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={devoo}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="devoo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={snowa}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="snowa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gplus}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="gplus"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sony}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="sony"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={delmonti}
            className="w-[170px] rounded-xl cursor-pointer"
            alt="delmonti"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
