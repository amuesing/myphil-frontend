import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom"

function ConcertDetail() {
const [concert, setConcert] = useState(null)
    const params = useParams();

    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/concerts/${id}`)
        .then((r) => r.json())
        .then(concert => {
            setConcert(concert)
        })
    })
    
    return (
        <div>
        </div>
    )
}

export default ConcertDetail