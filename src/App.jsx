import React, { useState, useEffect} from 'react'
import { getRecipes } from './api/recipes'

import AnimatedRoutes from './pages/animatedRoutes';
import { Nav } from './components/nav';
import Loading from './components/loading';

import { BrowserRouter as Router } from "react-router-dom"

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
    (async ()=>{
     setRecipes(await GetSectionsRecipes())
    })()
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
          <AnimatedRoutes recipes={recipes} />
        </Router>
      }
    </>
  )
}

export default App