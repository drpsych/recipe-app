import React from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Inspirational from "./Inspirational";
import Vegetarian from "./Vegetarian";
import Diet from "./Diet";
import Type from "./Type";
import NotFoundPage from "./NotFoundPage";

function Pages() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
            <Route path="/inspiration" element={<Inspirational />} />
            <Route path="/vegetarian" element={<Vegetarian />} />
            <Route path="/diet/:type" element={<Diet />} />
            <Route path="/type/:type" element={<Type />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default Pages;
