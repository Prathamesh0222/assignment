import axios from "axios";
import { useEffect } from "react";
import { useProduct } from "../store/productState";

export const useFetchProduct = () => {
  const { setProducts } = useProduct();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };

    fetchData();
  }, [setProducts]);
};
