import React from 'react';
import styled from 'styled-components';

const ItemCardStyle = styled.div`
    display: flex;
`;

function ItemsCard () {
    return(
        <ItemCardStyle>
            <div>
                <h3>Cameras</h3>
            </div>
            <div>
                <h3>Monitors</h3>
            </div>
        </ItemCardStyle>
    )
}

export default ItemsCard;
