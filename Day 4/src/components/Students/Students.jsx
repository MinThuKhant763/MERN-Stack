import React, { useState } from 'react';
import './Students.css'
const Students = (props) => {
    const address = props.address;
    const [name, setName] = useState(props.name);

    const changeName = () => {
        setName("Name Updated");
    };
    return (
        <div>
            <ul>
                <li> name : { name }</li>
                <li> address : { address }</li>
                <button onClick={ changeName } className='btn'>Change Name</button>
            </ul>
        </div>
    );
};

export default Students;
