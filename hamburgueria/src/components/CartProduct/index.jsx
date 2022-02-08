import img from "../../assets/img/productImg.svg";

import "./style.css";

const CartProduct = () => {
  return (
    <li className="cart-product">
      <img src={img} alt="nome do produto" />
      <h4>Nome do Produto</h4>
      <span className="cart-product-category"></span>
      <button>Remover</button>
    </li>
  );
};

export default CartProduct;
