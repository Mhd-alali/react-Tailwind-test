import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import Recipe from "./recipe";

export default function AnimatedRoutes({ recipes }) {
  const location = useLocation()

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
    )
}
