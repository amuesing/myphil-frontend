import React, { useState } from "react";
import Modal from "react-modal";
import { NavLink } from 'react-router-dom';
// import SeatPicker from "react-seat-picker"

Modal.setAppElement("#root");

function SeatMap({id}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isInnerOpen, setInnerOpen] = useState(false);
  const [seat, setSeat] = useState("");

  console.log(seat)

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
    .then(console.log(id))
}


  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleInnerModal() {
    setInnerOpen(!isInnerOpen);
  }

  return (
    <div>
      <button onClick={toggleModal}> Select Seats </button>
        <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Select Seats">
          <div>
            <div>
              <h2 style={{ color: "black" }}> Select Seat: </h2>
              <form onSubmit={handleCheckout}>
                <select>
                  <option value={seat} onChange={(e) => setSeat(e.target.value)}> Seat 1 </option>
                  <option value={seat} onChange={(e) => setSeat(e.target.value)}> Seat 2 </option>
                  <option value={seat} onChange={(e) => setSeat(e.target.value)}> Seat 3 </option>
                </select>
                </form>
            </div>
            <h2 style={{ color: "black" }}> Payment Info </h2>
            <button onClick={toggleModal}>Close</button>
            <button type="submit" onClick={toggleInnerModal}> Checkout </button>
            <Modal isOpen={isInnerOpen} onRequestClose={toggleInnerModal} contentLabel="Checkout">
              <div style={{color: 'black'}}>
                Thank You For Your Purchase!
              </div>
              <button  className="button">
                <NavLink to="/">
                  Close
                </NavLink>
              </button>
            </Modal>
          </div>
        </Modal>
    </div>
  );
}

export default SeatMap;