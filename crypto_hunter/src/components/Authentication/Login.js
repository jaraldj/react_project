import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import { setLogEmail, setLogPassword } from '../../redux/slice/userSlice';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

function Login({handleClose}) {

    const user = useSelector((state) => state.user.login)
    const dispatch = useDispatch()

    const chkLog = async () => {
        if(!user.emailLog || !user.passwordPass){
            alert("Fill the details")
        }
        const logData = await signInWithEmailAndPassword(auth,
            user.emailLog,
            user.passwordPass)
    console.log(logData);
            handleClose()
    }

  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>dispatch(setLogEmail({...user,emailLog:e.target.value}))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' onChange={(e)=>dispatch(setLogPassword({...user,passwordPass:e.target.value}))} />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={chkLog}>
                    Login
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default Login