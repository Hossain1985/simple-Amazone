import React from "react";
import './product.css'


const Product = (props) =>{
    // console.log(props.product)
    const {name, img, seller , price , ratings} = props?.product ||{};
    
    

    return(
        <div>
            <div className="product">

            {<img className="product-img" src={img}></img>}

            <div className="product-info">
            <p className="product-name">{name}</p>
            <p className="product-name">Price:{price}</p>
            <p className="product-name">Seller:{seller}</p>
            <p className="product-name">Ratings:{ratings}Stars</p>

            </div>
            <button className="btn-cart">
                <p>Add to cart</p>
            </button>

            </div>
       </div>
    )
}

export default Product;
 