import { Link } from 'react-router-dom';

function ConcertCard({concert}) {
    const link = `/calendar/${concert.id}`

    return (
        
        <Link to={link}>
            <span className="phase-buttons">
                {concert.title}
            </span>
        </Link>
        
    )
}

export default ConcertCard