import React from "react";
import { Routes, Route} from 'react-router-dom'
import { BabyPage } from '../components/BabyPage/BabyPage'
import { FacePage } from '../components/FacePage/FacePage'
import { HairPage } from "../components/HairPage/HairPage";
import { HomePage } from "../components/HomePage/Home";
import { ProductDetail } from "../components/ProductDetailPage/ProductDetail";
import { SignUp } from "../components/LoginPage/Login";
import { Checkout } from '../components/CheckOutPage/Checkout'
import { Otp } from '../components/OTP/Otp'


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/login" element={<SignUp/>}/>
            <Route path="/baby" element={<BabyPage/>}/>
            <Route path="/face" element={<FacePage/>}/>
            <Route path="/hair" element={<HairPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/face/:id" element={<ProductDetail/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/otp" element={<Otp/>}/>
        </Routes>
    )
}