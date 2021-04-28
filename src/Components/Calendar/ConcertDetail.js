import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

import SeatMap from "../Modals/SeatMapModal"

function ConcertDetail() {
    const [concert, setConcert] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/concerts/${id}`)
        .then((r) => r.json())
        .then(concert => {
            setConcert(concert)
            setIsLoaded(true)
        })
    }, [id])

    if (!isLoaded) return <h2> {null} </h2>;

    const { 
            title,
            time,
            date,
            // price_range, 
            event_info, 
            image_url 
        } = concert;

    return (
        <section>
            <section>
            <img src={image_url} alt={title} className="concert-detail-image"/>
                <section>
                    <span>
                        {date}
                    </span>
                    <span>
                        {time}
                    </span>
                    <span>
                        {title}
                    </span>
                    
                    <SeatMap id={id}/>
                    <section className="concert-detail-text-container">
                        {event_info}
                    </section>
                </section>
            </section>

        </section>  
    )
}

export default ConcertDetail
