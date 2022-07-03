import { Link } from "react-router-dom";
import cart from "../../../images/icons/cart.svg";
import dollar from "../../../images/icons/Dollar.svg";
import downArrow from "../../../images/icons/downArrow.svg";
import './Catagory.css';
const Catagory = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <Link to="/allproducts">All Catagory</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/cloths">Cloths</Link>
        </ul>
        <ul>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <Link to="/tech">
              <img className="dollar" src={dollar} alt="" />
              <img className="downArrow" src={downArrow} alt="" />
            </Link>
            <Link to="/cart">
              <img className="cart" src={cart} alt="" />
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Catagory;
