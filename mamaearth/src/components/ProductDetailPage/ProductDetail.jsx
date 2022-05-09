import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import axios from "axios";

export const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(1);
  let {id} = useParams();
  useEffect(() => {
    axios
      .get(`https://nitrogen-project.herokuapp.com/hair_page/${id}`)
      .then((data) => setData(data.data));
  }, []);
  console.log(data);

  return (
    <div className="brkbjr">
      <div className="hbRWNi">
        <div className="gMJIDH">
          <div style={{ display: "flex" }}>
            <div className="bwzWWK">
              <div className="image-gallery-image">
                <img src={data.img} alt="" />
              </div>
            </div>

            <div className="fDzVJS">
              <div className="cMrDeE">
                <div
                  className="dJsjSb"
                  width="768"
                  style={{
                    MarginLeft: "0px",
                    width: "90%",
                  }}
                >
                  <a href="/" className="bZiWWr">
                    Home
                  </a>
                  <svg
                    viewBox="0 0 477.175 477.175"
                    width="2rem"
                    height="0.6em"
                    left-margin="0.7em"
                    color="#f9f9f9"
                  >
                    <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                  </svg>
                  <a href="/product-category/baby-shampoo" className="bZiWWr">
                    {data.category}
                  </a>
                  <svg
                    viewBox="0 0 477.175 477.175"
                    width="2rem"
                    height="0.6em"
                    left-margin="0.7em"
                    color="#f9f9f9"
                  >
                    <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                  </svg>
                  <a href="*" className="isHcOi">{data.desc}</a>
                </div>
                <h1 className="dTITDo">{data.desc}</h1>
                <div className="subtitle">
                  Natural Cleansers | Tear-Free Formula
                </div>
                <div className="jxKkET ReviewBox" wrap="no-wrap">
                  <a href="#review-list" className="rating">
                    <img src="" alt="" height="16px" />★ {data.rating}
                  </a>
                  <a href="#review-list" className="review-count">
                    <img
                      src="https://media.istockphoto.com/vectors/profile-verification-check-marks-icons-vector-illustration-vector-id1313547780?k=20&m=1313547780&s=612x612&w=0&h=dpYT_kesPq9p3wHVyXTXdMy71_o-YczCkG0zMrsNfiA="
                      height="16px" alt=""
                    />
                    45 Verified Ratings
                  </a>
                </div>
                <div
                  style={{ height: "1rem", display: "block", width: "100%" }}
                ></div>

                <div className="MzUhh">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bmhhIJ">Price</td>
                      </tr>
                      <tr>
                        <td className="price">{data.price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="incl-tax">Inclusive of all Taxes</div>
                <div
                  style={{ textAlign: "left", margin: "2px 0" }}
                  className="elzEVB"
                >
                  Currently in 133 carts
                </div>
                <img
                  style={{ maxWidth: "35%", textAlign: "left" }}
                  src="https://mamaearthp.imgix.net/wysiwyg/goodness-icons.png"
                  alt="badges"
                  className="pdp_image"
                />
              </div>
            </div>
          </div>
          <div className="cMqoec">
            <div className="prod">Product Description</div>
            <div
              className="DescriptionRevamp-sc-d946nb-0 kQWIHx"
              style={{ fontSize: "1rem" }}
            >
              <p>
                Hi! I am Mamaearth Gentle Cleansing Shampoo. I understand that
                shampooing is not an easy task and involves effort in real
                cleaning. I also understand that little ones are quite
                uncomfortable in getting ahead bath and the shampoo has to be
                quick and efficient. That’s why I am here! Let your baby enjoy
                my thick, soft, and instant foam while I gently cleanse hair and
                scalp. My 100% toxin-free formula gives your baby soft and
                nourished hair. I take special care not to irritate those
                sensitive eyes and be gentle on the skin. I am also free from
                harmful chemicals like SLS, Parabens, Sulfates, and other such
                chemicals, ensuring a safe and happy bath time. Also, I come
                with MadeSafe Certification.
              </p>
            </div>
            <div color="#F2F2F2" className="eFLmsU colored-line"></div>
          </div>

          <div className="cMqoec"></div>

          <div className="dkcZPs">
            <div className="atc-box">
              <div className="MzUhh">
                <table>
                  <tbody>
                    <tr>
                      <td className="bmhhIJ">Price</td>
                    </tr>
                    <tr>
                      <td className="price">{data.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="incl-tax">Inclusive of all Taxes</div>
              <div
                style={{ textAlign: "left", margin: "2px 0" }}
                className="elzEVB"
              >
                Currently in 133 carts
              </div>
              <div className="ReviewBox" wrap="no-wrap">
                <a href="#review-list" className="rating">
                  <img src="" alt="" height="16px" />★{data.rating}
                </a>
                <a href="#review-list" className="review-count">
                  <img
                    src="https://media.istockphoto.com/vectors/profile-verification-check-marks-icons-vector-illustration-vector-id1313547780?k=20&m=1313547780&s=612x612&w=0&h=dpYT_kesPq9p3wHVyXTXdMy71_o-YczCkG0zMrsNfiA="
                    height="16px" alt=""
                  />
                  45 Verified Reviews
                </a>
              </div>

              <div className="fOFLeU">
                <div style={{ marginTop: "0.75rem" }}>Quantity</div>
                <div className="jHAKej qty-selector">
                  <button
                    onClick={() => {
                      if (qty > 1) setQty(qty - 1);
                    }}
                    className="icon-holder"
                  >
                    <i
                      fill="currentColor"
                      style={{ display: "inline-block" }}
                      className="minus-icon"
                    >
                      <svg
                        fill="currentColor"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1h10.799C15.952,9,16,9.447,16,10z"></path>
                      </svg>
                    </i>
                  </button>
                  <input className="product-amount-label" value={qty} />
                  <button
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                    className="icon-holder"
                  >
                    <i
                      fill="currentColor"
                      style={{ display: "inline-block" }}
                      className="plus-icon"
                    >
                      <svg
                        fill="currentColor"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
    C15.952,9,16,9.447,16,10z"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </div>
                <button
                  style={{
                    backgroundColor: "#00aeef",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  className="cLpIaN ATC_Button"
                >
                  <span
                    className="addTocart_pdp"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    Add To Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="kLDsun">
          <div
            style={{ padding: "0 5px", maxWidth: "100vw", overflowX: "hidden" }}
          >
            <div className="cMqoec">
              <div className="eQqUUy">
                <h2>What to Expect From Mamaearth </h2>
                <div className="html">
                  <ul className="result-list">
                    <li>
                      <div className="result-img">
                        <img
                          src="https://mmrth-mg-cs.honasa-production.net/pub/media/wysiwyg/015.jpg"
                          alt="Baby shampoo for hair with Natural Cleansers"
                        />
                      </div>
                      <h2>Natural Cleansers</h2>
                      <span
                        className="result-content"
                        style={{ padding: 0, textAlign: "center" }}
                      >
                        Aloe Vera Extract moisturizes and nourishes the baby’s
                        delicate scalp skin.
                      </span>
                    </li>
                    <li>
                      <div className="result-img">
                        <img
                          src="https://mmrth-mg-cs.honasa-production.net/pub/media/wysiwyg/016.jpg"
                          alt="Baby dandruff shampoo with Tear-Free Formula"
                        />
                      </div>
                      <h2>Tear-Free Formula</h2>
                      <span
                        className="result-content"
                        style={{ padding: 0, textAlign: "center" }}
                      >
                        It is Tear-free, gentle yet efficient, with a 5.6 pH
                        level – best suited for baby skin.
                      </span>
                    </li>
                    <li>
                      <div className="result-img">
                        <img
                          src="https://mmrth-mg-cs.honasa-production.net/pub/media/wysiwyg/017.jpg"
                          alt="Best baby shampoo for hair growth"
                        />
                      </div>
                      <h2>Nourishes The Body</h2>
                      <span
                        className="result-content"
                        style={{ padding: 0, textAlign: "center" }}
                      >
                        It is enriched with the goodness of Coconut-based
                        cleansers and Jojoba Oil. They help nourish the skin and
                        increase its moisture content.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div color="#F2F2F2" className="eFLmsU colored-line"></div>
              <div
                style={{ height: "10px", display: "block", width: "100%" }}
              ></div>
              <div className="cat-list">
                <h2 className="kAfcau">Key Ingredients</h2>
                <h2 className="kAfcau">How to Use</h2>
                <h2 className="kAfcau">Who can Use</h2>
                <h2 className="kAfcau">Why Mamaearth</h2>
                <h2 className="kAfcau">Ingredient List</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
