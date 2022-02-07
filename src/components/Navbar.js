import { login, logout } from '../services/firebase'
import { Link } from "react-router-dom";
import {useState} from "react"

function NavBar(props) {
    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = () => {
        setNavOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavOpen(false)
    }

    return (
        <div className="navigation-bar">
            <div className="desktop">
                <h1 className='nav-headline'>My sustainable brands</h1>
                <div>
                    <ul className="nav-links-desktop">
                        <Link className="page-desk-links" to="/"><li>HOME</li></Link>
                            <Link className="page-desk-links" to="/brands"><li>BRANDS</li></Link>
                            <Link className="page-desk-links" to="/info"><li>INFO</li></Link>
                            <Link className="page-desk-links" id="info" to="/contact"><li>CONTACT</li></Link>
                            {
                                props.user ?
                                <>
                                <li id="greeting-desk" className="page-desk-links">Howdy, {props.user.displayName}</li>
                                <li id="log" className="page-desk-links" onClick={logout}>Logout</li>
                                </>
                                :
                                <li id="log" className="page-desk-links" onClick={login}>Login</li>
                        }
                    </ul>
                </div>
            </div>



            <div className='nav'>
                <h1 className="nav-headline">My Sustainable Brands</h1>
                <div className="hamburger-icon">
                    <img className="hamburger" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643821531/my-sustainable-brand/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724c3cb0f7.1188475115301637882486_ztgdnq.png" onClick={handleToggle}/>
                </div>
            </div>
                <div>
                    <ul id="nav-links" className={`menuNav ${navOpen ? "showMenu" : ""}`}>
                        <Link className="page-links" onClick={() => closeMenu()} to="/"><li className="mobile-links">HOME</li></Link>
                        <Link className="page-links" onClick={() => closeMenu()} to="/brands"><li className="mobile-links">BRANDS</li></Link>
                        <Link className="page-links" onClick={() => closeMenu()} to="/info"><li className="mobile-links">INFO</li></Link>
                        {
                            props.user ?
                            <>
                            <li id="greeting">Howdy, {props.user.displayName}</li>
                            <li className="log" onClick={logout}>Logout</li>
                            </>
                            :
                            <li className="log" onClick={login}>Login</li>
                        }
                    </ul>
            </div>
        </div>
    )
}

export default NavBar;