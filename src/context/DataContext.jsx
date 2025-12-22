/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useState, useCallback } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [productCategoryData, setProductCategoryData] = useState("");
  const [addToCartData, setAddToCart] = useState([]);
  // Fetching all products
  const fetchAllProducts = useCallback(async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=200");
      setData(res.data.products);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        productCategoryData,
        setProductCategoryData,
        setAddToCart,
        addToCartData,
    
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
