import React, { useEffect, useState } from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import axios from 'axios'
import ItemsCard from './ItemsCard.js'

const Dashboard = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios// axiosWithAuth()
        .get(`http://reqres.in/api/users/235`)
        .then(res => {
            console.log(res.data)
            setUser(res.data.data)
        })
    }, [])

    return(
        <div className='dashboard'>
            <h3>Hello {user.first_name}</h3>
            {/* <div className='user-ads'>
            {user.ads.map(ad =>{
                return <ItemsCard />
            })}
            </div> */}
        </div>
    )
}

export default Dashboard;