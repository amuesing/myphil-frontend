import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    return (
        <div style={{display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'flex-start', 
        alignItems:'flex-start',
        border: '2px solid black',}}>
            <div style={{border: '2px solid red'}} className="content content-button" onClick={() => {history.push("/calendar")}}>
                Concerts & Tickets
            </div>
            <div style={{border: '2px solid red'}} className="content content-button" onClick={() => {history.push("/visit")}}>
                Visit Us
            </div>
            <div style={{border: '2px solid red'}} className="content content-button" onClick={() => {history.push("/support")}}>
                Support Us
            </div>
            <div style={{border: '2px solid red'}} className="content content-button" onClick={() => {history.push("/about")}}>
                About Us
            </div>
            <div style={{border: '2px solid red'}} className="content content-button" onClick={() => {history.push("/login")}}>
                Login
            </div>


        </div>

    )
}

export default Header
