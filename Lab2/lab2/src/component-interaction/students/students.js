import React from 'react'
import './style.css';
export default function Students(props) {
  return (
    <div> <table className="table mx-auto table-striped d-flex justify-content-center text-center">
    <thead className="table-dark">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {props.allStudents.map((student) => (
        <tr key={student.id} className="text-center">
              <td key={`${student.id}-name`}>{student.name}</td>
              <td key={`${student.id}-age`}>{student.age}</td>
              <td key={`${student.id}-email`}>{student.email}</td>
              <td key={`${student.id}-phone`}>{student.phone}</td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}
