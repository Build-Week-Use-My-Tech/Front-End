import React, { useState } from "react";
import axios from "axios";

const SignUp = (props) => {

    const [signup, setSignup] = useState(
    {email: '', password: '', firstname: '', lastname: '', renter: true, owner: true}
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

        if(!signup.email) {
            emailError = "Email is required";
            console.log('email error');
        }
                
        if(!signup.firstname) {
            firstnameError = "First Name is required";
            console.log('first name error')
        }
        if(!signup.lastname) {
            lastnameError = "Last Name is required";
            console.log('last name error');
        }
        if(signup.password.length < 6) {
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
        let submitFN = signup.firstname;
        let submitLN = signup.lastname;
        let submitEmail = signup.email;
        let submitPW = signup.password;
        console.log(signup.firstname, signup.lastname, signup.email, signup.password);

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
            .post('https://reqres.in/api/users', creds)
            .then(res => {
                console.log("signup res", res)
                props.setLoggedIn(true)
                localStorage.setItem("token", res.data.TOKENHERE)
                routeToLogin()
            })
            
            .catch(err => console.log("Error signing up: ", err.response))
            
        } 
        else console.log("error signing up", signup)
    }



    return(
        <div className='signup-form'>
        <form>
            <h3>Sign Up to List and Rent Tech!</h3>
            <input type='email'
                   name='email'
                   placeholder='Enter Email Address'
                   value={signup.email}
                   onChange={handleSignup}
                   />
            <input type='text'
                   name='firstname'
                   placeholder='Enter First Name'
                   value={signup.firstname}
                   onChange={handleSignup}
                   />
            <input type='text'
                   name='lastname'
                   placeholder='Enter Last Name'
                   value={signup.lastname}
                   onChange={handleSignup}
                   />
            <input type='password'
                   name='password'
                   placeholder='Enter a Password'
                   value={signup.password}
                   onChange={handleSignup}
                   />
            <button onClick={submitSignup}>Sign Up</button>

        </form>
        </div>
    )

    }

export default SignUp;