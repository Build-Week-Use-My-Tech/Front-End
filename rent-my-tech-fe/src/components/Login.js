import React, { useState } from "react";
import {axiosWithAuth} from "./utils/axiosWithAuth";

const Login = (props) => {

    const [credentials, setCredentials] = useState(
        {email: '', password: ''}
            );

    const handleLogin = e =>{
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        console.log('credentials are currently', credentials)
    }

    const routeToUserDashboard = () => {
        props.history.push("/")
    }
    //Routes are not set up yet, so this will likely need to be updated. it should take the user to their dashboard, where they can see any items they may have listed to be rented

    const submitLogin = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('our backend here/login', credentials)
        .then(res => {
            console.log('submitLogin', res)
            localStorage.setItem('token', res.TOKENHERE) //token needs to be added
            routeToUserDashboard();
        })
        .catch(err => console.log("Error logging in: ", err.response))
    }

    return(
        <div className='login-form'>
            <h3>Login to Rent My Tech</h3>
            <form>
                <input type='text'
                       name='email'
                       placeholder='email'
                       value={credentials.email}
                       onChange={handleLogin}
                       />
                <input type='password'
                       name='password'
                       placeholder='password'
                       value={credentials.password}
                       onChange={handleLogin}
                       />
                <button onClick={submitLogin}> Login</button>
            </form>
        </div>
    )
}

export default Login;