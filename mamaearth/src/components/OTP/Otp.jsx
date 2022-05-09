import { useNavigate } from 'react-router-dom';
import './Otp.css'
import { reset } from '../Redux/action'
import { useDispatch } from 'react-redux';

export const Otp = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const validate = () =>{
        let input=document.getElementById("otp_value").value
        let otp =localStorage.getItem("otp");
        if(input === otp){
            localStorage.setItem("cartArr", JSON.stringify([]));
            dispatch(reset())
            alert("Payment Success !")
            navigate('/')
        }else{
            alert("wrong OTP !")
        }
    }
    return(
        <div className='otp-div'>
        <img src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&fit=scale" height="80px" alt=""/>
        <div class="otp_box">
        <div>
            <p className='otp-p'>Enter OTP</p>
            <input type="password" id="otp_value"/>
            <button className='otp-btn' onClick={()=>validate()}>Verify OTP</button>
        </div>
        <div>
            <img src="https://www.reson8.ae/assets/images/otp/otp-banner-image.png" alt=""/>
        </div>
        </div>
    </div>
    )
}