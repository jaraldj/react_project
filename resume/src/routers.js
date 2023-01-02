import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import UserContext from './store/UserContext'
import Register from './pages/Register'
import View from './pages/View'


export default function MainRouter(){
  const [isLogged, setIsLogged] = useState(false)
  const [currentUser, setCurrentUser] = useState()

//   let navigate = useNavigate()
  let login = localStorage.getItem("login")

  

    return (
        <>
            <UserContext.Provider value={{isLogged,setIsLogged,setCurrentUser,currentUser}}>
                <Router>
                    <Routes>
                        <Route path='/' exact element={!login ? <Login /> : <Home />}/>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/register' element={<Register />} />
                        <Route path='/view/:id' element={<View />}/>
                    </Routes>
                </Router>
            </UserContext.Provider>
           
        </>
        
    )
}