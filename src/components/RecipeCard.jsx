import { Card, Button } from "antd"
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

export default function RecipeCard({ recipe, loading }) {

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 260,
                height: 300,
            }}>
                <Spin indicator={<LoadingOutlined spin />} size="large" />
            </div>
        )
    }

    return (
        <>
            <Card
                hoverable
                style={{ width: 260 }}
                cover={<img alt="example" src={recipe.strMealThumb} />}
                title={
                    <div style={{
                        fontWeight: 'bold'
                    }}>
                        <span style={{ color: 'green', fontSize: 16 }}>Random recipe of the day</span>
                    </div>
                }
            >
                <Card.Meta style={{ marginBottom: 20 }} title={recipe.strMeal} description={recipe.strCategory} />
                <Button color="primary" variant="link" style={{ padding: 0 }}>
                    More...
                </Button>
            </Card>
        </>
    )
}