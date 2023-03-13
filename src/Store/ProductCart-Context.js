import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

const CardContext = createContext();

export const CardProvider = (props) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  const API = `https://react-test-d4fe8-default-rtdb.firebaseio.com/products.json`;
  useEffect(() => {
    const getSingleProduct = async () => {
      const request = fetch(API);
      const response = await request;
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
    };
    getSingleProduct();
  }, [API]);

  const addItem = (id) => {
    const filterProduct = products.filter((p) => p.id === id)[0];
    if (filterProduct === undefined) return;
    const itemFilter = items.filter((i) => i.id === id);
    if (itemFilter.length !== 0) {
      setItems((preItems) =>
        preItems.map((i) => {
          if (i.id === id) {
            i.quantity++;
            return i;
          } else {
            return i;
          }
        })
      );
    } else {
      const item = {
        id,
        quantity: 1,
      };
      setItems((preItems) => [...preItems, item]);
    }
  };

  const removeItem = (id) => {
    const itemFilter = items.filter((i) => i.id === id)[0];
    if (itemFilter === undefined) return;
    if (itemFilter.quantity > 1) {
      setItems((preItems) =>
        preItems.map((i) => {
          if (i.id === id) {
            i.quantity--;
            return i;
          } else {
            return i;
          }
        })
      );
    } else {
      setItems((preItems) => preItems.filter((i) => i.id !== id));
    }
  };

  const removeAllItems = (id) => {
    setItems((preItems) => preItems.filter((i) => i.id !== id));
  };

  const getItems = () => {
    return items.map((i) => {
      const filterProduct = products.filter((p) => p.id === i.id)[0];
      filterProduct.quantity = i.quantity;
      return filterProduct;
    });
  };

  const getTotalPrice = () => {
    const allPrice = items.map((i) => {
      const filterProduct = products.filter((p) => p.id === i.id)[0];
      console.log(filterProduct.price* i.quantity);
      return filterProduct.price * i.quantity;
    });
    return allPrice.reduce((pre, current) => pre + current, 0);
  };

  const contextValue = {
    addItem,
    removeItem,
    removeAllItems,
    getItems,
    getTotalPrice,
    lengthOfItems: items.length,
  };

  return (
    <CardContext.Provider value={contextValue}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;
