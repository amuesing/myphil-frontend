import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import Modal from "react-modal";

Modal.setAppElement("#root");

function LoginModal() {
  const [isOpen, setIsOpen] = useState(true);


  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" classname="modal">
          <div style={{color: "black"}} className="modal-content">
                <form>
                    <input
                    type="text"
                    name="name"
                    placeholder="Username"/>
                    <input
                    type="text"
                    name="name"
                    placeholder="Password"/>
                </form>
          </div>
        <NavLink style={{color: "black"}} to="/login">
            Login
        </NavLink>
        <NavLink style={{color: "black"}} to="/register">
            Register
        </NavLink>
        <NavLink  style={{color: "black"}} to="/">
            Close
        </NavLink>
      </Modal>
    </div>
  );
}

export default LoginModal;