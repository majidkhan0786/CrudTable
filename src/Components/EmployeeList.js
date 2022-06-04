import { MdAddCircleOutline } from 'react-icons/md'
import './Components.css'
import AddUpdateModal from './AddUpdateModal'
// import { useContext } from "react";
// import { EmployeeContext } from "../Context/EmployeeContext";
import Employee from './Employee'
import { TableData } from '../data'
import { useState } from 'react'

const EmployeeList = () => {
  const [employee] = useState(TableData)

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

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {employee &&
            employee.length > 0 &&
            employee.map((employeeData, index) => {
              return (
                <>
                  <Employee data = {employeeData} idx={index}/>
                </>
              )
            })}
        </table>
      </div>
    </>
  )
}
export default EmployeeList
