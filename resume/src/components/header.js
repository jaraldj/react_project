import UserContext from "../store/UserContext";
import {useContext, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export default function Header(){
    const value = useContext(UserContext);
    const {isLogged,setIsLogged,currentUser} = value;
    const navigate = useNavigate()

    // useEffect(()=>{
    //     if(!isLogged)
        
    // })

    const logout_fun = () => {
        localStorage.removeItem("login")
        localStorage.removeItem("currUser")
        setIsLogged(false)
        navigate('/')
    }
    return(
        <>
            <nav className="navbar navbar-dark bg-dark">
                {/* <h2 className="text-light">Welcome!! {currentUser.name}</h2> */}
                <button type="button" className="btn btn-danger btn-border mx-auto" onClick={logout_fun}>Logout</button>
            </nav>
        </>
    )
}