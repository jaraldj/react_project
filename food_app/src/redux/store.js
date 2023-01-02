import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/loginSlice";
import menuSlice from "./slice/menuSlice";
import registerSlice from "./slice/registerSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer : {
        menus : menuSlice,
        users : userSlice,
        registerUser : registerSlice,
        cartItem : cartSlice,
    },
})
