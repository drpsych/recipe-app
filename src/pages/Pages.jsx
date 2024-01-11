import React from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import Inspirational from "./Inspirational";

function Pages() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
            <Route path="/inspiration" element={<Inspirational />} />
        </Routes>
    );
}

export default Pages;
