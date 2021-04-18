import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import SeatDetail from './SeatDetail'
// import SeatCard from '../Calendar/SeatCard'

function TicketCard({ ticket, handleDeletedTicket, seatObj }) {
    const [seats, setSeats] = useState([]);
    const [newSeatId, setNewSeatId] = useState([]);
    const [ticketSeatId, setTicketSeatId] = useState(ticket.seat_id)

    const id = ticket.id;
    const seatId = ticket.seat_id        

    function handleChange(e) {
        setNewSeatId(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/tickets/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ seat_id:newSeatId })
        }) 
        .then(
            fetch(`http://localhost:3000/seats/${seatId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isReserved:false })
          })
        )
        .then(
            fetch(`http://localhost:3000/seats/${newSeatId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isReserved:true })
          })
        )
        .then(setTicketSeatId(newSeatId))
        // .then(() => handleUpdateTicketsArray(id))
    }
    
    function handleTicketDelete() {
        fetch(`http://localhost:3000/tickets/${id}`, {
            method: 'DELETE'
        });
        handleDeletedTicket(id);
    }

    useEffect(() => {
        fetch('http://localhost:3000/seats')
        .then((r) => r.json())
        .then(setSeats);
    }, []);

    const seat = seats.map(seat =>
        <option value={seat.id}>
            {seat.section}
            {" || "}
            {seat.row}
            {" || "}
            {seat.number}
        </option>)

    return (
        <div>
            {ticketSeatId}
            <form onSubmit={handleSubmit}>
                <select name="exchange" className="button" onChange={handleChange}>
                    {seat}
                </select>
            <button type="submit">
                Exchange
            </button>
            </form>
            <button onClick={handleTicketDelete}> 
                Cancel Ticket 
            </button>
        </div>
    )
}

export default TicketCard