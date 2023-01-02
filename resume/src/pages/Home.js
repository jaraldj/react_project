import Header from '../components/header'
import UserContext from "../store/UserContext";
import {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Form from './Form';
import InputForm from './InputForm';

export default function Home(){

    const value = useContext(UserContext);
    const {isLogged,setIsLogged,currentUser} = value;
    // alert(`Welcome ${currentUser.name}`)
    // console.log(currentUser.name);
    let navigate = useNavigate()

    const login = localStorage.getItem("login")
    const currUser = localStorage.getItem("currUser")
    console.log(currUser);

    useEffect(()=>{
        if(login || isLogged){
            navigate('/home')
        }else{
            navigate('/')
        }
        },[isLogged, login])

    // useEffect(()=>{
    //     if(login)
    //         navigate('/home')
        
    // },[login])
        console.log(isLogged);
    return (
        <>
            <Header setIsLogged={setIsLogged}/>
            <h2 className='text-center pt-5 pb-5'>Resume</h2>
            <InputForm />
        
    
            
        </>
    )
}