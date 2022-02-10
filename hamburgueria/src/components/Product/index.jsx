import "./style.css";

import Button from "../Button";

const Product = ({ name, category, price, img, handleClick, id }) => {
  return (
    <li className="product">
      <img src={img} alt="" className={name} />
      <div className="cart-product-text-content">
        <h3 className="product-name">{name}</h3>
        <span className="product-category">{category}</span>
        <span className="product-price">{price}</span>
        <Button
          className="btn btn-medium btn-green"
          onClick={() => handleClick(id)}
        >
          Adicionar
        </Button>
      </div>
    </li>
  );
};

export default Product;
