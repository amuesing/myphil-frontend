import { Link } from 'react-router-dom';

function ConcertCard({concert}) {
    const link = `/calendar/${concert.id}`

    return (
        <section>
        <Link to={link} className="center">
            <span className="concert-card">
                    <img alt="concert" className="concert-card-image" src={concert.image_url}/>
            </span>
            <span className="phase-buttons">
                {concert.title}
                {" || "}
                {concert.date}
            </span>
        </Link>
        </section>
        
    )
}

export default ConcertCard