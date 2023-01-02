import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const userState = {
    loginData : {
        request: "candidate_login",
    },
    isLogged : false,
    currentUser : ''     
}

export const userSlice = createSlice({
    name : "user",
    initialState : userState,
    reducers : {
        setLogin : (state, action) => {
            state.loginData = action.payload
        },
        setIsLogged : (state, action) => {
            state.isLogged = action.payload
        },
        setCurrentUser : (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const loginAPI = (user) => async (dispatch) =>{
    console.log(user);
    const {data} = await axios.post('https://karka.academy/api/action.php?request=candidate_login',JSON.stringify(user))
    console.log(data);
    if(data.status === 'success'){
        dispatch(setIsLogged(true))
        dispatch(setCurrentUser(data.data))
        localStorage.setItem("login",true)
    }
    console.log(data);
    console.log(userState);
}
console.log(userState);

export const {setLogin, setIsLogged, setCurrentUser } = userSlice.actions

export default userSlice.reducer