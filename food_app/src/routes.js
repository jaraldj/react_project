import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from 'react-router-dom'
import React,{useState} from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import UserContext from './store/UseContext'
import MenuPage from './pages/Menu'
import PlaceOrder from './pages/PlaceOrder'
import Register from './pages/Register'
import Address from './pages/Address'


export default function MainRoutes(){
    // const [isLogged, setIsLogged] = useState(false)
    // const [cartItm, setCartItm] = useState(JSON.parse(localStorage.getItem("addCart")))
    const [orderedItem, setOrderedItem] = useState()


    let login = localStorage.getItem("login")
    
    return(
        <>
            <UserContext.Provider value={{orderedItem, setOrderedItem}}>
                <Router>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/Login' element={!login ? <Login /> : <Home />} />
                        <Route path='/menu/:restaurantname' element={<MenuPage />} />
                        <Route path='/address' element={<Address />} />
                        <Route path='/placeOrder' element={<PlaceOrder />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </Router>
            </UserContext.Provider>
        </>
    )
    
}