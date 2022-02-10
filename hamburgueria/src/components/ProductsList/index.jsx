import Product from "../Product";
import "./style.css";

const ProductsList = ({ handleClick, productsToRender }) => {
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
