import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield,faHeart } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css'
export const Footer = () => {
  return (
    <div className="footer">
      <div className="background">
        <h1 className="h-tree">WE PLANT GOODNESS</h1>
        <h1 className="h-tree">3,00,018</h1>
        <p className="p-tree">Tress have got life already...</p>
        <p className="p-tree">
          Everytime you buy from us, we plant more trees !{" "}
        </p>
        <button className="btn">KNOW MORE</button>
      </div>
      <h2 className="safe">Super Safe Standards</h2>
      <div className="std">
        <div className="std-div">
          <img
            className="std-img"
            src="https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x100.png?auto=format&fit=100%2C100&ssl=1"
            alt=""
          />
          <div>
            <h3 className="std-h3">
              <b>Dermatologically Tested</b>
            </h3>
            <p className="std-p">
              We ensure each product is tested clinically on the sensitive human
              skin to ensure that it is allergic
            </p>
          </div>
        </div>
        <div className="std-div">
          <img
            className="std-img"
            src="https://mamaearthp.imgix.net/wysiwyg/fda-100x100.jpg?auto=format&fit=100%2C100&ssl=1"
            alt=""
          />
          <div>
            <h3 className="std-h3">
              <b>FDA Approved</b>
            </h3>
            <p className="std-p">
              MamaEarth is FDA approved, which means we are 100% safe to be used
              for babies as well as mamas
            </p>
          </div>
        </div>
        <div className="std-div">
          <img
            className="std-img"
            src="https://mamaearthp.imgix.net/wysiwyg/msafe-100x100.jpg?auto=format&fit=100%2C100&ssl=1"
            alt=""
          />
          <div>
            <h3 className="std-h3">
              <b>Made Safe Certified</b>
            </h3>
            <p className="std-p">
              The MADE SAFE (Made with Safe Ingredients) seal means that a
              product is literally made with safe incredients.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="pay">
          <div className="pay-mod">
            <img
              className="pay-img"
              src="https://mamaearthp.imgix.net/wysiwyg/delivery2x.png?auto=format"
              alt=""
            />

            <p className="pay-h6">
              <b>Free Shipping</b> <br />
              On Order Above Rs.399{" "}
            </p>
          </div>
          <div className="pay-mod">
            <img
              className="pay-img"
              src="https://mamaearthp.imgix.net/wysiwyg/Group_81512x.png?auto=format"
              alt=""
            />

            <p className="pay-h6">
              <b>COD Available</b> <br />@ Rs.40 on Per Order{" "}
            </p>
          </div>
          <div className="pay-mod">
            <p className="pay-h6q">
              <b>Have Queries or Concerns ?</b>
            </p>
            <button className="pay-btn">Contact Us</button>
          </div>
        </div>
      </footer>
      <footer>
        <div className="pay">
          <div className="col">
              <h4 className="payment">PAYMENT</h4>
              <p className="payment1"><FontAwesomeIcon icon={faShield} />100% Payment Protection, Easy Return Policy</p>
              <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="" height="30px" width="70px" />
              <img src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="" height="30px" width="70px" />
              <img src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="" height="30px" width="70px" />
              <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="" height="30px" width="70px"/>
              <img src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="" height="30px" width="70px"/>
          </div>
          <div className="col1">
              <img src="https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x1002x.png?auto=format" alt="" height="100px" width="100px" />
              <img src="https://mamaearthp.imgix.net/wysiwyg/fda-100x1002x.png?auto=format" alt="" height="100px" width="100px"/>
              <img src="https://mamaearthp.imgix.net/wysiwyg/MadeSafeImages13Jan/madesafe13janlogo.png?auto=format" alt="" height="100px" width="100px"/>
          </div>
        </div>
      </footer>
      <footer style={{borderTop:"0",borderBottom:"0"}}>
        <div className="list">
            <div>
                <h2>USEFUL LINKS</h2>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Terms & Conditions- Cashback</p>
                <p>FAQ's</p>
                <p>Track Order</p>
                <p>Contact Us</p>
                <p>Site Map</p>
                <p>About Us</p>
            </div>
            <div>
                <h2>CATEGORIES</h2>
                <p>Baby</p>
                <p>Beauty</p>
                <p>Hair</p>
                <p>Face</p>
                <p>Body</p>
                <p>Gift Packs</p>
            </div>
            <div>
                <h2>MY ACCOUNT</h2>
                <p>Account</p>
                <p>Order</p>
                <p>Address</p>
            </div>
            <div>
                <img src="https://mamaearthp.imgix.net/wysiwyg/Best-Brand500x5002x.png?auto=format" width="100px" style={{paddingTop:"10px"}} alt="" />
            </div>
        </div>
      </footer>
      <footer>
          <h2>SHOW US SOME <FontAwesomeIcon style={{color:"red"}} icon={faHeart} /> LOVE ON SOCIAL MEDIA</h2>
          <div className="social">
          <p className="fa fa-facebook"></p>
          <p className="fa fa-twitter"></p>
          <p className="fa fa-envelope"></p>
          <p className="fa fa-instagram"></p>
          <p className="fa fa-youtube"></p>
          <p className="fa fa-pinterest"></p>
          </div>
      </footer>
    </div>
  )
};
