import AddUserForm from './components/AddUserForm/AddUserForm';
import './App.css';
import { useState } from 'react';
import Lists from './components/Lists/Lists';

const App = () => {
  const [userInfo,setUserInfo] = useState([]);
  
  const getUserInfo = (userInfoObj) =>{
    setUserInfo([...userInfo,userInfoObj])
  }
  return (
    <div className='main'>
      <AddUserForm getUserInfo={getUserInfo}/>
      <Lists userInfo={userInfo}/>
    </div>
  )
}

export default App

