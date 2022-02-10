import "./style.css";

import Button from "../Button";

const Product = ({ handleClick, product }) => {
  return (
    <li className="product">
      <img src={product.img} alt={product.name} className="product-img" />
      <div className="cart-product-text-content">
        <h3 className="product-name">{product.name}</h3>
        <span className="product-category">{product.category}</span>
        <span className="product-price">{product.price.toFixed(2)}</span>
        <Button
          className="btn btn-medium btn-green"
          onClick={() => handleClick(product.id)}
        >
          Adicionar
        </Button>
      </div>
    </li>
  );
};

export default Product;
