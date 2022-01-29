import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <h1>NavBar</h1>
            <div>
                <Link to="/"><h2>HOME</h2></Link>
                <Link to="/companies"><h2>COMPANIES</h2></Link>
                <Link to="/info"><h2>INFO</h2></Link>
                <Link to="/companies/add"><h2>ADD COMPANY</h2></Link>
            </div>
        </div>
    )
}

export default NavBar;