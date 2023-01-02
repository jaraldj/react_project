import Header from "../components/header"
import Footer from "../components/footer"
import { setAddress } from "../redux/slice/registerSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


export default function Address(){

    const address_entered = useSelector((state) => state.registerUser.address)
    const dispatch = useDispatch()
    let navigate = useNavigate()


    console.log(address_entered);
    const saveAddress = () => {
        if(!address_entered.name || !address_entered.door_no || !address_entered.street || !address_entered.area || !address_entered.city || !address_entered.phone || !address_entered.pin){
            alert("Please fill missing details")
        }else{
            localStorage.setItem("address", JSON.stringify(address_entered))
            dispatch(setAddress(JSON.parse(localStorage.getItem("address"))));
            navigate('/placeOrder')
        }
    }

    // let stored_address = JSON.parse(localStorage.getItem("address"))

    return (
        <div>
            <Header />
            <form className="container wrappers p-5 margin-top">
                <div className="form-group">
                    <label>Enter Name : </label>
                        <input type="text" value={address_entered.name} className="form-control" onChange={(e)=>dispatch(setAddress({...address_entered,name:e.target.value}))} />
                    <label>Enter Door No : </label>
                        <input type="text" value={address_entered.door_no} className="form-control" onChange={(e)=>dispatch(setAddress({...address_entered,door_no:e.target.value}))} />
                    <label>Enter Street : </label>
                        <input type="text" value={address_entered.street} className="form-control" onChange={(e)=>dispatch(setAddress({...address_entered,street:e.target.value}))} />
                    <label>Enter Area : </label>
                        <input type="text" value={address_entered.area} className="form-control" onChange={(e)=>dispatch(setAddress({...address_entered,area:e.target.value}))} />
                    <label>Enter City : </label>
                        <input type="text" value={address_entered.city} className="form-control" onChange={(e)=>dispatch(setAddress({...address_entered,city:e.target.value}))} />
                    <label>Enter Phone : </label>
                        <input type="number" value={address_entered.phone} className="form-control" onChange={(e)=>dispatch(setAddress({...address_entered,phone:e.target.value}))} />
                    <label>Enter Pin : </label>
                        <input type="number" value={address_entered.pin} className="form-control" onChange={(e)=>dispatch(setAddress({...address_entered,pin:e.target.value}))} />
                </div>

                    <button type="button" onClick={saveAddress} className="btn btn-primary mt-2">Save Address</button>
            </form>
            <Footer />
        </div>
    )
}