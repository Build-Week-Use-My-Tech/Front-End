import React from 'react';

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

    { title,  img_url, price, item_condition, item_available, negotiable } = item;

    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialItem);

    const editItem = item => {
        setEditing(true);
        setItemToEdit(item)
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`BACKEND`, itemToEdit)
        .then(res => {
            setDashboard(dashboard.map(item => 
                (item.id === res.data.id ? res.data : item)))
        })
    }

    const deleteItem = item => {
        axiosWithAuth()
          .delete(``)
          .then(res => {
            setDashboard(dashboard.filter(item => item.id !== res.data))
            console.log(res.data)
          })
          .catch(err => console.log(err));
      };
    return(
        <div>
             <img src={imgUrl}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p>{item_condition}</p>
            <button onClick={() =>deleteItem(item)}> Delete</button>
        </div>
    )
}