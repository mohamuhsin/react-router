import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/products");
    }
    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="/products">The List of products</Link>
            </p>
            <button onClick={handleNavigate}>Navigate</button>
        </>
    );
}
