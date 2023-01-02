import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserContext from '../store/UserContext'


export default function Login(){
    const navigate = useNavigate()
    const value = useContext(UserContext);
    const {isLogged,setIsLogged,setCurrentUser,currentUser} = value;
    let login = localStorage.getItem("login")


    useEffect(()=>{
        if(isLogged && login){
            navigate('/home')
        }else{
            navigate('/')
        }
    },[isLogged,navigate,login])

    const [rdata, setData] = useState(
        {
            request: "candidate_login",
            email: "vijay@gmail.com",
            password: "pass@123"
        }
    )
    const chkLogin = async() => {
        
        
        const {data} = await axios.post('https://karka.academy/api/action.php',JSON.stringify(rdata))
        console.log(data);
        if(data.status==='success'){
            setIsLogged(true);
            setCurrentUser(data.data)
            localStorage.setItem(`login`,true)
            localStorage.setItem("currUser",currentUser.name)
            navigate("/home");
        }
    }
    
    return(
        <>
            <h2 className="mt-5 text-center">LOGIN</h2>
            <form className="container wrapper p-5">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={rdata.email} onChange={(e)=>setData({...rdata,email:e.target.value})} aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={rdata.password} onChange={(e)=>setData({...rdata,password:e.target.value})} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" onClick={chkLogin} className="btn btn-primary mt-2">Login</button>
                <div>
                    <span>Don't have an Account <Link to="/register">Register</Link></span>
                </div>
            </form>
        </>
        
    )
}

