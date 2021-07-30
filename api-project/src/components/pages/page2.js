import Coin from '../coins/Coins'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PageTwo = () => {
    //useState to get all the coins
    const [coins, setCoins] = useState([]);
    //useState for search input
    const [search, setSearch] = useState('');
    //useState for pages
    // const [counter, setCounter] = useState(2);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=true&price_change_percentage=1h%2C24%2C7d
        `)
            .then(res => {
              setCoins(res.data);
            //   setCounter(counter++)
              console.log(res.data);
            })
            .catch(err => 
              console.log(err));
    });

    const searchHandleChange = e => {
      setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'>Search a currency</h1>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={searchHandleChange}
              placeholder='Search'
            />
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    );
  }
export default PageTwo;