import Button from "../Button";

const Product = () => {
  return (
    <li className="product-container">
      <img src="#" alt="" />
      <h3 className="product-name">Nome do Produto</h3>
      <span className="product-category">Categoria do Produto</span>
      <span className="product-price">R$14.00</span>
      <Button> Adicionar </Button>
    </li>
  );
};

export default Product;
