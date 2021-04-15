import { NavLink } from 'react-router-dom';

function TicketCard({ ticket, handleDeletedTicket, toggleModal }) {
    const id = ticket.id;
       
    function handleTicketDelete() {
        fetch(`http://localhost:3000/tickets/${id}`, {
            method: 'DELETE'
        })
        handleDeletedTicket(id)
    }

    return (
        <div>
            {ticket.seat_id}
            <NavLink className="button" to="/calendar"> 
                Exchange Ticket 
            </NavLink>
            <button onClick={handleTicketDelete}> 
                Cancel Ticket 
            </button>
        </div>
    )
}

export default TicketCard