import { createSlice } from "@reduxjs/toolkit";

const cartState = {
    cart : JSON.parse(localStorage.getItem("addCart"))
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState : cartState,
    reducers : {
        setCartItem : (state, action) => {
            state.cart = action.payload
        }
    }
})

export const {setCartItem} = cartSlice.actions

export default cartSlice.reducer