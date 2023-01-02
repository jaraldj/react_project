import React from 'react'
import banner from '../../banner.jpg'
import Carasol from '../carosal'

function Banner() {

  return (
    <>
    <div className='banner' style={{backgroundImage:`url( ${banner})`,height:"400px",backgroundRepeat:"no-repeat"}}>


<div className='text-center'>
    <h2 className='pt-5 text-white'>CRYPTO HUNTER</h2>
    <p className='text-white'>Get All The Info Regarding Your Favourite Crypto Currency</p>
    <div className='pt-5'>
      <Carasol />
    </div>
</div>
</div>
    </>
   
  )
}

export default Banner