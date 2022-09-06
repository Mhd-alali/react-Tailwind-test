import React, { useState, useEffect, Suspense } from 'react'
import { getRecipes } from './api/recipes'

import { Nav } from './components/nav';
import Loading from './components/loading';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';

const Landing = React.lazy(() => import('./pages/landing'));
const Recipe = React.lazy(() => import('./pages/recipe'));

function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  async function GetSectionsRecipes() {
    const main = getRecipes(6, 'main dish')
    const side = getRecipes(6, 'side dish')
    const dessert = getRecipes(6, 'dessert')

    return Promise.all([main, side, dessert])
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <>
      <Loading isLoading={loading} />
      {loading ||
        <Router>
          <div>
            <Nav />
          </div>
          <Suspense fallback={null}>
            <AnimatePresence initial={false} mode="wait" >
              <Routes>
                <Route path="/" element={<Landing recipes={recipes} />} />
                <Route path="/:id" element={<Recipe />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Router>
      }
    </>
  )
}

export default App