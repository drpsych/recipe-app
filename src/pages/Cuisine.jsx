import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./pages.css";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const [title, setTitle] = useState("");
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=${process.env.REACT_APP_RESULT_NUMBER}`
        );
        const recipes = await data.json();
        setCuisine(recipes.results);
        // console.log(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        // console.log(params.type);
        setTitle(params.type);
    }, [params.type]);

    return (
        <div className="page">
            <h3 className="center">{title} Recipes</h3>
            <div className="grid">
                {cuisine.map((item) => {
                    return (
                        <div className="recipe-card" key={item.id}>
                            <Link to={`/recipe/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                                <h4 className="shadow">{item.title}</h4>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Cuisine;
