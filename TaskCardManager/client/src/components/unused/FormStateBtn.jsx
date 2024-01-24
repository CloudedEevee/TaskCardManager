import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormStateBtn = (props) => {
    const { formState, setFormState } = props;

    const clickHandler = (e) => {
        if (formState == "Register") {
            setFormState("Login")
        }
        else {
            setFormState("Register")
        }
    };


    if (formState == "Register") {
        return (
            <Link onClick={clickHandler}>Already a user?</Link>
        )
    }
    else if (formState == "Login") {
        return (
            <Link onClick={clickHandler}>Not a user?</Link>
        )
    }        
    

}


export default FormStateBtn;