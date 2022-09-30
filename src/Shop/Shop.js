import React, { useEffect, useState } from "react";
import './Shop.css'

const Shop =() =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch ('products.json')
        .then(res => res.json())
        .then (data => console.log(data))

    },[])
    return ( 

        <div className="shop-cointainer" >

            <div className="shop">
                 <h1>This is Shop</h1>
             </div>
  
             <div className="chart" >
              <h2>This is Chart</h2>
             </div>
        
        </div>
    )

  
}
export default Shop;