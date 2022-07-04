import { Link } from "react-router-dom";
import cart from "../../../images/icons/cart.svg";
import dollar from "../../../images/icons/Dollar.svg";
import downArrow from "../../../images/icons/downArrow.svg";
import shoppingBag from "../../../images/icons/shoppingBag.svg";
import './Catagory.css';
const Catagory = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="links">
          <Link className="all-catagory-link" to="/allproducts">
            All Catagory
          </Link>

          <Link className="tech-link" to="/tech">
            Tech
          </Link>
          <Link className="cloth-link" to="/cloths">
            Cloths
          </Link>
        </ul>
        <img className="shopping-bag" src={shoppingBag} alt="" />

        <ul className="icons">
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
