import macbook from '../../../images/products/macbook.jpg';
import './AllProducts.css';
const AllProducts = () => {
  return (
    <div className="all-product">
      <header>
        <h1>All Catagory</h1>
      </header>
      <div className="products">
        <div className="product">
          <img className="product-img" src={macbook} alt="" />
          <h3 className="product-name">Mac Book</h3>
          <p className="product-price">$59</p>
        </div>
        <div className="product">
          <img className="product-img" src={macbook} alt="" />
          <h3 className="product-name">Mac Book</h3>
          <p className="product-price">$59</p>
        </div>
        <div className="product">
          <img className="product-img" src={macbook} alt="" />
          <h3 className="product-name">Mac Book</h3>
          <p className="product-price">$59</p>
        </div>
        <div className="product">
          <img className="product-img" src={macbook} alt="" />
          <h3 className="product-name">Mac Book</h3>
          <p className="product-price">$59</p>
        </div>
        <div className="product">
          <img className="product-img" src={macbook} alt="" />
          <h3 className="product-name">Mac Book</h3>
          <p className="product-price">$59</p>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;