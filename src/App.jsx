import * as React from 'react'
import { Section } from './components/section';
import { Nav } from './components/nav';
import { Header } from './components/header';
import { useState } from 'react';
import { useEffect } from 'react';
import {getRecipes} from './api/recipes'
import Loading from './components/loading';

function App() {
  const [recipes,setRecipes] = useState([])
  const [loading,setLoading] = useState(true)

  async function GetSectionsRecipes() {
     const main = getRecipes(6,'main dish')
     const side = getRecipes(6,'side dish')
     const dessert = getRecipes(6,'dessert')

     return Promise.all([main,side,dessert])
  }

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])

  return (
    <>
    <Loading isLoading={loading}/>
    {loading ||
      <>
      <div>
        <Nav/>
      </div>
      <main className='bg-gray-200 rounded-md flow-root mb-10 relative'>
        <header className='container pt-5 '>
          <Header type="h2" className=" md:text-center font-semibold">Recipes</Header>
          <Header type="h3" className=" md:text-center mt-2 text-gray-600 font-semibold">For Nerds</Header>
        </header>
        {['Main Dishes',"Side Dishes","Dessert"].map((section,index) => <Section recipes={recipes[index]} key={section} section={section}/>)}
      </main>
      </>
      }
      </>
  )
}

export default App