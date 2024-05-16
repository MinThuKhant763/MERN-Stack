import React, { useState } from 'react';
import './Form.css';
const Form = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const trackName = (event) => {
        setName(event.target.value);
    };
    const trackAddress = (event) => {
        setAddress(event.target.value);
    };
    const showData = (event) => {
        event.preventDefault();

        const data = {
            name,
            address
        };
        console.log(data);
    };


    return (
        <form onSubmit={ showData }>
            <input type="text" placeholder='Name' onChange={ trackName } />
            <input type="text" placeholder='Address' onChange={ trackAddress } />
            <button type='submit' className='submitBtn'>Submit</button>
        </form>
    );
};

export default Form;
