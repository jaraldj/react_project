import CartView from "../components/cartView";
import UserContext from "../store/UseContext";
import React,{useContext, useEffect} from "react";
import Header from "../components/header";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Footer from "../components/footer";
import { setCartItem } from "../redux/slice/cartSlice";

export default function PlaceOrder(){
    const value = useContext(UserContext);
    const {orderedItem, setOrderedItem} = value;

    const {isLogged}= useSelector((state) => state.users)
    const carts = useSelector((state) => state.cartItem.cart)
    const dispatch = useDispatch()
    
    let location = useLocation()
    let login = localStorage.getItem("login")
    let navigate = useNavigate()
    useEffect(()=>{
        if(!login && isLogged == false){
            let curr_path = location.pathname;
            localStorage.setItem('currPath', curr_path)
            alert("Please Login")
            navigate('/Login')
        }
    },[isLogged])
    

    const confirmOrder = () => {
        if(!localStorage.getItem("ordered")){
            localStorage.setItem("ordered", JSON.stringify([]))
          }
          localStorage.setItem("ordered", localStorage.getItem("addCart"))
          setOrderedItem(JSON.parse(localStorage.getItem("ordered")))
          localStorage.removeItem("addCart")
          dispatch(setCartItem(("")))

          alert("Order Placed Successfully")
          navigate('/')
    console.log(orderedItem);
    }

    const del_address = () => {
        localStorage.removeItem("address")
        navigate('/address')
    }

    let address_entered = JSON.parse(localStorage.getItem("address"))

    return(
        <div className="margin-top">
            <Header />
            <div className="container">
                <h2 className="text-center">Place Order</h2>
                <div className="row">
                    <div className="col-8">
                        <h4>Address </h4>
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">{address_entered.name}</h5>
                                <h6 className="card-text">{address_entered.door_no} , {address_entered.street},</h6>
                                <h6 className="card-text">{address_entered.area} , {address_entered.city},</h6>
                                <h6 className="card-text">{address_entered.phone}</h6>
                                <h6 className="card-text">{address_entered.pin}</h6>

                                <Link to={'/address'}><button type="button" className="btn btn-light">Change address</button></Link>
                                <button className="btn btn-danger" onClick={del_address}>Delete Address</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <CartView />
                    </div>
                </div>
                <br/> <br/>
            </div>
            <div className="text-center">
                {!JSON.parse(localStorage.getItem("addCart")).length ? null : <button type="button" className="btn btn-success" onClick={confirmOrder}>Confirm Order</button>}<br/>
            </div>
            <br/>
            <Footer />
        </div>

        
    )
}