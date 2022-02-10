import img from "../../assets/img/productImg.svg";

import "./style.css";

const CartProduct = () => {
  return (
    <li className="cart-product">
      <img src={img} alt="nome do produto" className="cart-img" />
      <h4 class="cart-product-name">Nome do Produto</h4>
      <span className="cart-product-category">Categoria do Produto</span>
      <button className="cart-product-button">Remover</button>
    </li>
  );
};

export default CartProduct;
