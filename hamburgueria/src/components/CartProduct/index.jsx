import "./style.css";

const CartProduct = ({
  name,
  img,
  category,
  currentCart,
  setCurrentCart,
  id,
}) => {
  const removeProductFromCart = (productId) => {
    const newCart = currentCart.filter(({ id }) => id !== productId);

    setCurrentCart(newCart);
  };
  return (
    <li className="cart-product">
      <img src={img} alt={name} className="cart-img" />
      <h4 className="cart-product-name">{name}</h4>
      <span className="cart-product-category">{category}</span>
      <button
        className="cart-product-button"
        onClick={() => removeProductFromCart(id)}
      >
        Remover
      </button>
    </li>
  );
};

export default CartProduct;
