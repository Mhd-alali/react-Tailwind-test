import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageFade } from "../animation";
import { useEffect } from "react";
import { useState } from "react";
import {ReactComponent as Fork} from "../assets/icons/fork-and-knife.svg"
import {ReactComponent as People} from "../assets/icons/people.svg"
import {getRecipeInfo} from '../api/recipes'

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    window.scrollTo({top : 0,left:0,behavior:"smooth"});
    (async () => {
      setRecipe(await getRecipeInfo(id))
      console.log(recipe);
    })();
  }, []);

  const dangerousHTML = {
    summary: { __html: recipe.summary },
    instructions: { __html: recipe.instructions.slice(4).slice(0, -5)},
  };
    
  return (
    <motion.div variants={pageFade} initial="from" animate="to" exit="exit" className="bg-white min-h-screen mb-10 flex flex-col container ">
      {recipe && <><div className="mb-5 flex items-center space-x-3">
          <h1 className="font-bold text-4xl">{recipe.title}</h1>
          <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 translate-y-1">
            <p className="flex items-center gap-1"><Fork/>Prep Time :{recipe.readyInMinutes}</p>
          </div>
          <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 translate-y-1">
            <p className="flex items-center gap-1"><People/>Servings :{recipe.servings}</p>
          </div>
      </div>

      <img src={recipe.image} alt="" className="h-56 object-cover rounded-lg mb-10" />

      <h3 className="text-3xl my-5 pb-3 border-b border-b-slate-500">Summary</h3>
      <div className="text-md font-medium">
        <p style={{letterSpacing:".2px",width:"80%"}} dangerouslySetInnerHTML={dangerousHTML.summary}></p>
      </div>

      <h3 className="text-3xl my-5 pb-3 border-b border-b-slate-500">Ingredients</h3>
      <ul className="list-disc container text-md font-medium">
        {recipe.extendedIngredients.map((ingredient,index) => 
            <li key={ingredient.id}>
                <p>{ingredient.original}</p>
            </li>)}
      </ul>

      <h4 className="text-3xl my-5 pb-3 border-b border-b-slate-500">Instructions</h4>
      <ul className="list-disc container text-md font-medium" dangerouslySetInnerHTML={dangerousHTML.instructions}></ul>

      <h3 className="text-3xl my-5 pb-3 border-b border-b-slate-500">Diets</h3>
      <ul className="list-disc container text-md font-medium">
        {recipe.diets.map(diet => <li>{diet}</li>)}
      </ul></>}
    </motion.div>
  );
}

export default Recipe;
