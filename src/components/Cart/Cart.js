import React from "react";
import './Cart.css'

const Cart = ({cart}) =>{
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return(
        <div className="cart" >
             <h2>This is Chart</h2>
             <p> Select Itrem:{cart.length}</p>
             <p>Total price:${total}</p>
             <p>Total Shipping:{shipping}</p>
             <p>Tax:{tax}</p>
             <p>Grand Total:{grandTotal.toFixed(2)}</p>
            
              
        </div>
    )
}
export default Cart;