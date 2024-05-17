import React, { useState } from 'react';
import './Students.css';
const Students = (props) => {

    return (
        <div className='box'>
            <p> name : { props.name }</p>
            <p> address : { props.address }</p>
        </div>
    );
};

export default Students;
