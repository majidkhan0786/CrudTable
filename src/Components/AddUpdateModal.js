import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const AddUpdateModal = (props) => {
  const { showModal, toggleModal, editData, isView } = props;
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const AddModalData = (e) => {
    console.log(firstName, lastName, email);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    props.getDataFromAddModal(state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setState({ ...editData });
  }, [editData]);
  const { firstName, lastName, email } = state;

  return (
    <>
      <div className="container">
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {isView ? "Details" : "Add"} Employee Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={HandleSubmit}>
              <input
                style={{ width: "75%" }}
                type="text"
                className="form-control mb-3"
                placeholder="Enter First Name"
                value={firstName}
                name="firstName"
                onChange={(e) => handleChange(e)}
              />
              <input
                style={{ width: "75%" }}
                type="text"
                className="form-control mb-3"
                placeholder="Enter last Name"
                value={lastName}
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
              <input
                style={{ width: "75%" }}
                type="text"
                className="form-control mb-3"
                placeholder="Enter user Email"
                value={email}
                name="email"
                onChange={(e) => handleChange(e)}
              />
              {isView ? null : (
                <button className="btn btn-primary" onClick={AddModalData}>
                  Add
                </button>
              )}
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AddUpdateModal;
