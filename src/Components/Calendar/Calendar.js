import React, { useState, useEffect } from 'react';
import ConcertCard from './Concert'

function Calendar() {
    const [concerts, setConcerts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/concerts')
        .then((r) => r.json())
        .then(setConcerts)
    }, [])

    const concertObj = concerts.map((concertObj) => <ConcertCard key={concertObj.id} date={concertObj.date} title={concertObj.title} price_range={concertObj.price_range} image_url={concertObj.image_url}/>)

    return (
        <div>
            {concertObj}
        </div>
    )
}

export default Calendar