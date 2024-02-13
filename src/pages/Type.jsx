import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { numberOfResults } from "../config";

/**
 * Fetches recipes of the given type from the Spoonacular API
 * and displays them on the page.
 *
 * Uses the type parameter from the URL to determine which
 * recipe type to fetch. Fetches the recipes on mount and when
 * the type parameter changes. Displays the recipe titles and
 * images in a grid layout.
 */
function Type() {
    const [type, setType] = useState([]);
    const [title, setTitle] = useState("");
    let params = useParams();
    const getDiet = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${name}&number=${numberOfResults}`
        );
        const recipes = await data.json();
        setType(recipes.results);
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
                {type.map((item) => {
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

export default Type;
