import InputSearch from "../InputSearch";
import Logo from "../Logo";
import "./style.css";

const Header = ({ setFilteredProducts, products, filteredProducts }) => {
  return (
    <header className="header">
      <Logo />
      <InputSearch
        setFilteredProducts={setFilteredProducts}
        products={products}
        filteredProducts={filteredProducts}
      />
    </header>
  );
};

export default Header;
