import {createSlice} from '@reduxjs/toolkit'

const currencyState = {
    currencyValue : "INR",
    rupee : "₹"
}

export const currencySlice = createSlice({
    name : "currency",
    initialState : currencyState,
    reducers : {
        setCurrency : (state,action) => {
            state.currencyValue = action.payload
        },
        setRupee : (state,action) => {
            state.rupee = action.payload
        }
    }
})

export default currencySlice.reducer
export const {setCurrency, setRupee} = currencySlice.actions