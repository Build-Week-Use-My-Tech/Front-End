import React, { useEffect, useState } from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import axios from 'axios'
import ItemsCard from './ItemsCard.js'

 const Dashboard = () => {

    const [user, setUser] = useState([]);
    const [dashboard, setDashboard] = useState([]);

    const getUser = () => {
     axiosWithAuth()
        .get(`/api/users/`)
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
    }
    

    console.log(user)

    useEffect(() => {
        getUser();
        axiosWithAuth()
           .get(`/api/ads`)
           .then(res => {
               console.log(res.data)
               setDashboard(res.data)
           })
       }, [])

    return(
        <div className='dashboard'>
            <h3>Hello {user.first_name}!</h3>
            {/* <div className='user-ads'>
            {dashboard.map(ad =>{
                return <DashCard dashboard={dashboard} setDashboard={setDashboard} />
            })}
            </div> */}
        </div>
    )
}

export default Dashboard;