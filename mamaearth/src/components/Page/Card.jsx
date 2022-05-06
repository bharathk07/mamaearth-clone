import "./Card.css";

export const Card = ({image , desc, price , cart, data }) => {
  let rating = (Math.random() * (4 - 4 + 1) + 4).toFixed(1)
  let reviews = Math.floor((Math.random() * (300 - 100 + 1) + 100));
  return (
    <>
      <div className="cards">
        <img className="item-img"
          src={image}
          alt=""
        />
        <div className="desc">
          {desc}
        </div>
        <div className="rate-review">
         <span className="rating"> <img src="https://mamaearth.in/static/mamaearth/star.svg" alt="star" height="18px" /> <p>{rating}</p> </span>
         <span className="review"> <img src="https://mamaearth.in/static/mamaearth/verified.svg" alt=""  /> <p>{`${reviews} Reviews`}</p> </span>
        </div>
        <div className="price">{`₹.${price[3]}${price[4]}${price[5]}`}</div>
        <button onClick={()=>cart(data)} className="cart_btn">ADD TO CART</button>
      </div>
    </>
  );
};

