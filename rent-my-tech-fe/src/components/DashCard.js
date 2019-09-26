import React, { useState } from 'react';
import axiosWithAuth from './utils/axiosWithAuth'
import Modali, { useModali } from 'modali';

const DashCard = ({ item, dashboard, setDashboard }) => {

const userid = localStorage.getItem("USERID");

  const initialItem = {
    title: "",
    description: "",
    img_url: "",
    price: 20.0,
    item_condition: "Excellent",
    item_available: true,
    negotiable: true,
    user_id: userid
  };

  const {
    title,
    description,
    img_url,
    price,
    item_condition,
    item_available,
    negotiable
  } = item;

  const [editing, setEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialItem);
  const [exampleModal, toggleExampleModal] = useModali();

  const editItem = item => {
    toggleExampleModal();
    setEditing(true);
    setItemToEdit(item);
  };

  const saveEdit = e => {
    e.preventDefault();
    // userid = localStorage.getItem("USERID");
    axiosWithAuth()
      .put(`/api/ads/user/${userid}/update/${itemToEdit.id}`, itemToEdit)
      .then(res => {
        setDashboard(
          dashboard.map(item => (item.id === res.data.id ? res.data : item))
        );
        console.log(itemToEdit);
      });
  };

  const deleteItem = item => {
    const userid = localStorage.getItem("USERID");
    console.log("start delete");
    axiosWithAuth()
      .delete(`/api/ads/user/${userid}/delete/${item.id}`)
      .then(res => {
        console.log("delete item fired");
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
                <div className="button-row">
        <div onClick={() => deleteItem(item) + console.log("delete", item)}>
          <i class="fas fa-trash-alt"></i>
          </div>
        <div
          onClick={() => editItem(item) + console.log("edit", item, itemToEdit)}
        >
          <i class="fas fa-edit"></i>
        </div>
      </div>
      <Modali.Modal {...exampleModal}>
        {editing && (
          <form onSubmit={saveEdit}>
              title:
            <input
              onChange={e =>
                setItemToEdit({ ...itemToEdit, title: e.target.value })
              }
              value={itemToEdit.title}
            />
            description:
            <input
              onChange={e =>
                setItemToEdit({ ...itemToEdit, description: e.target.value })
              }
              value={itemToEdit.description}
            />
            Image URL:
            <input
              onChange={e =>
                setItemToEdit({ ...itemToEdit, img_url: e.target.value })
              }
              value={itemToEdit.img_url}
            />
            <div className="button-row">
              <button type="submit">save</button>
            </div>
          </form>
        )}
      </Modali.Modal>
    </div>
  );
};

export default DashCard;