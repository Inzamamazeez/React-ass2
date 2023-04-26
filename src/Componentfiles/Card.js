import React from 'react';
import './Card.css';

export default function ProductCard({ productDetails, AlertFunctions }) {

    const {
        productId,
        productPic,
        productName,
        brand,
        productDescription,
        price,
        rating,
    } = productDetails
      
    return(
        <div className="Card">
            <h5>{productId}</h5>
            <img src={productPic} alt=''/>
            <h3>{productName}</h3>
            <h4>{brand}</h4>
            <p>{productDescription}</p>
            <h5>{price}</h5>
            <h6>{rating}</h6>
            <button onClick={AlertFunctions}>see more</button>
        </div>
      )
}