import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/hooks">Hoocks</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;