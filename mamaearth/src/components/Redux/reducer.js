import { CART, RE_CART } from "./action";

const init = { count : 0}

export const cartReducer = (state=init , { type , payload }) =>{
    switch(type){
        case CART :
            return{ ...state, count : state.count + payload}
        case RE_CART :
            return { ...state , count: 0 + payload}
        default :
            return state
    }
}