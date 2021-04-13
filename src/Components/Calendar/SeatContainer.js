import React, { useState, useEffect } from 'react';
import SeatCard from './SeatCard'


function SeatContainer() {
    const [seats, setSeats] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/seats')
        .then((r) => r.json())
        .then(setSeats)
    }, [])

    console.log(seats)

    const seatObj = seats.map((seatObj) => 
        <SeatCard
            key = {seatObj.id}
            seat = {seatObj}
        />)

    return (
 
        <div >
             {seatObj}
        </div>
    )
}

export default SeatContainer