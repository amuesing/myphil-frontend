import React, { useState, useEffect } from 'react';

import Tickets from './AccountDetails/Tickets'

import UpdateModal from '../Modals/UpdateModal'

function AccountDetails({account, handleAccountUpdate}) {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tickets')
        .then((r) => r.json())
        .then(setTickets)
    }, [])

    function handleDeletedTicket(id) {
        const updatedTicketsArray = tickets.filter((ticket) => ticket.id !== id);
        setTickets(updatedTicketsArray)
    }

    const ticket = tickets.map((ticket) => 
    <Tickets
        key = {ticket.id}
        ticket = {ticket}
        handleDeletedTicket = {handleDeletedTicket}
    />)
    
    return (
        <div style={{color: "white"}}>
            {account.email}
            {ticket}
            <UpdateModal 
                account = {account} 
                handleAccountUpdate = {handleAccountUpdate}
            />
        </div>
    )
}

export default AccountDetails