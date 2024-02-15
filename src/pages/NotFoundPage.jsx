import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
// import "./NotFoundPage.css"; // Import your custom styles for the page

const NotFoundPage = () => {
    return (
        <div className="NotFoundPage">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </p>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
};

export default NotFoundPage;
