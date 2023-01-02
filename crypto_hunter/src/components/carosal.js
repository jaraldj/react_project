import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import { setTrend } from '../redux/slice/trendCoinSlice';
import { setCurrency } from '../redux/slice/crrencySlice';
import { useNavigate } from 'react-router-dom';
import { TrendingCoins } from '../config/api'
import AliceCarousel from 'react-alice-carousel';
import '../App.css'
import 'react-alice-carousel/lib/alice-carousel.css';

function Carasol() {

    const dispatch = useDispatch()
    const trendCoin = useSelector((state) => state.trend.trend)
    const currencyVal = useSelector((state) => state.currency.currencyValue)
    const symbol = useSelector((state) => state.currency.rupee)
    const navigate=useNavigate()
    useEffect(()=>{
        gettrendcoin()
    },[currencyVal])
    const gettrendcoin=async()=>{
        const {data}=await axios.get(TrendingCoins(currencyVal))
        console.log(data);
        dispatch(setTrend(data))
    }
    const responsive = {
        0:{
            items:2
        },
        512:{
            items:4
        }
    }

    const items=trendCoin.map((coins,index)=>{
        let profit = coins.price_change_percentage_24h >= 0
        return(
            <div key={index} onClick={()=>{navigate(`/Coin/${coins.id}`)}}>
                <img src={coins.image} alt={coins.name} height='80' className='mb-2' />
                <p className='text-white'>{coins.symbol.toUpperCase()}<span className='ms-3' style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red", fontWeight: 500, }}>{profit && '+'}{coins.price_change_percentage_24h.toFixed(2)}%</span></p>
                <p className='text-white'>{symbol}{coins.current_price}</p>
            </div>
        )

    })
  return (
    <div className='carosal container w-75 h-50 banner-alignment'>
    <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
    />
    </div>
      )
}

export default Carasol