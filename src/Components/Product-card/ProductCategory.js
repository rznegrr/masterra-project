import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Loader from "../../UI/Loader";

const ProductCategory = () => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getSingleProduct = async () => {
      const request = fetch(
        `https://react-test-d4fe8-default-rtdb.firebaseio.com/products.json`
      );
      const response = await request;
      const responseData = await response.json();
      const loadProducts = [];
      for (const key in responseData) {
        loadProducts.push({
          id: key,
          category: responseData[key].category,
          name: responseData[key].name,
          price: responseData[key].price,
          image: responseData[key].image,
          offPrice: responseData[key].offPrice,
        });
      }
      const categoryItems = loadProducts.filter(
        (item) => item.category === category
      );
      setProducts(categoryItems);
      setIsLoading(false);
    };
    getSingleProduct();
  }, [category]);
  
  if (isLoading) {
    return <Loader />;
  }

  const ProductsList = products.map((item) => (
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
      <div className="grid grid-cols-12 container pb-20 md:pr-7 ">{ProductsList}</div>
  );
};

export default ProductCategory;
