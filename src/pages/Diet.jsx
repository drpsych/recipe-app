import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./pages.css";

function Diet() {
    const [diet, setDiet] = useState([]);
    const [title, setTitle] = useState("");
    let params = useParams();

    const getDiet = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}&number=${process.env.REACT_APP_RESULT_NUMBER}`
        );
        const recipes = await data.json();
        setDiet(recipes.results);
        // console.log(recipes.results);
        setTitle(name);
    };
    useEffect(() => {
        getDiet(params.type);
        // console.log(params.type);
    }, [params.type]);

    return (
        <div className="page">
            <h3 className="center">{title} Recipes</h3>
            <div className="grid">
                {diet.map((item) => {
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

export default Diet;
