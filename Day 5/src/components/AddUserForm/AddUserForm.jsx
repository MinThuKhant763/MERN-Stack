import Card from '../Card/Card';
import { useState } from 'react';
import './AddUserForm.css';
const AddUserForm = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const addNewUser = (event) => {
    event.preventDefault();
    if(name.trim().length === 0 ||address.trim().length === 0 ||email.trim().length === 0){
      alert("Please fill a vaild value for all inputs.");
      return;
    }
    const userInfo = {
      name,
      address,
      email
    };
    props.getUserInfo(userInfo);
    
    setName("");
    setAddress("");
    setEmail("");
  };
  return (
    <Card>
      <form onSubmit={ addNewUser }>
        <div className='form-div'>
          <label htmlFor="name" >Name</label>
          <input type="text" value={name} onChange={ (event) => setName(event.target.value) } />
        </div>
        <div className='form-div'>
          <label htmlFor="address">Address</label>
          <input type="text" value={address} onChange={ (event) => setAddress(event.target.value) } />
        </div>
        <div className='form-div'>
          <label htmlFor="email">Email</label>
          <input type="text" value={email} onChange={ (event) => setEmail(event.target.value) } />
        </div>
        <button className='add-btn' type='submit' >Add User</button>
      </form>
    </Card>
  );
};

export default AddUserForm;
