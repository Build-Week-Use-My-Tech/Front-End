import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import ItemsCard from './ItemsCard';
import axiosWithAuth from './utils/axiosWithAuth';
import {Link} from 'react-router-dom';

function ItemsList() {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const getItems = () => {
            axiosWithAuth()
            .get('https://tech-stuff.herokuapp.com/api/ads')
            .then(response => {
                console.log(response.data);
               setItemsList(response.data.result); 
            })
            .catch(error => {
                console.log('Error', error);
            });
        }
        getItems();
    }, [])
    return (
        <div className='itemslist'>
            {itemsList.map(item => (
             <Link to ={`/items/${item.id}`}>
                <ItemsCard key={item.id} item={item}/>
            </Link>
            ))}
        </div>
    )
}

export default ItemsList;