/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetching all products
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setData(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
