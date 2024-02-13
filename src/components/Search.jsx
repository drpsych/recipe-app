import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div>
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
