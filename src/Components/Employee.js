// import { useContext, useState } from 'react'
// import { EmployeeContext } from '../Context/EmployeeContext'
// import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
// import EditForm from './EditForm'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { GrFormView } from 'react-icons/gr'

const Employee = (employeeData) => {
  console.log(employeeData, 5451);
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>{employeeData.firstName}</td>
        <td> B </td>
        <td> C@gmail.com</td>
        <td className="Btn-td">
          <button className="btn btn-success">
            <BiEdit /> Edit
          </button>

          <button className="btn btn-danger seperate-style">
            <MdDelete /> Delete
          </button>

          <button className="btn btn-primary seperate-style">
            <GrFormView /> View Data
          </button>
        </td>
      </tr>
    </>
  )
}

export default Employee
