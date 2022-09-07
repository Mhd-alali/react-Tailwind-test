import React from 'react';
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import { pageFade } from '../animation';
import { useEffect } from 'react';
import { useState } from 'react';
import { getRecipeInfo } from '../api/recipes';

/*
0:
aggregateLikes: 62
analyzedInstructions: [{…}]
cheap: false
cookingMinutes: -1
creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit"
cuisines: []
dairyFree: true
diets: (2) ['dairy free', 'lacto ovo vegetarian']
dishTypes: ['side dish']
extendedIngredients: Array 0: { aisle: "Produce"
                    amount: 1
                    consistency: "SOLID"
                    id: 11011
                    image: "asparagus.png"
                    measures: {us: {…}, metric: {…}}
                    meta: (3) ['fresh', 'grated', 'drained']
                    name: "asparagus"
                    nameClean: "asparagus"
                    original: "2 cups grated fresh asparagus (about 1 pound), drained"
                    originalName: "cups grated fresh asparagus (about , drained"
                    unit: "pound"}
gaps: "no"
glutenFree: false
healthScore: 5
id: 638819
image: "https://spoonacular.com/recipeImages/638819-556x370.jpg"
imageType: "jpg"
instructions: "<ol><li>Preheat oven to 350 F.</li><li>In a large bowl, combine flour, sugar, baking soda, cinnamon, cocoa powder, and salt.</li><li>Add oil, eggs, asparagus, orange peel and vanilla; mix well.</li><li>Fold in pecans.</li><li>Pour into a greased and floured 10-in. bundt pan. Bake for 1 hour or until a toothpick inserted comes out clean. Cool for 10 minutes; remove from pan to a wire rack to cool completely.</li></ol>"
license: "CC BY 3.0"
lowFodmap: false
occasions: []
originalId: null
preparationMinutes: -1
pricePerServing: 85.6
readyInMinutes: 45
servings: 12
sourceName: "Foodista"
sourceUrl: "http://www.foodista.com/recipe/T6ZM4BQ6/asparagus-cake"
spoonacularSourceUrl: "https://spoonacular.com/chocolate-asparagus-bundt-cake-638819"
summary: "This recipe makes 12 servings with <b>291 calories</b>, <b>6g of protein</b>, and <b>17g of fat</b> each. For <b>86 cents per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up orange peel, eggs, cocoa powder, and a few other things to make it today. 62 people were impressed by this recipe. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>dairy free and vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 50%</b>. This score is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/confession-109-i-buy-too-much-chocolate-strawberry-bundt-cake-with-white-chocolate-ganache-542461\">Confession #109: I Buy Too Much Chocolate… Strawberry Bundt Cake with White Chocolate Ganache</a>, <a href=\"https://spoonacular.com/recipes/pumpkin-chocolate-chip-bundt-cake-with-chocolate-ganache-520099\">Pumpkin Chocolate Chip Bundt Cake with Chocolate Ganache</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-chip-bundt-cake-optional-chocolate-glaze-106784\">Chocolate Chip Bundt Cake (Optional Chocolate Glaze)</a>."
sustainable: false
title: "Chocolate Asparagus Bundt Cake"
vegan: false
vegetarian: true
veryHealthy: false
veryPopular: false
weightWatcherSmartPoints: 12
 */

function Recipe() {
    const { id } = useParams()
    const [recipe,setRecipe] = useState()

    useEffect(()=>{
        (async ()=>{
            // setRecipe(await getRecipeInfo(id))
        })()
    },[])

    return (
        <motion.div variants={pageFade} initial="from" animate="to" exit="exit" className='bg-white min-h-screen flex flex-col'>
            <div className="min-h-screen flex items-center justify-start ">
                <img src={recipe && recipe.image} alt="" className='w-1/2 object-cover'/>
            </div>
        </motion.div>
    );
}

export default Recipe;