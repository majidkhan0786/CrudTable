// import React, { useState } from "react";
// import { BiEdit } from 'react-icons/bi'
// import { MdDelete } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
// import { GrFormView } from 'react-icons/gr'
import { MdAddCircleOutline } from 'react-icons/md'
import './Components.css'
import AddUpdateModal from './AddUpdateModal'
// import { useContext } from "react";
// import { EmployeeContext } from "../Context/EmployeeContext";
import Employee from './Employee'
import { TableData } from '../data'
import { useState } from 'react'

const EmployeeList = () => {
  const [employee, setEmployee] = useState({ TableData })
  console.log(TableData, 446545)

  return (
    <>
      <AddUpdateModal />
      <div className="container">
        <h3 className="mt-3"> yoUr Employee Data List </h3>
        <hr className="line" />
        <div className="add-serach-div d-flex">
          <button className="btn btn-success">
            <MdAddCircleOutline /> Add Data
          </button>
          <input
            type="search"
            className="form-control mb-3 search-input"
            placeholder="Search Here"
            name="firstName"
          />
        </div>

        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {employee &&
              employee.length > 0 &&
              employee.map((employeeData, index) => {
                return (
                  <tr>
                    <Employee employeeData={employeeData} />
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default EmployeeList
