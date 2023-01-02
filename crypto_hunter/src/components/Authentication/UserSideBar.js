import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import Image from 'react-bootstrap/Image'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getWatchList, setWaitList, waitlist } from '../../redux/slice/userSlice';
import { remove } from '../../redux/slice/userSlice';

export default function UserSideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userAuth = useSelector((state) => state.user.user)
  const waitlist = useSelector((state)=> state.user.waitlist)
  let dispatch = useDispatch()

  const logout = () => {
    signOut(auth)
    handleClose()
  }

  useEffect(()=>{
    dispatch(getWatchList(userAuth))
  },[])

  return (
    <>
    <Image src={userAuth.photoURL || 'https://ptu.ac.in/wp-content/uploads/2020/06/dummy-avatar-1.jpg'} onClick={handleShow} className="avathar me-2"></Image>
      <Offcanvas className="bg-dark" show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-warning'>{userAuth.displayName || userAuth.email}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='side_center'>
        <Image src={userAuth.photoURL || 'https://ptu.ac.in/wp-content/uploads/2020/06/dummy-avatar-1.jpg'} className="sidebar_image"/>

          <h3 className='text-warning'>Watch List</h3>
          <table>
            <thead>
              <tr>
                <th>Coin</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {waitlist && waitlist.map((value,index)=>{
                return(
                  <tr key={index}>
                    <td className='text-white'>{value.id}</td> 
                    <td className='px-4 pb-3'><Button variant='danger' onClick={()=>dispatch(remove({value,userAuth}))}>Remove</Button></td>
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
          <div className="d-grid gap-2">
                <Button variant="warning" size="lg" onClick={logout}>
                    Log Out
                </Button>
            </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
