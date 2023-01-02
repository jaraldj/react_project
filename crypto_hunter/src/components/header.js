import React,{useState, useEffect} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import { setCurrency , setRupee} from '../redux/slice/crrencySlice';
import {setUsers} from '../redux/slice/userSlice'
import AuthModal from './Authentication/AuthModal';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
    Button
  } from "@material-ui/core";
import UserSideBar from './Authentication/UserSideBar';

export default function Header() {

  const dispatch = useDispatch()
  const currencyVal = useSelector((state) => state.currency.currencyValue)
  const symbol = useSelector((state) => state.currency.rupee)
  const userAuth = useSelector((state) => state.user.user)

  useEffect(()=>{
    if(currencyVal == "INR"){
      dispatch(setRupee("₹"))
    }else if(currencyVal=='USD'){
      dispatch(setRupee("$"))
    }
  },[currencyVal])
  console.log(symbol);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(setUsers(user));
      else dispatch(setUsers(null));
    });
  },[])
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>
          <a className="navbar-brand text-warning" href="#">Crypto Hunt</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto"></ul>
            <ul className='navbar-nav mx-3'>
              <select onChange={(e)=>dispatch(setCurrency(e.target.value))}>
                <option value={"INR"}>INR</option>
                <option value={"USD"}>USD</option>
              </select>
            </ul>

            {userAuth ? <UserSideBar /> : <AuthModal />}
          </div>
        </div>
      </nav>

    </div>
  )
}
