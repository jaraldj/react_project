import React,{useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function Register(){
    const navigate = useNavigate()

    const [registerUser, setRegisterUser] = useState({
        request:"create_candidate"
    })

    const register = async() => {
    console.log(registerUser);

        const {data} = await axios.post('https://karka.academy/api/action.php?',JSON.stringify(registerUser))
        console.log(data);
        if(data.success){
            navigate('/')
        }
    }
    return (
        <>
            <h2 className="mt-5 text-center">Registration</h2>
            <form className="container wrappers p-5">
                <div className="form-group">
                    <label>Enter Name : </label>
                        <input type="text" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,name:e.target.value})} />
                    <label>Enter Email : </label>
                        <input type="email" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,email:e.target.value})} />
                    <label>Enter Password : </label>
                        <input type="password" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,password:e.target.value})} />
                    <label>Enter Aadhar : </label>
                        <input type="number" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,aadhar:e.target.value})} />
                    <label>Enter Address : </label>
                        <input type="text" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,address:e.target.value})} />
                    <label>Enter Phone : </label>
                        <input type="number" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,phone:e.target.value})} />
                    <label>Enter City : </label>
                        <input type="text" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,city:e.target.value})} />
                    <label>Enter Area : </label>
                        <input type="text" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,area:e.target.value})} />
                    <label>Enter Pin : </label>
                        <input type="number" className="form-control" onChange={(e)=>setRegisterUser({...registerUser,pin:e.target.value})} />
                </div>

                    <button type="button" onClick={register} className="btn btn-primary mt-2">Register</button>
                <div>
                    <span>Already have an Account <Link to="/">Login</Link></span>
                </div>
            </form>
        </>
    )
}