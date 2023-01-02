import { configureStore } from "@reduxjs/toolkit";
import  currencySlice  from "./slice/crrencySlice";
import trendCoinSlice from "./slice/trendCoinSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
    reducer : {
        currency : currencySlice,
        trend : trendCoinSlice,
        user : userSlice,
        
    },
})