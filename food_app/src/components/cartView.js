import React, {useContext, useEffect} from "react";
import UserContext from "../store/UseContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { setCartItem } from "../redux/slice/cartSlice";


export default function CartView(){

    const value = useContext(UserContext);
    const {isLogged,setIsLogged,menu,cartItm,setCartItm} = value;

    const carts = useSelector((state) => state.cartItem.cart)
    const dispatch = useDispatch()
    // dispatch(setCartItem(JSON.parse(localStorage.getItem("addCart"))))

    // console.log(carts);

    useEffect(()=>{
        dispatch(setCartItem(JSON.parse(localStorage.getItem("addCart"))))
    },[])

    console.log(carts);



    let cart_total = JSON.parse(localStorage.getItem("addCart"))
    console.log(cart_total);
    let sub_total_arr = cart_total.map(val =>val.food_price)
    const initialValue = 0;
    
    const sub_total = sub_total_arr.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), initialValue);


    const deleteItem = (i) => {
        let del = carts.filter((val, index) => i != index)
        localStorage.setItem("addCart", JSON.stringify(del))
        dispatch(setCartItem(JSON.parse(localStorage.getItem("addCart"))))
    }
    return (
        <>
            {carts && carts.map((val, i)=>{
                        return (
                            <div key={i}>

                                <div className="card-body">
                                    <p className="card-text">
                                        <div className="row m-0">
                                            <div className="col-9 p-0">{val.food_name}</div>
                                            <div className="col-3 p-0 pl-2 text-end"> <span>{val.food_price}</span></div>
                                        </div>
                                    </p>
                                        {/* <a href="#" className="card-link" onclick="deleteSelect('+ i +')"><i className="fa-solid fa-trash text-danger"></i></a> */}
                                        {/* <button type="button" className="btn btn-outline-danger" onClick={()=>deleteItem(i)}>Delete</button> */}
                                    <span onClick={()=>deleteItem(i)}>
                                        <FontAwesomeIcon color="#dc3545" icon={faTrash} />
                                    </span><br/><br/>
                                </div>
                            </div>
                        )
                    })}
                    
                    <div className="float-end">
                        <h4>Sub Total : {sub_total}</h4>
                        <span>Extra charges may apply</span>
                    </div>
                    <br/> 

        </>
    )
}