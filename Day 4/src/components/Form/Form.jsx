import React, { useState } from 'react';
import './Form.css';
const Form = (props) => {
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
       props.addNewMember(data);
    };


    return (
        <form onSubmit={ showData }>
            <input type="text" placeholder='Name' onChange={ trackName } value={name}/>
            <input type="text" placeholder='Address' onChange={ trackAddress } value={address}/>
            <button type='submit' className='submitBtn'>Add new member</button>
        </form>
    );
};

export default Form;
