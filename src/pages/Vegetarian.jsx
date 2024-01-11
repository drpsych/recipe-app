import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vegetarian() {
    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
    }, []);

    const getVegetarian = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=50`
        );
        const data = await api.json();
        setVegetarian(data.recipes);
        console.log(data.recipes);
    };

    return (
        <div>
            <h3 className="center">Vegetarian Recipes</h3>
            <div className="grid">
                {vegetarian.map((item) => {
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

export default Vegetarian;
