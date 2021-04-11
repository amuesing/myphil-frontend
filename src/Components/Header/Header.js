import { NavLink } from 'react-router-dom';

function Header() {

    return (
       
        <div >
            <NavLink className="button" to="/">
            Home
            </NavLink>
            <NavLink className="button" to="/calendar">
                Concerts & Tickets
            </NavLink>
            <NavLink className="button" to="/visit">
                Visit Us
            </NavLink>
            <NavLink className="button" to="/support">
                Support Us
            </NavLink>
            <NavLink className="button" to="/about">
                About Us
            </NavLink>
            <NavLink className="button" to="/login">
                Login
            </NavLink>



        </div>

    )
}

export default Header
