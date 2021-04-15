import React, { useState, useEffect } from 'react';
import ConcertCard from './ConcertCard'


function Calendar() {
    const [concerts, setConcerts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/concerts')
        .then((r) => r.json())
        .then(setConcerts)
    }, [])

    const concertObj = concerts.map((concertObj) => 
        <ConcertCard 
            key = {concertObj.id}
            concert = {concertObj}
        />)

    return (
 
        <div className="concertObj">
             {concertObj}
        </div>
    )
}

export default Calendar