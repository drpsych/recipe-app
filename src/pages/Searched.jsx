import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { numberOfResults } from "../config";

/**
 * Searched component fetches and displays recipes matching the search query.
 *
 * Uses the useParams hook to get the search query from the route params.
 * Fetches recipes by search query from the Spoonacular API.
 * Displays loading state, search results grid, or no results message based on API response.
 */
function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=${numberOfResults}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        // console.log(recipes.results);
        // console.log(searchedRecipes);
    };

    useEffect(() => {
        getSearched(params.search);
        // console.log(params.search);
    }, [params.search]);

    return (
        <div className="page">
            {searchedRecipes.length > 0 && (
                <div>
                    <h3 className="center">Recipes with {params.search}</h3>
                    <div className="grid">
                        {searchedRecipes.map((item) => {
                            return (
                                <div className="recipe-card" key={item.id}>
                                    <Link to={`/recipe/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                        <h4>{item.title}</h4>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {searchedRecipes.length === 0 && (
                <div className="no-results">
                    <h3>No results found.</h3>
                    <p>Try searching for a different recipe.</p>
                </div>
            )}
        </div>
    );
}

export default Searched;
