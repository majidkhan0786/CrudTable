// import { useContext, useState } from 'react'
// import { EmployeeContext } from '../Context/EmployeeContext'
// import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
// import EditForm from './EditForm'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { GrFormView } from 'react-icons/gr'

const Employee = (props) => {
  const { data, idx } = props

  return (
    <>
      <tr>
        <th scope="row">{idx + 1}</th>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.email}</td>
        <td className="Btn-td">
          <button className="btn btn-success seperate-style">
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

export default Employee;
