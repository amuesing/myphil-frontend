import React, { useState, useEffect } from 'react';

import SeatCard from './SeatCard'
import SeatMap from './SeatMap'

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
            seat.isReserved = true }
            return seat
        },
        )
        setSeats(updatedSeats)}


    const updatedSeatsArray = seats.filter((seat) => seat.isReserved === false);

    const seatObj = updatedSeatsArray.map((seatObj) => 
        <SeatCard
            key = {seatObj.id}
            seat = {seatObj}
            handleSoldSeat = {handleSoldSeat}
        />)

    return (
 
        <div>
            <SeatMap seats={seats}/>
            {/* {seatObj} */}
        </div>
    )
}

export default SeatContainer