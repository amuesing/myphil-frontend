// import { useHistory } from 'react-router-dom';

function ConcertCard({date, title, price_range, image_url}) {
    // const history = useHistory

    function handleClick() {
        console.log("hi")

    }
    
    return (
        <div style={{border: '2px solid green'}}>
            <div>
            {title}
            </div>
        </div>
    )
}

export default ConcertCard