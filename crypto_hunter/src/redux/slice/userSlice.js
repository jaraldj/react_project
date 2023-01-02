import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const userState = {
    signUp : {

    },
    login : '',
    user : null,
    waitlist: []
}

export const userSlice = createSlice({
    name : "user",
    initialState : userState,
    reducers : {
        setEmail : (state,action) => {
            state.signUp = action.payload
        },
        setPassword : (state,action) => {
            state.signUp = action.payload
        },
        setConfirmPassword : (state,action) => {
            state.signUp = action.payload
        },setLogEmail : (state,action) => {
            state.login = action.payload
        },
        setLogPassword : (state,action) => {
            state.login = action.payload
        },
        setUsers : (state, action) => {
            state.user = action.payload
        },
        setWaitList : (state,action) => {
            state.waitlist = action.payload
        }
    }
})


export const getWatchList = (userAuth) => async(dispatch) => {
    const watchlist = await axios.get(`https://crypto-hunter-e9965-default-rtdb.asia-southeast1.firebasedatabase.app/${userAuth.uid}/watchlist.json`)
    let list = []
    for(let key in watchlist.data){
      list.push({...watchlist.data[key],coinId:key})
    }
    dispatch(setWaitList(list))
  }

  export const remove = ({value, userAuth})=>async(dispatch)=>{
    console.log(value);
    const delWatchlist = await axios.delete(`https://crypto-hunter-e9965-default-rtdb.asia-southeast1.firebasedatabase.app/${userAuth.uid}/watchlist/${value.coinId}.json`)
    dispatch(getWatchList(userAuth))
  }

export default userSlice.reducer
export const {setEmail, setPassword, setConfirmPassword, setLogEmail, setLogPassword, setUsers, setWaitList, waitlist} = userSlice.actions