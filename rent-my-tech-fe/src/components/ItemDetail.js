import React, {Component} from 'react';
import {Grid, Col} from 'react-bootstrap';
import {Route, NavLink} from "react-router-dom";
import ItemsList from './ItemsList';

export default class ItemDetail extends Component {
    render() {
      return (
        <div>
          <Grid>
            <Col xs={12} sm={8} smOffset={2}>
            <img className='card-image' alt="" src={img_url}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>${price}/per day</p>
            <p>{item_condition}</p>
            </Col>
          </Grid>
        </div>
      )
    }
  }

  // const ItemDetail = () => {

//     return(
//         <div className='item-detail'>
            
//         </div>
//     )
// }

// export default ItemDetail