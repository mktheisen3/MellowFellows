import React from 'react';

import snowballFight from '../../../assets/images/snowballFight.jpg';
import mistletoe from '../../../assets/images/mistletoe.jpg';
import santaAndReindeer from '../../../assets/images/santaAndReindeer.jpg';
import giftGiving from '../../../assets/images/giftGiving.jpg';
import './Product.css';

const product = ( props ) => {

    let image = <img className="ProductImage" src={snowballFight} alt="snowballFight" />
    let title = "Snowball Fight"

    if (props.cardName === "mistletoe"){
        image = <img className="ProductImage" src={mistletoe} alt="mistletoe" />
        title = "Mistletoe"
    }
    else if (props.cardName === "santaAndReindeer"){
        image = <img className="ProductImage" src={santaAndReindeer} alt="santaAndReindeer" />
        title = "Santa and Reindeer"
    }
    else if (props.cardName === "giftGiving"){
        image = <img className="ProductImage" src={giftGiving} alt="giftGiving" />
        title = "Gift Giving"
    }

    return (
        <div className="Product" onClick={props.clicked}>
            {image}
            <div className="ProductDetails">
                <p className="ProductName">{title}</p>
                <p className="ProductPrice">$5</p>
            </div>
            
        </div>
    );
};

export default product;