import { useEffect, useState } from "react";
import Loader from "../../UI/Loader";
import CartItem from "./CartItem";

const FetchProduct = () => {
  const [Products, setProducts] = useState([]);
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
      setProducts(loadProducts);
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

  const ProductsList = Products.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      photo={item.image}
      name={item.name}
      price={item.price}
      offPrice={item.offPrice}
    />
  ));
  return (
    <div className="grid grid-cols-12 container xxs:pr-5 xs:pr-3 md:pr-7">{ProductsList}</div>
  );
};

export default FetchProduct;
