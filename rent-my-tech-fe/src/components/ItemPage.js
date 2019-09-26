import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

const Item = (props) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const id = props.match.params.id;

        axios.get(`https://tech-stuff.herokuapp.com/api/ads/${id}`)
        .then(response => {
            setItem(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log('Error:', error)
        })
    },[props.match.params.id])

    if (!item) {
        return(

        <div>Page loading information</div>)
    }
    return (
            <ItemsCard key={item.id} item={item}/>
    );
}

// export default import('axios').AxiosInterceptorManager;
export default Item;