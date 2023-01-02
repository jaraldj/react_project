import {createSlice} from '@reduxjs/toolkit'

const trendState = {
    trend : []
}

export const trendCoinSlice = createSlice({
    name : "currency",
    initialState : trendState,
    reducers : {
        setTrend : (state,action) => {
            state.trend = action.payload
        }
    }
})

export default trendCoinSlice.reducer
export const {setTrend} = trendCoinSlice.actions