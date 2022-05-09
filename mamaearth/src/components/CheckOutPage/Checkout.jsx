import "./Checkout.css";
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'
export const Checkout = () => {
    let cartArr = JSON.parse(localStorage.getItem("cartArr"))
    const total = cartArr.reduce((pre,cur)=>pre + Number(cur.price[3]+cur.price[4]+cur.price[5]),0)
    const navigate = useNavigate()

    const sendOtp = () =>{
        alert("OTP Send !")
        let otp = Math.floor(1000+Math.random()*9000)
        localStorage.setItem("otp",otp)
        axios.post("https://mama-earth.herokuapp.com/otp",{
            otp
        }).then((res)=>res.json());
        navigate('/otp')
    }

  return (
    <div className="main">
      <div className="left">
        <div className="left-1">
          <p>Hi Ritu, Welcome to Mamaearth</p>
          <h3>New Delivery Address</h3>
        </div>
        <div className="left-2">
          <input type="text" placeholder="First Name*" />
          <input type="text" name="" placeholder="Last Name*" />
        </div>
        <div className="left-3">
          <input type="text" placeholder="Email ID" />
          <input type="text" placeholder="Phone Number*" />
        </div>
        <div className="left-4">
          <input type="text" placeholder="PIN Code*" />
          <input type="text" placeholder="Code*" />
          <input type="text" placeholder="State*" />
        </div>
        <div className="left-5">
          <input
            type="text"
            placeholder="Address(House No,Building,Street,Area)*"
          />
        </div>
        <div className="left-6">
          <p>Select the type of the Address</p>
          <div className="left-61">
            <button>Home </button>
            <button>Work </button>
            <button>Other</button>
          </div>
          <div className="left-62">
            <input type="Checkbox" /> Make this as my default address
          </div>
        </div>
        <div className="left-7">
          <div className="left-71">
            <input type="radio" />
            UPI <br />
            <hr />
            <input type="radio" className="radio" />
            Credit/Debit Card
            <br />
            <hr />
            <input type="radio" />
            Net Banking
            <br />
            <hr />
            <input type="radio" />
            Wallets
            <br />
            <hr />
            <input type="radio" />
            Cash on Delivery
            <br />
          </div>
          <div className="left-72">
            <div className="left-721">
              <div className="Apply-1">
                <p>Pay Using Credit Or Debit Cards</p>
              </div>
              <div className="Apply-2">
                Applied : Extra 5% Off with Your Order
              </div>
            </div>
            <div className="left-722">
              <input type="text" placeholder="Card Number" />
            </div>
            <div className="left-723">
              <input className="lf-1" type="text" placeholder="yy/mm" />
              <input type="text" className="lf" placeholder="CVV" />
              <img
                src="https://mamaearthp.imgix.net/wysiwyg/creditCardImage.png?auto=format"
                alt=""
              />
            </div>
            <div className="left-722">
              <input type="text" placeholder="Name on the Card" />
            </div>
            <div className="left-722">
              <button onClick={()=>sendOtp()}>PLACE ORDER</button>
            </div>
            <div className="left-73">
              <img
                src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format"
                alt=""
              />
              <p>100% Payment Protection, Easy Return Policy</p>
            </div>
            <div className="left-74">
              <img
                src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format"
                alt=""
              />
              <img
                src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format"
                alt=""
              />
              <img
                src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format"
                alt=""
              />
              <img
                src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format"
                alt=""
              />
              <img
                src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format"
                alt=""
              />
            </div>
            <div className="left-75">
              <input type="checkbox" /> By placing this order, you agree to
              Mamaearth's Term and Condition and Privacy Policy.
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-1">
          <li>Order Summary </li>
          <li>CHANGE</li>
        </div>
        {cartArr.map((e)=>{
            return (
                <div key={e.id} className="right-2">
                <div className="right-21"> <img src={e.img} height="85px" style={{padding:"2px"}} alt="" /> </div>
                <div className="right-22">
                  <div className="right-221">
                    {e.desc}
                  </div>
                  <div className="right-222">
                    <h4>{e.price}</h4>
                    <h4>Qty:1</h4>
                  </div>
                </div>
              </div>
            )
        })}


        <div className="right-3"></div>
        <div className="right-4">APPLY OFFERS</div>
        <div className="right-3"></div>
        <div className="right-5">
          <img src="https://mamaearth.in/static/mamaearth/ruppee.svg" alt="" />{" "}
          <div>You save ₹14.95 on this order</div>
        </div>
        <div className="right-6">
          <h3> Price Summary </h3>
        </div>
        <div className="right-7">
          <div className="right-71">
            <li>Order Total</li>
            <li>{`₹${total}`}</li>
          </div>
          <div className="right-line"></div>
          <div className="right-72">
            <li>Shipping </li>
            <li>₹89.00</li>
          </div>
          <div className="right-line"></div>
          <div className="right-73">
            <li>5% online payment discount</li>
            <li>- ₹199.00</li>
          </div>
          <hr />
          <div className="right-74">
            <li>Grand Total</li>
            <li>{`₹${total+89-199}`}</li>
          </div>
        </div>
      </div>
    </div>
  );
};
