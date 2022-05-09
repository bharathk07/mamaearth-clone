export const CART = "CART"
export const RE_CART = "RE_CART"

export const cart = (data) =>{
    return{
        type : CART,
        payload : data
    }
}

export const reset = () =>{
    return{
        type : RE_CART,
        payload : 0
    }
}