import { useState, useEffect } from "react";
import Loader from "../../UI/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import classes from "./OtherProduct.module.css";
import { Link } from "react-router-dom";

const OtherProduct = () => {
  const [OtherProduct, setOtherProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://react-test-d4fe8-default-rtdb.firebaseio.com/products.json"
      );

      if (!response.ok) {
        throw new Error("خطایی رخ داده است !");
      }

      const responseData = await response.json();
      const loadProducts = [];
      for (const key in responseData) {
        loadProducts.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          image: responseData[key].image,
          offPrice: responseData[key].offPrice,
        });
      }
      setOtherProduct(loadProducts);
      setIsLoading(false);
    };

    fetchProduct().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className="error-content">
        <p>{httpError}</p>
      </section>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Swiper
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Autoplay, FreeMode]}
      className="mySwiper"
    >
      {OtherProduct.map((items) => {
        return (
          <SwiperSlide key={items.id} className={classes.SwiperSlide}>
            <Link to={`/Product/${items.id}`}>
              <img src={items.image} alt={items.name}/>
              <p>{items.name}</p>
              <span>{`${items.price} تومان`}</span>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default OtherProduct;
