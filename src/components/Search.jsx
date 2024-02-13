import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/**
 * Search component that renders a search icon and input field.
 * Allows users to search for recipes.
 * Uses React hooks for state management:
 * - useState for managing search query state
 * - useNavigate to navigate to search results page on submit
 */
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="center-bar">
                <FaSearch></FaSearch>
                <input
                    type="text"
                    placeholder="Search for a Recipe..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </form>
    );
}

export default Search;
