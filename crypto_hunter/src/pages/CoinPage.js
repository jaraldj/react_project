import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { SingleCoin } from '../config/api'
import { LinearProgress } from "@material-ui/core";
import CoinInfo from '../components/CoinInfo'
import Button from 'react-bootstrap/esm/Button'
import { getWatchList, remove, setWaitList } from '../redux/slice/userSlice'


export default function CoinPage() {
  const param = useParams()
  const currencyVal = useSelector((state) => state.currency.currencyValue)
  const symbol = useSelector((state) => state.currency.rupee)
  const userAuth = useSelector((state) => state.user.user)
  const watchlist = useSelector((state) => state.user.waitlist)
  const [coin, setCoin] = useState()
  const [value, setValue] = useState({})
  const dispatch = useDispatch()

  const fetchCoin = async() => {
    const {data} = await axios.get(SingleCoin(param.id))
    setCoin(data)
  }

  useEffect(()=>{
    fetchCoin()
  },[param])

  useEffect(()=>{
    {watchlist && watchlist.map((val, i)=>{
      console.log(`val.........`,val);
      if(val.id == param.id){
        setValue(val)
      }else{
        setValue(null)
      }
    })}
  },[coin,watchlist])

  console.log(`value.....`, value);

  console.log(watchlist);
  console.log(value);
  const addWatch = async() => {
  const data = await axios.post(`https://crypto-hunter-e9965-default-rtdb.asia-southeast1.firebasedatabase.app/${userAuth.uid}/watchlist.json`, {id:coin.id})
  dispatch(getWatchList(userAuth))
}

let watch = watchlist.map((val)=> val.id)


console.log(param)


  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (

    <div>
      <div className='row'>
        <div className='col-4'>
          <div className='side_center pt-4'>
            <img
              src={coin.image.large}
              alt={coin.name}
              height="200"
              style={{ marginBottom: 20 }}
            />
            <h3>
              {coin.name}
            </h3>
          </div>
          <p>
            {(coin.description.en.split(". ")[0])}
          </p>
          <div className='px-4'>
            <span>
              <h5 className='pb-3'>
                Rank: &nbsp; &nbsp;
                {(coin.market_cap_rank)}
              </h5>
            </span>
            <span>
              <h5 className='pb-3'>
                Current Price: {symbol}{" "}
                {(
                  coin.market_data.current_price[currencyVal.toLowerCase()]
                )}
              </h5>             
            </span>
            <span>
              <h5>
                Market Cap: &nbsp; &nbsp; {symbol}{" "}
               {(
                 coin.market_data.market_cap[currencyVal.toLowerCase()]
                   .toString()
                   .slice(0, -6)
               )} M
              </h5>
            </span>
          </div>

            <div className="d-grid gap-2">
              {userAuth ?(
                <div className="d-grid gap-2">
                  {
                    watch.includes(param.id) ? <Button variant='danger' onClick={()=>dispatch(remove({value,userAuth}))}>Remove from WatchList</Button> : <Button variant='warning' onClick={addWatch}>Add to WatchList</Button>
                  }
                </div>
              ) : null
              }
                  
            </div>
        </div>
        <div className='col-8'>
          <CoinInfo coin={coin} />
        </div>
      </div>
    </div>
  )
}

