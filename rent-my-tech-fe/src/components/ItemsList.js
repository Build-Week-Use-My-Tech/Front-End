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
<<<<<<< HEAD
                // <Link to=''>
                <ItemsCard key={item.id} item={item}/>
                // </Link>
=======
                <ItemsCard key={item.id} item={item}/>
>>>>>>> 6d2f82ed3a075e0e06c76a97301b73b276b4def0
            ))}
        </div>
    )
}

export default ItemsList;