import "./style.css";
import img from "../../assets/img/productImg.svg";

import Button from "../Button";

const Product = () => {
  return (
    <li className="product">
      <img src={img} alt="" />
      <h3 className="product-name">Nome do Produto</h3>
      <span className="product-category">Categoria do Produto</span>
      <span className="product-price">R$14.00</span>
      <Button className="btn btn-medium btn-green"> Adicionar </Button>
    </li>
  );
};

export default Product;
