import "./style.css";

const CartProduct = ({ name, img, category }) => {
  return (
    <li className="cart-product">
      <img src={img} alt={name} className="cart-img" />
      <h4 className="cart-product-name">{name}</h4>
      <span className="cart-product-category">{category}</span>
      <button className="cart-product-button">Remover</button>
    </li>
  );
};

export default CartProduct;
