import React from "react";
import { Routes, Route} from 'react-router-dom'
import { BabyPage } from '../components/BabyPage/BabyPage'
import { FacePage } from '../components/FacePage/FacePage'


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/baby" element={<BabyPage/>}/>
            <Route path="/face" element={<FacePage/>}/>
            {/* <Route path="/face/:id" element={<ProductDetail/>}/> */}
        </Routes>
    )
}