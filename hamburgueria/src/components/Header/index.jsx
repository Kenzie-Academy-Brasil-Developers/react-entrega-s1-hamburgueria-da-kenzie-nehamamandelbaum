import InputSearch from "../InputSearch";
import Logo from "../Logo";
import "./style.css";

const Header = ({ showProducts }) => {
  return (
    <header className="header">
      <Logo />
      <InputSearch showProducts={showProducts} />
    </header>
  );
};

export default Header;
