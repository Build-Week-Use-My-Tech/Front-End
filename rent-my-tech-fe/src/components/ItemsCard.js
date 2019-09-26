import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

// const ItemCardStyle = styled.div`
//     display: flex;
//     width: 100px;
// `;


function ItemsCard ({ item }) {
    const {title, description, img_url, price, item_condition} = item;
    return(
            <div className='item-card'>
                <img className='card-image' src={img_url}/>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>${price}/per day</p>
                <p>{item_condition}</p>
            </div>
           
    )
}

export default ItemsCard;
