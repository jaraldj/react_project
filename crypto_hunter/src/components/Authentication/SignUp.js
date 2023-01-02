import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setConfirmPassword } from '../../redux/slice/userSlice';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

function SignUp({handleClose}) {

    const users = useSelector((state) => state.user.signUp)
    const dispatch = useDispatch()

    const signUpUser = async() =>{
        if(users.password !== users.confirmPassword){
            alert("Password Not Match")
        }
        else{
            const data = await createUserWithEmailAndPassword(
                auth,
                users.email,
                users.password
              );
              console.log(data);
        handleClose()

        }
    }

  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>dispatch(setEmail({...users,email:e.target.value}))}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' onChange={(e)=>dispatch(setPassword({...users,password:e.target.value}))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='Password' onChange={(e)=>dispatch(setConfirmPassword({...users,confirmPassword:e.target.value}))} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={signUpUser}>
                    Sign Up
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default SignUp