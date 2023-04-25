import React from 'react';

export default function ProductCard(props){
    function handleClick() {
        alert(`Product ${props.productId}, which is ${props.productName} of brand ${props.brand} of rupees ${props.price} is added in the cart, please proceed to pay!!!`);
      }
      return(
        <div className="Card">
            <h5>{props.productId}</h5>
            <img src={props.productPic} alt=''/>
            <h3>{props.productName}</h3>
            <h4>{props.brand}</h4>
            <p>{props.productDescription}</p>
            <h5>{props.price}</h5>
            <h6>{props.rating}</h6>
            <button onClick={handleClick}>see more</button>
        </div>
      )
}
