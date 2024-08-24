import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="title">
        <h3>SmallStorePro</h3>
      </div>

      <div className="items">
        <Link className="item" to="/inicio">
          Inicio
        </Link>
        <Link className="item" to="/inicio">
          Clientes
        </Link>
        <Link className="item" to="/inicio">
          Productos
        </Link>
        <Link className="item" to="/inicio"></Link>
        <Link className="item" to="/">
          Salir
        </Link>
      </div>
    </div>
  );
};

export default Header;
