import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Inspirational() {
    const [inspirational, setInspirational] = useState([]);

    useEffect(() => {
        getInspirational();
    }, []);

    const getInspirational = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&&number=${process.env.REACT_APP_RESULT_NUMBER}`
        );
        const data = await api.json();
        setInspirational(data.recipes);
        console.log(data.recipes);
    };

    return (
        <div>
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
