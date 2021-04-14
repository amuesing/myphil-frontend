import React, { useState, useEffect } from 'react';

import SeatCard from './SeatCard'

function SeatContainer() {
    const [seats, setSeats] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/seats')
        .then((r) => r.json())
        .then(setSeats)
    }, [])

    function handleSoldSeat(id) {
        const updatedSeats = seats.map((seat) => {
        if (seat.id === id) {
            seat.is_open = false }
            return seat
        },
        )
        setSeats(updatedSeats)}


    const updatedSeatsArray = seats.filter((seat) => seat.is_open === true);

    const seatObj = updatedSeatsArray.map((seatObj) => 
        <SeatCard
            key = {seatObj.id}
            seat = {seatObj}
            handleSoldSeat = {handleSoldSeat}
        />)

    return (
 
        <div >
             {seatObj}
        </div>
    )
}

export default SeatContainer