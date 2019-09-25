import React, {useState} from 'react';
import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';

const AddItem = (props) => {

    const [user, setUser] = useState([]);

    const getUser = () => {
        axiosWithAuth()
           .get(`/api/users/`)
           .then(res => {
               console.log(res.data)
               localStorage.setItem('USERID', res.data.id)
               setUser(res.data)
           })
       }

    const [item, setItem] = useState({title:"",description:"",  img_url:"", price:20.00, item_condition:"Excellent", item_available: 1, negotiable: true})

    const handleItem = event => {
        setItem({...item,
        [event.target.name]: event.target.value})
        console.log(item)
    }

    console.log(user.id)

    const submitItem = e =>{
        e.preventDefault();
        getUser();
        console.log(item)
         const id = localStorage.getItem('USERID')
        console.log(id)
        axiosWithAuth()
        .post(`/api/ads/user/1`, item)
            .then(res =>{
                console.log(item)
                console.log(res)
            })
    }

    return(
        <div className='additem-form'>
            <h3>Add New Item to Rent:</h3>
            <form>
            <span>Title:</span>
            <input type='text'
                   name= 'title'
                   value={item.title}
                   onChange={handleItem}
                   />
            <span>Description:</span>
            <input type='textarea'
                   name='description'
                   value={item.description}
                   onChange={handleItem}
                   />
            <span>Image Url</span>
            <input type='text'
                   name='img_url'
                   value={item.img_url}
                   onChange={handleItem}
                   />
            <span>Price:</span>
            <input type='text'
                   name='price'
                   value={item.price}
                   onChange={handleItem}
                   />
            <span> Condition:</span>
            <select name='item_condition' value={item.item_condition}onChange={handleItem}>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
            </select>
            <span>Negotiable</span>
            <input type='checkbox'
                   name= 'negotiable'
                   value={item.negotiable}
                   onChange={handleItem}
                   />
            <button onClick={submitItem}>List Item</button>
            </form>
        </div>
    )
}

export default AddItem;