import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const registerState = {
    reg : {
        request:"create_candidate",
    },
    isRegister : false,
    address : {

    }
}

export const registerSlice = createSlice({
    name : "register",
    initialState : registerState,
    reducers : {
        setRegister : (state, action)=>{
            state.reg = action.payload
        },
        setIsRegister : (state, action)=>{
            state.isRegister = action.payload
        },
        setAddress : (state, action) => {
            state.address = action.payload
        }
    }
})

export const registerApi = (registerUsers) => async(dispatch) => {
    const {data} = await axios.post('https://karka.academy/api/action.php',JSON.stringify(registerUsers))
    if(data.status === 'success'){
        dispatch(setIsRegister(true))
    }
}

export const {setRegister, setIsRegister, setAddress} = registerSlice.actions

export default registerSlice.reducer