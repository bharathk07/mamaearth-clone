import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
    let cartArr = JSON.parse(localStorage.getItem("cartArr"));
  return (
    <>
    <div className="stick">
      <div className="strip">
        <p>Asia's 1st brand with MADE SAFE Certified Products</p>
        <p>
          Free Shipping Above 399 | COD Available | Extra 5% OFF on Prepaid
          Orders | Shop Now
        </p>
        <p>
          <FontAwesomeIcon icon={faUser} />
        </p>
      </div>
      <div className="search-bar">
        <div className="logo">
          {" "}
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&fit=scale"
            alt="logo"
            height="50px"
            width="180px"
          />{" "}
        </div>
        <div className="search">
          <form className="example" action="">
            <input
              type="text"
              placeholder=" Search for products..."
              name="search"
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} /> Search
            </button>
          </form>
        </div>
        <div className="cart-login">
          <Link to="/checkout">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "20px", color: "dodgerblue" }}
            />{" "}
            <div className="cart"><b>{cartArr.length}</b></div>{" "}
          </Link>
          <p className="p">Cart</p>
          <Link to="/login">
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: "20px", color: "dodgerblue" }}
            />
          </Link>
          <p className="p">Login</p>
        </div>
      </div>

      <div className="navbar">
        <Link to={'/'} style={{marginLeft:"70px"}}>HOME</Link>
        <div className="dropdown">
            <Link to={'/baby'} className="dropbtn">BABY</Link>
            <div className="dropdown-content">
                <div className="row">
                    <div className="column">
                        Explore
                        <Link to={'/baby'}>New Launches</Link>
                        <Link to={'/baby'}>Best Seller</Link>
                        <Link to={'/baby'}>Combos</Link>
                        <Link to={'/baby'}>Gift Packs</Link>
                    </div>
                    <div className="column">
                        Baby
                        <Link to={'/baby'}>Baby Oil</Link>
                        <Link to={'/baby'}>Baby Skin</Link>
                        <Link to={'/baby'}>Baby Bath</Link>
                        <Link to={'/baby'}>Shampoo</Link>
                        <Link to={'/baby'}>Oralcare</Link>
                        <Link to={'/baby'}>Diaper</Link>
                    </div>
                    <div className="column">
                      <p>See All</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="dropdown">
            <Link to={'/face'} className="dropbtn">FACE</Link>
            <div className="dropdown-content">
                <div className="row">
                    <div className="column">
                        Explore
                        <Link to={'/face'}>New Launches</Link>
                        <Link to={'/face'}>Best Seller</Link>
                        <Link to={'/face'}>Combos</Link>
                        <Link to={'/face'}>Gift Packs</Link>
                    </div>
                    <div className="column">
                    Face
                        <Link to={'/face'}>Face Mask</Link>
                        <Link to={'/face'}>Face Wash</Link>
                        <Link to={'/face'}>Face Cream</Link>
                        <Link to={'/face'}>Face Scrub</Link>
                    </div>
                    <div className="column">
                    <p>See All</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="dropdown">
            <Link to={'/hair'} className="dropbtn">HAIR</Link>
            <div className="dropdown-content">
                <div className="row">
                    <div className="column">
                        Explore
                        <Link to={'/hair'}>New Launches</Link>
                        <Link to={'/hair'}>Best Seller</Link>
                        <Link to={'/hair'}>Combos</Link>
                        <Link to={'/hair'}>Gift Packs</Link>
                    </div>
                    <div className="column">
                        Hair
                        <Link to={'/hair'}>Hair Mask</Link>
                        <Link to={'/hair'}>Hair Oil</Link>
                        <Link to={'/hair'}>Shampoo</Link>
                        <Link to={'/hair'}>Conditioner</Link>
                    </div>
                    <div className="column">
                    <p>See All</p>
                    </div>
                </div>
            </div>
        </div>
        <Link to={'*'} className="dropbtn">BEAUTY</Link>
        <Link to={'*'} className="dropbtn">BODY</Link>
        <Link to={'*'} className="dropbtn">GIFT-PACKS</Link>
        <Link to={'*'} className="dropbtn">ALL PRODUCTS</Link>
        <Link to={'*'} className="dropbtn">BLOG</Link>
        <Link to={'*'} className="dropbtn">PLANT GOODNESS</Link>
      </div>
      </div>
    </>
  );
};
