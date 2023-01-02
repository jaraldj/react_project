import Header from "../components/header";
import React, {useContext} from "react";
import UserContext from "../store/UseContext";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CartView from "../components/cartView";
import {useSelector, useDispatch} from 'react-redux';
import Footer from "../components/footer";
import { setCartItem } from "../redux/slice/cartSlice";

export default function MenuPage(){
    // const value = useContext(UserContext);
    // const {cartItm,setCartItm} = value;

    const menuList = useSelector((state) => state.menus.restaurant)
    const carts = useSelector((state) => state.cartItem.cart)
    const dispatch = useDispatch()

    console.log(menuList);

    const params = useParams()
    let navigate = useNavigate()
    let location = useLocation()
    

    if(!localStorage.getItem("addCart")){
        localStorage.setItem("addCart", JSON.stringify([]))
      }

    const addToCart = (val, id) => {
        if(!login){
            let curr_path = location.pathname;
            localStorage.setItem('currPath', curr_path)
            navigate('/Login')
        }else{
            let add_to_cart = {
                food_name : `${val.foodName}`,
                food_price : `${val.price}`
            }
            addLocal(add_to_cart)
        }
        
        // cartView()
    }

    const addLocal = (add_to_cart) => {
        
          let cartItem =JSON.parse(localStorage.getItem("addCart"))
          cartItem.push(add_to_cart)
          localStorage.setItem("addCart", JSON.stringify(cartItem))
    }

    // let cartItemGet = JSON.parse(localStorage.getItem("addCart"))
    const cartView = () => {
        let cartItemGet = JSON.parse(localStorage.getItem("addCart"))
        dispatch(setCartItem((cartItemGet)))
    }

    let login = localStorage.getItem("login")
    let address = localStorage.getItem("address")

    // let category_list = menuList.map((val,i) =>{
    //     return (
    //         val && val.foodMenu.map(value => value.category))
    // })



    const placeOrder = () => {
        !address ? navigate('/address') : navigate('/placeOrder')
    }

    // useEffect(()=>{
    //     cartView()
    // },[addToCart()])
    return(
        <>
        <Header />
        
        <div className="container margin-top">
            <h2 className="text-center text-muted">Menu : {params.restaurantname}</h2>
                <div className="row">
                    <div className="col-9">
                        {menuList && menuList.map((val, index)=>{
                            if(params.restaurantname === val.restaurantName){
                                return (
                                    <div key={index}>
                                        {/* <h5 className="card-title">{val.foodMenu.foodName}</h5> */}
                                        <p>{console.log(val.foodMenu)}</p>
                                        {JSON.parse(val.foodMenu).map((value, i)=>{
                                            return(
                                                <div key={i} className="card mb-3 cardBorder">

                                                    <div className="row no-gutters">   
                                                        <div className="col-md-9">
                                                            <div className="card-body pl-0">
                                                                <h5 className="card-title">{value.foodName}</h5>
                                                                <p className="card-text d-inline"><span>Price : {value.price}</span></p>
                                                                <p className="card-text"><small className="text-muted">{value.desc}</small></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 my-auto addBtn">
                                                            
                                                            <button className="btn btn-outline-success my-2 my-sm-0 ml-5" onClick={()=>{addToCart(value);cartView()}} type="submit">Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>              
                                )
                            }else {
                                return(
                                    <>
                                {/* {val.foodMenu.map((value, i)=>{
                                    if(params.restaurantname === value.category){
                                    return(
                                        <div key={i} className="card mb-3 cardBorder">

                                            <div className="row no-gutters">   
                                                <div className="col-md-9">
                                                    <div className="card-body pl-0">
                                                        <h5 className="card-title">{value.foodName}</h5>
                                                        <p className="card-text d-inline"><span>Price : {value.price}</span></p>
                                                        <p className="card-text"><small className="text-muted">{value.desc}</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 my-auto addBtn">
                                                    
                                                    <button className="btn btn-outline-success my-2 my-sm-0 ml-5" onClick={()=>{addToCart(value);cartView()}} type="submit">Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                })} */}
                                
                                </>
                                )
                            }

                        })}
                    </div>
                    
                    <div className="col-3">
                        <h2 className="text-center">Cart</h2>
                        {!login ? <h4 className="text-center text-muted mt-5">Login to add food</h4> : !JSON.parse(localStorage.getItem("addCart")).length ? <h4 className="text-center text-muted mt-5">Add Food to Cart</h4> : <CartView /> }
                        <br/> <br/>
                        <div>
                        {!login ? null : !JSON.parse(localStorage.getItem("addCart")).length ? null :  <button type="button" className="mt-2 btn btn-outline-success text-center float-end" onClick={placeOrder}>Place Order</button> }

                        </div><br/> <br/><br/> <br/>
                    </div>


                </div>
        </div>

        <Footer />

        </>
    )
}