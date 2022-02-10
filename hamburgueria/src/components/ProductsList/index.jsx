// import { useEffect, useState } from "react";
import Product from "../Product";
import "./style.css";

const ProductsList = ({ handleClick, productsToRender }) => {
  // const [productsToRender, setProductsToRender] = useState([]);

  // useEffect(() => {
  //   console.log(filteredProducts);
  //   filteredProducts.length > 0
  //     ? {  setProductsToRender(filteredProducts)}
  //     : setProductsToRender(products);
  // }, [filteredProducts]);

  return (
    <ul className="products-list">
      {productsToRender.map((product, index) => {
        return (
          <Product product={product} handleClick={handleClick} key={index} />
        );
      })}
    </ul>
  );
};

export default ProductsList;
