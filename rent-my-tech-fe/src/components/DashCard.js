import React, { useState } from 'react';
import axiosWithAuth from './utils/axiosWithAuth'
import Modali, { useModali } from 'modali';

const DashCard = ({ item, dashboard, setDashboard }) => {

    const initialItem ={
    title:"",
    description:"",  
    img_url:"", 
    price:20.00, 
    item_condition:"Excellent", 
    item_available: 1, 
    negotiable: true
    }

    const { title,  description, img_url, price, item_condition, item_available, negotiable } = item;

    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialItem);
    const [exampleModal, toggleExampleModal] = useModali();

    const editItem = item => {
        toggleExampleModal();
        setEditing(true);
        setItemToEdit(item)
    }

    const saveEdit = e => {
        e.preventDefault();
        const userid = localStorage.getItem('USERID')
        axiosWithAuth()
        .put(`/api/ads/user/${userid}/update/${itemToEdit.id}`, itemToEdit)
        .then(res => {
            setDashboard(dashboard.map(item => 
                (item.id === res.data.id ? res.data : item)))
            console.log(itemToEdit)
        })
    }

    const deleteItem = item => {
        const userid = localStorage.getItem('USERID')
        console.log('start delete')
        axiosWithAuth()
          .delete(`/api/ads/user/${userid}/delete/${item.id}`)
          .then(res => {
            console.log('delete item fired')
            setDashboard(dashboard.filter(item => item.id !== res.data));
            console.log(res.data);
          })
          .catch(err => console.log(err));
      };
    return(
        <div className='item-card'>
             <img className='card-image' alt="" src={img_url}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p>{item_condition}</p>
            <button onClick={() =>deleteItem(item) + console.log('delete', item)}> Delete</button>
            <button onClick={() => editItem(item) + console.log('edit', item, itemToEdit)}>Edit</button>
            <Modali.Modal {...exampleModal}>
            {editing && (
                <form onSubmit={saveEdit}>
                    <input onChange={e => 
                    setItemToEdit({ ...itemToEdit, title: e.target.value })
                    }
                           value={itemToEdit.title}
                    />
            <div className="button-row">
            <button type="submit">save</button>
            {/* <button onClick={() => setEditing(false)}>cancel</button> */}
          </div>
                </form>
            )}
            </Modali.Modal>
        </div>
    )
}

export default DashCard;