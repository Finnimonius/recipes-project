import { useState, useEffect } from "react";
import { fetchData } from "../../services/api";
import { Layout } from 'antd';
import RecipeCard from '../RecipeCard';
import './AppLayout.css'

const contentStyle = {
    padding: '1rem'
};

export default function AppContent() {
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
        <Layout.Content style={contentStyle}>
            <div className='container'>
                <RecipeCard recipe={recipe} loading={loading} />
            </div>
        </Layout.Content>
    )
}