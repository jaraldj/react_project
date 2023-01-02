import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from './Login';
import SignUp from './SignUp';
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';

export default function AuthModal() {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('login');
  let googleProvider = new GoogleAuthProvider()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    handleClose()
  }


  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="login" title="Login">
        <Login handleClose={handleClose} />
      </Tab>
      <Tab eventKey="signup" title="Sign Up">
        <SignUp handleClose={handleClose}/>
      </Tab>
    </Tabs>
    <div className="d-grid gap-2">

    <span className='text-center'>OR</span>
      <GoogleButton onClick={signInWithGoogle} size="lg" /> 
    </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

// render(<Example />);