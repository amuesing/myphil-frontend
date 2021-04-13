import React, { useState, useEffect } from 'react';

import Tickets from './Tickets'

function AccountDetails({account}) {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tickets')
        .then((r) => r.json())
        .then(setTickets)
    }, [])

    const ticket = tickets.map((ticket) => 
    <Tickets
        key = {ticket.id}
        ticket = {ticket}
    />)
    
    return (
        <div style={{color: "white"}}>
            {account.email}
            {ticket}
        </div>
    )
}

export default AccountDetails