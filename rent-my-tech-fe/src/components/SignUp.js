import React, { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {

    const [signup, setSignup] = useState(
    {email: '', password: '', firstname: '', lastname: '', id: Date.now()}
        );

    const handleSignup = e => {
        e.preventDefault();
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
            })
            console.log("New user: ", signup)
            }
    
    const routeToLogin = () => {
            props.history.push("/") //Add route to login
        }
    
    
    const validate = () => {
        let emailError = "";
        let passwordError = "";
        let firstnameError = "";
        let lastnameError = "";

        if(!inputs.email) {
            emailError = "Email is required";
            console.log('email error');
        }
                
        if(!inputs.firstname) {
            firstnameError = "First Name is required";
            console.log('first name error')
        }
        if(!inputs.lastname) {
            lastnameError = "Last Name is required";
            console.log('last name error');
        }
        if(inputs.password.length < 6) {
            passwordError = "Password must contain at least 6 characters";
            console.log("password short err")
        }

        if(emailError || firstnameError || lastnameError || passwordError) {
            setSignup({ emailError, firstnameError, lastnameError, passwordError});
            return false
        } else return true
    }

    const submitSignup = e => {
        let result = validate();
        let submitFN = inputs.firstname;
        let submitLN = inputs.lastname;
        let submitEmail = inputs.email;
        let submitPW = inputs.password;
        console.log(inputs.firstname, inputs.lastname, inputs.email, inputs.password);

        e.preventDefault();
        if (result === true) {
            console.log("validate: ", result)
           
        let creds = {
            firstname: submitFN,
            lastname: submitLN,
            email: submitEmail,
            password: submitPW
        }
        
        axios
            .post('BACKEND HERE', creds)
            .then(res => {
                console.log("signup res", res)
                props.setLoggedIn(true)
                localStorage.setItem("token", res.data.TOKENHERE)
                routeToLogin()
            })
            
            .catch(err => console.log("Error signing up: ", err.response))
            
        } 
        else console.log("error signing up", inputs)
    }



    return(
        <form>
            <h3>Sign Up to List and Rent Tech!</h3>
            <input type='email'
                   name='email'
                   placeholder='Enter Email Address'
                   value={inputs.email}
                   onChange={handleSignup}
                   />
            <input type='text'
                   name='firstname'
                   placeholder='Enter First Name'
                   value={inputs.firstname}
                   onChange={handleSignup}
                   />
            <input type='text'
                   name='lastname'
                   value={inputs.lastname}
                   onChange={handleSignup}
                   />
            <input type='password'
                   name='password'
                   value={inputs.password}
                   onChange={handleSignup}
                   />
            <button onClick={submitSignup}>Sign Up</button>

        </form>
    )

    }

export default SignUp;