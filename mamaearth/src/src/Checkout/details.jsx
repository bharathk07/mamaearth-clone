import "./details.css"
export const Pro=()=>{
   
return( <div className="main">
    {/* left side of page */}
<div className="left">
<p>Hi Chanchal, Welcome to Mamaearth</p>

<div className="details">
<h3 className="addTag"><b>New Delivery Address</b></h3>
<input type="text" placeholder="First Name" className="inp1"/><input type="text" placeholder="Last Name" className="inp1"/>
<br></br>
<input type="email" placeholder="Enter email-id" className="inp1"/>
<input type="number" placeholder="Phone Number" className="inp1"/>
<br></br>
<input type="number" placeholder="Pin Code"/>
<input type="text" placeholder="City"/>
<input type="text" placeholder="State"/>
<br></br>
<input type="text" placeholder="Address(House No, Building, Street, Area)"/>
<p>Select the type of the Address</p>
<button>Home</button><button>Work</button><button>Other</button>
<br></br>
<input type="checkbox" value=""/><label>Make this as my default address</label>
</div>
<h3><b>Choose payment method</b></h3>
<div className="paydetails">
   
   <div className="box1">
       <input type="radio"/><label>UPI</label><br></br>
       <input type="radio"/><label>Debit/Credit</label><br></br>
       <input type="radio"/><label>Wallet</label><br></br>
       <input type="radio"/><label>Cash on Delivery</label><br></br>
   </div>
   <div className="box2">
       <p>Pay using Credit or Debit Card</p>
       <input type="number" placeholder="Card Number"/>
       <br></br>
       <input type="number" placeholder="MM/YYYY" /><input type="number" placeholder="CVV"/>
       <br></br>
       <input type="text" placeholder="Name on the card"/><br></br>
       <button>PLACE ORDER</button>
   </div>
</div>
</div>



















{/* Right side of page */}
<div className="right">
<h3><b>Order Summary</b></h3>
<div className="productAdd">Added product</div>
<div className="offCoupon">
    <p>Applied Offer</p>
    <p>Coupon</p>
</div>
<div className="totalpay">
    <h3><b>Price Summary</b></h3>
    <p>Order Total</p>
    <p>coupon Discount</p>
    <p>Shipping</p>
    <p>5% online payment discount</p>
    <p>Grand Total</p>
</div>
</div>
</div>
)
}