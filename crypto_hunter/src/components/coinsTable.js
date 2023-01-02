import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { CoinList } from '../config/api'
import {useSelector ,useDispatch} from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'


export default function CoinsTable() {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate()

    const currencyVal = useSelector((state) => state.currency.currencyValue)
    const symbol = useSelector((state) => state.currency.rupee)



    const fetchCoins = async () => {
        setLoading(true)
        const {data} = await axios.get(CoinList(currencyVal))
        setCoins(data)
        setLoading(false)
    }
    console.log(coins);
    useEffect(()=>{
        fetchCoins()
    }, [currencyVal])
  return (
    <div className='bg-dark pt-5'>
      <h3 className='text-center text-white'>Cryptocurrency Prices by Market Cap</h3>
        <table className='table container'>
            <thead className='bg-warning'>
                <tr>
                    <th>
                        Coin
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        24h Change
                    </th>
                    <th>
                        Market Cap
                    </th>
                </tr>
            </thead>
            {coins && coins.map((val, index)=>{
              return(
                <tbody>
                  <tr onClick={() => navigate(`/Coin/${val.id}`)}>
                    <td className='text-white' style={{
                            display: "flex",
                            gap: 15,
                          }}><img src={val.image} alt={val.name}
                            height="50"
                            style={{ marginBottom: 10 }}/><div style={{display : "flex", flexDirection: "column"}}><span
                            style={{
                              textTransform: "uppercase",
                            }}
                          >{"  "}{val.symbol}</span><span>{val.name}</span></div></td>
                    <td className='text-white'>{symbol}{" "}{val.current_price.toFixed(2)}</td>
                    <td className='text-danger'>{val.price_change_percentage_24h.toFixed(2)}</td>
                    <td className='text-white'>{symbol}{" "}{val.market_cap.toString().slice(0, -6)}{" "}M</td>
                  </tr>
                </tbody>
              )
            })}
            <tbody>
                
            </tbody>
        </table>
    </div>
  )
}

