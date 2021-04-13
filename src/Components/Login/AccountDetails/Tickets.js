function Tickets({ ticket }) {
    const id = ticket.id;
   
    function handleTicketDelete() {
        fetch(`http://localhost:3000/tickets/${id}`, {
            method: 'DELETE'
        })
    }

    return (
        <div style={{color: "white"}}>
            {ticket.seat_id}
            <button onClick={handleTicketDelete}> Cancel Ticket </button>
        </div>
    )
}

export default Tickets