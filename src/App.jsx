import './App.css'
import RecipeCard from './components/RecipeCard'
import { useEffect, useState } from "react"
import { fetchData } from './services/api'

export default function App() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function preload() {
      setLoading(true)
      const dataRecipes = await fetchData();
      console.log(dataRecipes);
      setRecipe(dataRecipes.meals[0]);
      setLoading(false)
    }
    preload()
  }, [])

  return (
    <>
      <RecipeCard recipe={recipe} loading={loading} />
    </>
  )

}

