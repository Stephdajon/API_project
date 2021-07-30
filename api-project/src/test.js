
import axios from 'axios'
import React, {useState,useEffect} from 'react'

const Test = () =>{
    const url = 'https://api.coingecko.com/api/v3/global'
    const [coins,setCoins] = useState("")
    useEffect(() => {
        // let arrayOfQuotes = [];
        axios.get(url)
            .then (response =>{
                // arrayOfQuotes = response.data;
                setCoins(response.data)
                console.log(response.data)
            })
      }, [url])
    

        
    return (
    <section className = "hero">
        <nav>
            <h2>Welcome</h2>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </nav>
       <div className="quote">
             <h2> Your Quotes for Today </h2>
            {/* <h2> "{quotes}" </h2>
            <h2> --{author} </h2> */}
       </div>
       <div className="advices">
             <h2> Your Advice for Today </h2>
            {/* <h2>   {advice} </h2> */}
       </div>
    </section>
      )
}

export default Test;