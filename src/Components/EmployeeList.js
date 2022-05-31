import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
// import {FiSearch} from "react-icons/fi";
import { GrFormView } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";
import "./Components.css";
import AddUpdateModal from "./AddUpdateModal";
import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

const EmployeeList = (props) => {
  const { employeeData } = useContext(EmployeeContext);
  console.log(employeeData , 544444455424684248);

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
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Employee email</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          {employeeData.length > 0 ? (
            <>  (
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>{employeeData.props.firstName}</td>
                    <td>{employeeData.lastName}</td>
                    <td>{employeeData.email}</td>
                    <td>
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
                </tbody>
           
              );
            </>
          ) : (
            <h1>No Data Is Available </h1>
          )}
        </table>
      </div>
    </>
  );
};
export default EmployeeList;

// import { Modal, Button, Alert} from 'react-bootstrap';
// import {useContext, useEffect, useState } from 'react';
// import {EmployeeContext} from '../contexts/EmployeeContext';
// import Employee from './Employee';
// import AddForm from './AddForm';
// import Pagination from './Pagination';

// const EmployeeList = () => {

//     const {sortedEmployees} = useContext(EmployeeContext);

//     const [showAlert, setShowAlert] = useState(false);

//     const [show, setShow] = useState(false);
    
//     const handleShow = () => setShow(true);
//     const handleClose = () => setShow(false);
//     //const handleShowAlert = () =>setShowAlert(true);

//     const [currentPage, setCurrentPage] = useState(1);
//     const [employeesPerPage] = useState(2)

//     const handleShowAlert = () => {
//         setShowAlert(true);
//         setTimeout(()=> {
//             setShowAlert(false);
//         }, 2000)
//     }

//     useEffect(() => {
//         handleClose();

//         return () => {
//             handleShowAlert();
//         }
//     }, [sortedEmployees])

//     const indexOfLastEmployee = currentPage * employeesPerPage;
//     const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
//     const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
//     const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);


//     return (
//     <>
//     <div className="table-title">
//         <div className="row">
//             <div className="col-sm-6">
//                 <h2>Manage <b>Employees</b></h2>
//             </div>
//             <div className="col-sm-6">
//                 <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>					
//             </div>
//         </div>
//     </div>

//     <Alert show={showAlert} variant="success">
//         Emlployee List Updated Succefully!
//     </Alert>

//     <table className="table table-striped table-hover">
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Address</th>
//                 <th>Phone</th>
//                 <th>Actions</th>
//             </tr>
//         </thead>
//         <tbody>

//                 {
//                   currentEmployees.map(employee => (
//                       <tr key={employee.id}>
//                         <Employee employee={employee} />
//                     </tr>
//                   ))  
//                 }
                

//         </tbody>
//     </table>

//     <Pagination pages = {totalPagesNum}
//                 setCurrentPage={setCurrentPage}
//                 currentEmployees ={currentEmployees}
//                 sortedEmployees = {sortedEmployees} />

//     <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//             <Modal.Title>
//                 Add Employee
//             </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <AddForm />
//         </Modal.Body>
//         <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close Button
//                 </Button>
//         </Modal.Footer>
//     </Modal>
//     </>
//     )
// }

// export default EmployeeList;
