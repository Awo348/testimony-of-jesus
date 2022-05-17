import React, { useState } from "react";
import "./App.css";
import logo from "./imgs/logo.png";
import people from "./imgs/people.png";
import { Button , Modal } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   
    <div className="container App">
      <div href="#" className="logo-icon">
        <img
          className="logo figure-img img-fluid rounded"
          src={logo}
          alt="image"
        />
      </div>
  {/* modal */}
  <Modal show={show} onHide={handleClose} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>

  {/* end modal */}
      <div className="row content">
        <div className="col-sm-6">
          <p className="text">
            Coming <span className="soon">Soon</span>
          </p>
          <p className="inner">Billions of Joyful Stories</p>
          <form>
            <div className="form-group col-sm-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control email"
                  placeholder="Enter Email..."
                  
                />
                <button
                  type="email"
                  className="btn btn-warning col-sm-3"
                  onClick={() => handleShow()}
                  required
                >
                  Submit
                </button>
                
              </div>
            </div>
          </form>

          <div className="flex">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <p className="line"></p>
        </div>
        <div className="col-sm-6 image">
          <img className="people" src={people} alt="people" />
        </div>
      </div>
    </div>
  );
}

export default App;