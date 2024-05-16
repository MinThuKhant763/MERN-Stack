import { useState } from 'react';
import './App.css';
import Students from './components/Students/Students';
import Background from './components/Background/Background';
import Form from './components/Form/Form';

function App() {
  const name = "Code Hub";
  const students = [
    {
      name: "Mg Mg",
      address: "YGN"
    },
    {
      name: "Kyaw Kyaw",
      address: "MDY"
    },
    {
      name: "Aung Aung",
      address: "MDY"
    }
  ];
  return (
    <>
      <h1>{ name }</h1>
      <Background>
        <Students name={ students[0].name } address={ students[0].address } />
        <Students name={ students[1].name } address={ students[1].address } />
        <Students name={ students[2].name } address={ students[2].address } />
      </Background>
      <Background>
        <Form />
      </Background>
    </>
  );
}

export default App;
