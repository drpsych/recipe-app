import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=50`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        console.log(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <div className="grid">
            {searchedRecipes.map((item) => {
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
    );
}

export default Searched;
