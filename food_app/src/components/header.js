import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { setIsLogged } from "../redux/slice/loginSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    let login = localStorage.getItem("login")
    let currUser = localStorage.getItem("curr_user")
    let location = useLocation()
    let navigate = useNavigate()

    console.log(currUser);

    const {isLogged, currentUser}= useSelector((state) => state.users)


    const chkLogin = () => {
        console.log(location.pathname);
        let curr_path = location.pathname;
        localStorage.setItem('currPath', curr_path)
        navigate('/Login')
    }


    const chkLogOut = () => {
        localStorage.removeItem("login")
         setIsLogged(false)
    }

    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-fix">
                <div className="container">
                    <Link to={'/'} className="logoLink">Foodiez</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav mx-auto">
                        
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {isLogged == false && !login ? null : <h5 className="px-2 text-secondary">Welcome {currUser}</h5>}
                        </form>
                        {/* <div className="px-3">
                            <form className="form-inline my-2 my-lg-0">
                                <Link to={'/placeOrder'}><FontAwesomeIcon className="text-secondary" icon={faCartShopping} /></Link>
                            </form>
                        </div> */}
                        

                        <form className="form-inline my-2 my-lg-0">
                            {isLogged == false && !login ? <button className="btn btn-outline-success my-2 my-sm-0" onClick={chkLogin} type="button">Login</button> : <button className="btn btn-outline-danger my-2 my-sm-0" onClick={chkLogOut} type="submit">Logout</button>}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}