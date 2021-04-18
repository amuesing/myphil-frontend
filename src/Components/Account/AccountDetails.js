import React, { useState, useEffect } from 'react';

import TicketCard from './TicketCard'
import TicketModal from '../Modals/TicketModal'
import UpdateModal from '../Modals/UpdateModal'

function AccountDetails({ account, handleAccountUpdate }) {
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

    function handleUpdateTicketsArray(id) { }
        // const updatedTickets = tickets.map((ticket) => {
        // if (ticket.id === id) {
        //     ticket.is_open = false }
        //     return ticket
        // },
        // )
        // setTickets(updatedTickets)}


    const ticket = tickets.map((ticket) => 
    <TicketCard
        key = {ticket.id}
        ticket = {ticket}
        handleDeletedTicket = {handleDeletedTicket}
        handleUpdateTicketsArray = {handleUpdateTicketsArray}
    />)
    
    return (
        <div className="card">
            <span>
                {account.first_name}
            </span>
            <span>
                {account.last_name}
            </span>
            <span>
                {account.address1}
            </span>
            <span>
                {account.address2}
            </span>
            <span>
                {account.city}
            </span>
            <span>
                {account.state}
            </span>
            <span>
                {account.zip}
            </span>
            <span>
                {account.email}
            </span>
                <div className="form_style">
                    <UpdateModal 
                        account = {account} 
                        handleAccountUpdate = {handleAccountUpdate}
                    />
                    <TicketModal 
                        ticket = {ticket}
                    />
                </div>
            </div>
    )
}

export default AccountDetails