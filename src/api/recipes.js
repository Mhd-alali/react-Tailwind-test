const baseUrl = "https://api.spoonacular.com/recipes"
export async function getRecipes(count = 6,tags) {
  try {
    const response = await fetch(`${baseUrl}/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${count}&tags=${tags}`)
    if (response.ok) {
      const data = await response.json()
      return data.recipes
    }
  } catch (error) {
    console.log(error);
  }
}

//https://api.spoonacular.com/recipes/23/information?apiKey=329cc5d32be14c49b74d4fe03b02a280
export async function getRecipeInfo(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.log(error);
  }
}