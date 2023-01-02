import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { setRegister } from "../redux/slice/registerSlice";
import { useDispatch, useSelector } from 'react-redux'
import { registerApi } from "../redux/slice/registerSlice";


export default function Register(){
    const navigate = useNavigate()



    const registerUsers = useSelector((state) => state.registerUser.reg)
    const {isRegister} = useSelector((state) => state.registerUser)
    const dispatch = useDispatch()
    console.log(registerUsers);

    if(isRegister == true){
        navigate('/Login')
    }
    
    return (
        <>
            <h2 className="mt-5 text-center">Registration</h2>
            <form className="container wrappers p-5">
                <div className="form-group">
                    <label>Enter Name : </label>
                        <input type="text" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,name:e.target.value}))} />
                    <label>Enter Email : </label>
                        <input type="email" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,email:e.target.value}))} />
                    <label>Enter Password : </label>
                        <input type="password" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,password:e.target.value}))} />
                    <label>Enter Aadhar : </label>
                        <input type="number" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,aadhar:e.target.value}))} />
                    <label>Enter Address : </label>
                        <input type="text" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,address:e.target.value}))} />
                    <label>Enter Phone : </label>
                        <input type="number" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,phone:e.target.value}))} />
                    <label>Enter City : </label>
                        <input type="text" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,city:e.target.value}))} />
                    <label>Enter Area : </label>
                        <input type="text" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,area:e.target.value}))} />
                    <label>Enter Pin : </label>
                        <input type="number" className="form-control" onChange={(e)=>dispatch(setRegister({...registerUsers,pin:e.target.value}))} />
                </div>

                    <button type="button" onClick={()=>dispatch(registerApi(registerUsers))} className="btn btn-primary mt-2">Register</button>
                <div>
                    <span>Already have an Account <Link to="/Login">Login</Link></span>
                </div>
            </form>
        </>
    )
}