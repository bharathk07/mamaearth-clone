import React from "react";
import { Routes, Route} from 'react-router-dom'
import { BabyPage } from '../components/BabyPage/BabyPage'
import { FacePage } from '../components/FacePage/FacePage'
import { HairPage } from "../components/HairPage/HairPage";


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/baby" element={<BabyPage/>}/>
            <Route path="/face" element={<FacePage/>}/>
            <Route path="/hair" element={<HairPage/>}/>
            {/* <Route path="/face/:id" element={<ProductDetail/>}/> */}
        </Routes>
    )
}