import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./Header";

const Blog = () => {
    return (
        <div className="blog">
            <h1>My Blog</h1>
            <Header bgColor={"yellow"} />
            <ul>
                <li>
                    <Link to="/blog/123">1</Link>
                </li>
                <li>
                    <Link to="/blog/456">2</Link>
                </li>
                <li>
                    <Link to="/blog/789">3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Blog;