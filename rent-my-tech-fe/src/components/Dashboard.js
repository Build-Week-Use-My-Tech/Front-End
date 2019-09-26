import React, { useEffect, useState } from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
// import axios from 'axios'
import DashCard from './DashCard.js'

 const Dashboard = () => {

    const [user, setUser] = useState([]);
    const [dashboard, setDashboard] = useState([]);

    useEffect( () => {
     axiosWithAuth()
        .get(`/api/users/`)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('USERID', res.data.id)
            setUser(res.data)
        })
    }, [])
    

    console.log(user)

    useEffect(() => {
        const id = localStorage.getItem('USERID')
        axiosWithAuth()
           .get(`/api/users/${id}/ads`)
           .then(res => {
               console.log(res.data)
               setDashboard(res.data)
           })
       }, [])

    return(
        <div className='dashboard'>
            <h3>Hello {user.first_name}!</h3>
            <h3>You currently have {dashboard.length} items listed to be rented. Click on the cards below to edit/remove them.</h3>
            <div className='user-ads'>
            {dashboard.map(item =>{
                return <DashCard item={item} dashboard={dashboard} setDashboard={setDashboard} />
            })}
            </div>
        </div>
    )
}

export default Dashboard;