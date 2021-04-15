import React, { useState } from "react";
import Modal from "react-modal";
// import { NavLink } from 'react-router-dom';
import SeatContainer from '../Calendar/SeatContainer.js'
// import SeatPicker from "react-seat-picker"

Modal.setAppElement("#root");

function SeatMap({id}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [isInnerOpen, setInnerOpen] = useState(false);

  function handleCheckout(e) {
    e.preventDefault();
    fetch("http://localhost:3000/tickets", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        user_id:1,
        seat_id:1,
        concert_id:5,
        price:83
    }),
    })
    .then((r) => r.json())
}


  function toggleModal() {
    setIsOpen(!isOpen);
  }

  // function toggleInnerModal() {
  //   setInnerOpen(!isInnerOpen);
  // }

  return (
    <div>
      <button onClick={toggleModal}> Select Seats </button>
        <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Select Seats">
          <section>
            <div>
              <SeatContainer handleCheckout = {handleCheckout}/>
            </div>
            <h2 style={{ color: "black" }}> Payment Info </h2>
            <button onClick={toggleModal}>Close</button>
            {/* <button type="submit" onClick={toggleInnerModal}> Checkout </button>
            <Modal isOpen={isInnerOpen} onRequestClose={toggleInnerModal} contentLabel="Checkout">
              <div style={{color: 'black'}}>
                Thank You For Your Purchase!
              </div>
              <button  className="button">
                <NavLink to="/">
                  Close
                </NavLink>
              </button>
            </Modal> */}
          </section>
        </Modal>
    </div>
  );
}

export default SeatMap;