import React from 'react';
import styled from 'styled-components';

const ItemCardStyle = styled.div`
    display: flex;
`;


function ItemsCard (props) {
    const {title, description, img_url, price, item_condition} = props.items;
    return(
        <ItemCardStyle>
            <div>
                <img src={img_url}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p>{item_condition}</p>
            </div>
        </ItemCardStyle>
    )
}

export default ItemsCard;
