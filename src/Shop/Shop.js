import React, { useEffect, useState } from "react";
import Product from "../components/Product/product";
import './Shop.css'

const Shop =() =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch ('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))

    },[])
    return ( 

        <div className="shop-cointainer" >

            <div className="shop">
             

                {  
                      products.map(product =><Product 
                      key={product.id}
                      product={product}
                            
                        />)
}
             </div>
  
             <div className="chart" >
              <h2>This is Chart</h2>
             </div>
        
        </div>
    )

  
}
export default Shop;