import { Card, Button, Drawer, Tag, Divider, Typography, Space, Image } from "antd"
import { useState } from "react";
import { GlobalOutlined, YoutubeOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function RecipeCard({ recipe, cardWidth }) {
    const [open, setOpen] = useState(false);

    const formatInstructions = (text) => {
        return text.split('\r\n').filter(step => step.trim() !== '');
    };

    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
                ingredients.push({ ingredient, measure });
            }
        }
        return ingredients;
    };

    const ingredients = getIngredients();
    const instructions = formatInstructions(recipe.strInstructions);

    return (
        <>
            <Card
                hoverable
                style={{ 
                    fontSize: 22, 
                    cursor: 'default', 
                    width: cardWidth,
                    borderRadius: 12,
                    overflow: 'hidden'
                }}
                cover={
                    <div style={{ height: 200, overflow: 'hidden' }}>
                        <img 
                            alt={recipe.strMeal} 
                            src={recipe.strMealThumb} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover' 
                            }} 
                        />
                    </div>
                }
            >
                <Card.Meta 
                    style={{ marginBottom: 10 }} 
                    title={
                        <Text strong style={{ fontSize: 18 }}>
                            {recipe.strMeal}
                        </Text>
                    } 
                    description={
                        <Tag color="orange" style={{ marginTop: 8 }}>
                            {recipe.strCategory}
                        </Tag>
                    } 
                />
                <Button 
                    onClick={() => setOpen(true)} 
                    type="primary" 
                    style={{ 
                        padding: '0 20px', 
                        fontSize: 16,
                        height: 40,
                        borderRadius: 8,
                        background: 'rgb(248, 183, 85)',
                        border: 'none'
                    }}
                >
                    View Recipe
                </Button>
            </Card>

            <Drawer
                title={
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Title level={3} style={{ color: '#2c3e50', margin: 0 }}>
                            {recipe.strMeal}
                        </Title>
                        <Tag color="orange">{recipe.strCategory}</Tag>
                    </div>
                }
                placement='right'
                onClose={() => setOpen(false)}
                open={open}
                width='35%'
                styles={{
                    body: { 
                        background: 'rgb(255, 226, 183)',
                        padding: '24px 20px'
                    },
                    header: {
                        background: 'rgb(248, 183, 85)',
                        border: 'none'
                    }
                }}
            >

                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        <Image
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            style={{
                                minHeight: 200,
                                maxHeight: 600,
                                borderRadius: 12,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                            }}
                        />
                    </div>

                    <Space size={[8, 8]} wrap>
                        <Tag icon={<GlobalOutlined />} color="blue">
                            {recipe.strArea}
                        </Tag>
                        {recipe.strTags && recipe.strTags.split(',').map(tag => (
                            <Tag key={tag} color="green">{tag.trim()}</Tag>
                        ))}
                    </Space>

                    <Divider orientation="left">
                        <Text strong style={{ color: '#e67e22' }}>Ingredients</Text>
                    </Divider>
                    
                    <Space direction="vertical" style={{ width: '100%' }} size="small">
                        {ingredients.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '8px 12px',
                                background: 'rgba(255, 255, 255, 0.8)',
                                borderRadius: 8,
                                marginBottom: 4
                            }}>
                                <Text>{item.ingredient}</Text>
                                <Text type="secondary">{item.measure}</Text>
                            </div>
                        ))}
                    </Space>

                    <Divider orientation="left">
                        <Text strong style={{ color: '#e67e22' }}>👨‍🍳 Instructions</Text>
                    </Divider>
                    
                    <Space direction="vertical" style={{ width: '100%' }} size="middle">
                        {instructions.map((step, index) => (
                            <div key={index} style={{
                                background: 'white',
                                padding: '16px',
                                borderRadius: 12,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                <Text strong style={{ color: '#e67e22' }}>Step {index + 1}:</Text>
                                <Paragraph style={{ margin: '8px 0 0 0', lineHeight: 1.6 }}>
                                    {step}
                                </Paragraph>
                            </div>
                        ))}
                    </Space>

                    {(recipe.strYoutube || recipe.strSource) && (
                        <>
                            <Divider orientation="left">
                                <Text strong style={{ color: '#e67e22' }}>🔗 Links</Text>
                            </Divider>
                            <Space direction="vertical" style={{ width: '100%' }}>
                                {recipe.strYoutube && (
                                    <Button 
                                        icon={<YoutubeOutlined />}
                                        href={recipe.strYoutube}
                                        target="_blank"
                                        style={{
                                            background: '#ff4d4f',
                                            color: 'white',
                                            border: 'none'
                                        }}
                                    >
                                        Watch on YouTube
                                    </Button>
                                )}
                            </Space>
                        </>
                    )}
                </Space>
            </Drawer>
        </>
    )
}