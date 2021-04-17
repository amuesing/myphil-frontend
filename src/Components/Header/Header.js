import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <NavLink className="logo" to="/">
                <img className="logo_img" alt="logo" src="https://res.cloudinary.com/nyphil/image/upload/v1538428775/images/shared/icons-logos/nyphil-logo-2x.png" />
            </NavLink>
            <NavLink className="button" to="/calendar">
                Concerts & Tickets
            </NavLink>
            <NavLink className="button" to="/visit">
                Plan Your Visit
            </NavLink>
            <NavLink className="button" to="/support">
                Support Us
            </NavLink>
            <NavLink className="button" to="/about">
                About Us
            </NavLink>
            <NavLink className="button" to="/account">
                Account
            </NavLink>
        </header>
    )
}

export default Header
