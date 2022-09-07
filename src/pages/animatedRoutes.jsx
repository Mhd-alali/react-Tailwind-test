import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Recipe from "./recipe";

export default function AnimatedRoutes({ recipes }) {
  const location = useLocation()

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/About" element={<About />} />
        <Route path="/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
    )
}
