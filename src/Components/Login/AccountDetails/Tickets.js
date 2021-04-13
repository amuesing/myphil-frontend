import React, { useState } from "react";

function Tickets({ ticket, handleDeletedTicket }) {
    const { deleteTicket, setDeleteTicket } = useState(true)

    const id = ticket.id;

    function handleToggleTicket() {
        setDeleteTicket((deleteTicket) => !setDeleteTicket)
    }
   
    function handleTicketDelete() {
        fetch(`http://localhost:3000/tickets/${id}`, {
            method: 'DELETE'
        })
        handleDeletedTicket(id)
    }

    return (
        <div style={{color: "white"}}>
            {ticket.seat_id}
            <button onClick={handleTicketDelete}> Cancel Ticket </button>
        </div>
    )
}

export default Tickets