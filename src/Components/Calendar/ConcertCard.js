import { Link } from 'react-router-dom';

function ConcertCard({concert}) {
    const link = `/calendar/${concert.id}`
    
    return (
        <Link to={link}>
            {concert.title}
        </Link>
    )
}

export default ConcertCard