import InputSearch from "../InputSearch";
import Logo from "../Logo";
import "./style.css";

const Header = ({
  setFilteredProducts,
  products,
  filteredProducts,
  showProducts,
}) => {
  return (
    <header className="header">
      <Logo />
      <InputSearch
        setFilteredProducts={setFilteredProducts}
        products={products}
        filteredProducts={filteredProducts}
        showProducts={showProducts}
      />
    </header>
  );
};

export default Header;
