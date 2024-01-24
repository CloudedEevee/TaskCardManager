import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserForm from '../forms/UserForm'
import FormStateBtn from './FormStateBtn';
import DashboardBtn from '../buttons/DashboardBtn';

const Main = (props) => {
    const [ userList, setUserList ] = useState([]);
    const [ errs, setErrs ] = useState([]);
    const [ formState, setFormState ] = useState("Register");


    //////////////////////////////////////////////////////////// Top Level Functions
    /////////////// Form Submit Toggle (Reg/Login)
    const formSubmit = (userParam) => {
        if (formState == "Register") {
            registerUser(userParam);
        }
        else {
            loginUser(userParam);
        }
    }

    //////////////////////////////////////////////////////////// Second Level Functions
    /////////////// Register vs Login User
    const registerUser = async (userParam) => {
        try{
            console.log(userParam);
            createUser(userParam);
            console.log("User saved!");
        }
        catch (err) {
            console.log(`Something went wrong ` + err);
        }
    }
    
    const loginUser = (userParam) => {
        console.log(userParam);
        // search db for matching users
        axios.get('http://localhost:8000/api/users/:username', userParam)
        .then(res => {
            console.log(res); // track data
            console.log(res.data); 
        })
        
        // check password
    }
    
    //////////////////////////////////////////////////////////// Third Level Functions
    /////////////// Create a new User
    const createUser = (userParam) => {
            axios.post('http://localhost:8000/api/users', userParam)
                .then(res => {
                    console.log(res); // track data
                    console.log(res.data); 
                    setUserList([...userList, res.data])
                })
                .catch(err => {
                    const errRes = err.response.data.errors; // get errs from res
                    const errArr = []; // temp err array for messages
                    for (const key of Object.keys(errRes)) { // for every error in errRes
                        errArr.push(errRes[key].message) // add message to temp array
                    }
                    setErrs(errArr);
                })
    };
    
    //////////////////////////////////////////////////////////// Return
    return (
        <div>
            <h2>Welcome!</h2>
            <DashboardBtn />
            <FormStateBtn formState={formState} setFormState={setFormState} />
            <UserForm onSubmitProp={formSubmit} formState={formState} errs={errs}/>
        </div>
    )


}

export default Main;