import {

    useParams
} from "react-router-dom";
const BlogItem = () => {
    let { id } = useParams();
    return (
        <h1>BlogItem {id}</h1>
    );
}

export default BlogItem;