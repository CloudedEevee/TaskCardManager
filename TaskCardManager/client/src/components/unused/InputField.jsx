import React, { useEffect, useState } from 'react'

const InputField = (props) => {
    const { errs, attribute, setAttribute, i } = props;

    return (
            <p>
                <label htmlFor="attribute">{attribute}: </label>
                <input type="text" id="attribute" value={attribute} onChange={(e) => setAttribute(e.target.value)} key={i}/>
            </p>
    )

}


// need key: value for each attribute
// spread data 


export default InputField;