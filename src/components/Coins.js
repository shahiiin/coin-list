import React from 'react'
import CoinItem from './CoinItem'
import '../styles/coins.css'
import { Link } from 'react-router-dom'
import Coin from '../Routes/Coin'

const Coins = (props) => {

  return (

    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>coin</p>
          <p>price</p>
          <p>24h</p>
          <p className='hide-mobile'>volume</p>
          <p className='hide-mobile'>mkt cap</p>
        </div>
        {props.coins.map(coins => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins}  />
            </Link>
          )
        })}

      </div>
    </div>
  )
}

export default Coins