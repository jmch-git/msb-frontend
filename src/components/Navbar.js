import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <div className="nav">
            <h1 className="nav-headline">My Sustainable Brands</h1>
            <div className="nav-links">
                <Link to="/"><h2>HOME</h2></Link>
                <Link to="/brands"><h2>BRANDS</h2></Link>
                <Link to="/info"><h2>INFO</h2></Link>
            </div>
        </div>
    )
}

export default NavBar;