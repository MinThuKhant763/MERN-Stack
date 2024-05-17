import './App.css';
import Students from './components/Students/Students';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {
  const [students,setStudents] = useState([
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
  ]);
  const addNewMember = (memberInfo) => {

    setStudents([...students,memberInfo]);

  };
  return (
    <div className='App'>
      <div className='container'>
       {students.map((student) => (
          <Students key={student.name} name={student.name} address={student.address}/>
       )
       )}
      </div>
      <Form addNewMember={ addNewMember } />
    </div>
  );
}

export default App;
