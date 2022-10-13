import { useEffect, useState } from "react";
import styled from "styled-components";
import { usedProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
         `http://localhost:5000/api/products?category=crime`
            
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);



  return (
    <Container>
    {cat
      ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
      : usedProducts
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} title={item.title}/>)}
  </Container>
  );
};

export default Products;