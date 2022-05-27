import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'
import './student.css';

const Student = () => {
    const [student]=useContext(store)
  return (
    <div>

<div className='addstudent-container'><Link className='addstudentButton' to="/add-student">Add Student</Link></div>

<table className="table-container">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  </thead>

  <tbody>
      {student.map((student)=>(<tr key={student.id}>

<td>{student.Name}</td>
<td>{student.Age}</td>
<td>{student.Course}</td>
<td>{student.Batch}</td>
<td><Link to="/edit">Edit</Link></td>

</tr>


      ))}
  
  
  </tbody>
</table>







    </div>
  )
}

export default Student