import { useState, useEffect } from "react";
import { fetchDataRandom } from "../../services/api";
import { Flex, Layout, Spin, Button, ConfigProvider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import RecipeCard from '../RecipeCard';
import './AppLayout.css'

const contentStyle = {
    padding: '2rem',
};

const spinStyle = {
    minHeight: 'calc(100vh - 64px - 70px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default function AppContent({ style }) {
    const [recipes, setRecipe] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function preload() {
            setLoading(true)
            const recipesArr = []
            for (let i = 0; i < 9; i++) {
                const dataRecipes = await fetchDataRandom();
                recipesArr.push(dataRecipes.meals[0])
            }
            console.log(recipesArr)
            setRecipe(recipesArr);

            // const dataRecipeId = await fetchDataMealId()
            // console.log(dataRecipeId)
            setLoading(false)
        }
        preload()
    }, [])

    if (loading) {
        return (
            <Layout.Content style={{ ...contentStyle, ...style }}>
                <div style={spinStyle}>
                    <Spin indicator={<LoadingOutlined spin />} size="large" />
                </div>
            </Layout.Content>
        )
    }

    return (
        <Layout.Content style={{ ...contentStyle, ...style }}>
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Flex gap={30} wrap={true} style={{ marginBottom: 20 }}>
                        {recipes.map((recipe, index) => {
                            return <RecipeCard cardWidth="calc((100% / 3) - 20px)" key={`${recipe.idMeal}-${index}`} recipe={recipe} />
                        })}
                    </Flex>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: '#fff',
                                    colorPrimaryHover: '#feb47b',
                                    colorPrimaryActive: '#e67e22',
                                },
                            },
                        }}
                    >
                        <Button>
                            Load more...
                        </Button>
                    </ConfigProvider>
                </div>
            </div>
        </Layout.Content>
    )
}