import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

function ItemsList() {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const getItems = () => {
            axios
            .get()
            .then(response => {
                console.log(response.data);
               setItemsList(response.data); 
            })
            .catch(error => {
                console.log('Error', error);
            });
        }
        getItems();
    }, [])
    return (
        <div>
            {itemsList.map(item => (
                <Link to=''>
                <ItemsCard key={item} item={item}/>
                </Link>
            ))}
        </div>
    )
}

export default ItemsList;