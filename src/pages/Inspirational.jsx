import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { numberOfResults } from "../config";

/**
 * Fetches random inspirational recipes from the Spoonacular API
 * and renders them to the page.
 *
 * Uses React hooks for state management and side effects:
 * - useState for inspirational recipe state
 * - useEffect to fetch recipes on initial render
 *
 * Renders a grid of recipe cards linking to recipe detail pages.
 */
function Inspirational() {
    const [inspirational, setInspirational] = useState([]);

    useEffect(() => {
        getInspirational();
    }, []);

    const getInspirational = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&&number=${numberOfResults}`
        );
        const data = await api.json();
        setInspirational(data.recipes);
        // console.log(data.recipes);
    };

    return (
        <div className="page">
            <h3 className="center">Inspirational Recipes</h3>
            <div className="grid">
                {inspirational.map((item) => {
                    return (
                        <div className="recipe-card" key={item.id}>
                            <Link to={`/recipe/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Inspirational;
