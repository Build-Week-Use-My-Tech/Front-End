import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';
import axiosWithAuth from './utils/axiosWithAuth';

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
                <ItemsCard key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default ItemsList;