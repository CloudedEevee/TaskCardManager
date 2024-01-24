import React, { useEffect, useState } from 'react'
import InputField from './InputField';


const UserForm = (props) => {
    const { onSubmitProp, errs, formState } = props;

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    // HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (formState == "Register") {
            onSubmitProp({ email, username, password, confirm });
        }
        else if (formState == "Login") {
            onSubmitProp({ username, password })
        }
    }

    /////////////// Register
    if (formState == "Register") {
        return (
            <form onSubmit={onSubmitHandler}>
                {
                    errs.map((err, i) => (
                        <p  key={i} className='err'>{ err }</p>
                    ))
                }

            <p>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="confirm">Confirm: </label>
                <input type="text" id="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
            </p>
    
                <button type="submit">Register</button>
            </form>
        )
        
    }
    else if (formState == "Login") {
        return (
            <form onSubmit={onSubmitHandler}>
                {
                    errs.map((err, i) => (
                        <p  >{ err }</p>
                    ))
                }
            <p>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </p>
            <p>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </p>
                <button type="submit">Login</button>
            </form>
        )
    }

}



export default UserForm;