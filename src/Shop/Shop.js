import React, { useEffect, useState } from "react";
import Product from "../components/Product/product";
import './Shop.css'
import Cart from "../components/Cart/Cart";

const Shop =() =>{
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    useEffect(() => {
        fetch ('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))

    },[])

    const handleAddToChart =(product) =>{
        console.log(product);
        const newCart = [...cart , product];
        setCart(newCart)

    }
    return ( 

        <div className="shop-cointainer" >

            <div className="shop">
             

                {  
                      products.map(product =><Product 
                      key={product.id}
                      product={product}
                      handleAddToChart={handleAddToChart}
                     
                            
                        />)
}
             </div>
  
             <div className="chart" >
             <Cart cart={cart}></Cart>
             </div>
        
        </div>
    )

  
}
export default Shop;