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
            <div>
            <img src={image_url} alt={title} className="concert-detail-image"/>
                <div className="card">
                    <span>
                        {date}
                    </span>
                    <span>
                        {time}
                    </span>
                    <span>
                        {title}
                    </span>
                    <span>
                        {event_info}
                    </span>
                </div>
            </div>
            <SeatMap id={id}/>
        </section>  
    )
}

export default ConcertDetail
