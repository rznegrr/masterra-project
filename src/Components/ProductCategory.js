import { useState,useEffect } from "react";

const ProductCategory = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
          const request = fetch(
            "https://react-test-d4fe8-default-rtdb.firebaseio.com/products.json"
          );
        const response = await request;
        const data = await response.json()
        setProducts(data)

        for (const pro in Products){
            console.log(`${pro} : ${Products[pro]}`);
        }

    
    
        //   if (!response.ok) {
        //     throw new Error("خطایی رخ داده است !");
        //   }
    
        //   const loadProducts = [];
        //   for (const key in responseData) {
        //     loadProducts.push({
        //       id: key,
        //       name: responseData[key].name,
        //       price: responseData[key].price,
        //       image: responseData[key].image,
        //       offPrice: responseData[key].offPrice,
        //     });
        //   }
        //   setIsLoading(false);
        }
        fetchProduct()
    },[]);
    const keys = Object.keys(Products);

    return ( 
        <div>
            {console.log(Products)}
            {console.log(keys)}
        </div>
     );
}
 
export default ProductCategory;