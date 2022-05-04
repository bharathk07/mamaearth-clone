import "./card.css";

export const Card = (props) => {
  return (
    <>
      <div className="cards">
        <img className="item-img"
          src="https://honasa-mamaearth-production.imgix.net/_/f/_foaming-face-wash-for-kids_.jpg?auto=compress&fit=scale&w=270&h=300"
          alt=""
        />
        <div className="desc">
          Foaming face wash for kids wit Aloevera and coconut - 400ml
        </div>
        <div className="rate-review">
         <span className="rating"> <img src="https://mamaearth.in/static/mamaearth/star.svg" alt="star" height="18px" /> <p>5.0</p> </span>
         <span className="review"> <img src="https://mamaearth.in/static/mamaearth/verified.svg" alt=""  /> <p>1 Reviews</p> </span>
        </div>
        <div className="price">₹ 349</div>
        <button>ADD TO CART</button>
      </div>
    </>
  );
};

