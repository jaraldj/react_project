import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { setCurrentUser, setLogin } from '../redux/slice/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { loginAPI } from '../redux/slice/loginSlice'

export default function Login(){
    const navigate = useNavigate()
    let login = localStorage.getItem("login")


    const user = useSelector((state) => state.users.loginData)
    const dispatch = useDispatch()
    console.log(user)
    const {isLogged, currentUser}= useSelector((state) => state.users)

    let navigate_path = localStorage.getItem('currPath')


    useEffect(()=>{
        if(isLogged === true || login){
            localStorage.setItem('curr_user', currentUser.name)
            console.log(navigate_path);
            navigate(navigate_path)
            localStorage.removeItem("currPath")
        }
    },[isLogged])


    console.log(user);

    // const [rdata, setData] = useState(
    //     {
    //         // request: "candidate_login",
    //         email: "",
    //         password: ""
    //     }
    // )


    // const chkLogin = async() => {
        
    //     const {data} = await axios.post('https://karka.academy/api/action.php',JSON.stringify(user))
    //     console.log({data});
    //     if(data.status==='success'){
    //         setIsLogged(true);
    //         // setCurrentUser(data.data)
    //         localStorage.setItem(`login`,true)
    //         // localStorage.setItem("currUser",currentUser.name)
    //         navigate("/");
    //     }
    // }
    
    return(
 
        <>
            <h2 className="mt-5 text-center">LOGIN</h2>
            <form className="container wrapper p-5">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>dispatch(setLogin({...user, email:e.target.value}))} aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>dispatch(setLogin({...user, password:e.target.value}))} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" onClick={()=>dispatch(loginAPI(user))} className="btn btn-primary mt-2">Login</button>
                <div>
                    <span>Don't have an Account <Link to="/register">Register</Link></span>
                </div>
            </form>
        </>
        
    )
}

