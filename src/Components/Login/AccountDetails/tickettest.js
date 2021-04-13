import React, { useState } from "react";

function Tickets({ ticket }) {
    const { deleteTicket, setDeleteTicket } = useState(true)

    const id = ticket.id;

    // function handleToggleTicket() {
    //     setDeleteTicket((deleteTicket) => !setDeleteTicket)
    // }
   
    function handleTicketDelete() {
        fetch(`http://localhost:3000/tickets/${id}`, {
            method: 'DELETE'
        })
        // .then(setDeleteTicket((deleteTicket) => !deleteTicket))
        
        setDeleteTicket((deleteTicket) => !deleteTicket)
        
    }

    return (
        <li className="card">
            {ticket.user_id}
            {deleteTicket ? (
                <div>
                <button className="primary" onClick={handleTicketDelete}>
                In Stock
                </button>
                </div>
            ) : (
                null
            )}
        </li>

    )
}

export default Tickets