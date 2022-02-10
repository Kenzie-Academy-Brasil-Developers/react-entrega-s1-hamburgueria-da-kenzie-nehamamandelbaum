import { useEffect, useState } from "react";
import Product from "../Product";
import "./style.css";

const ProductsList = ({ products, filteredProducts, handleClick }) => {
  const [productsToRender, setProductsToRender] = useState([]);

  useEffect(() => {
    filteredProducts.length >= 0
      ? setProductsToRender(filteredProducts)
      : setProductsToRender(products);
  }, [filteredProducts]);

  return (
    <ul className="products-list">
      {productsToRender.map((product) => {
        return (
          <Product
            id={product.id}
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
