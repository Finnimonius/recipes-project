import { Card, Button } from "antd"
import { Spin, Drawer } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from "react";

export default function RecipeCard({ recipe, loading }) {
    const [open, setOpen] = useState(false);

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
                style={{ width: 280, fontSize: 22 }}
                cover={<img alt="example" src={recipe.strMealThumb} />}
            >
                <Card.Meta style={{ marginBottom: 20 }} title={recipe.strMeal} description={recipe.strCategory} />
                <Button onClick={() => setOpen(true)} color="primary" variant="link" style={{ padding: 0 }}>
                    More...
                </Button>
            </Card>
            <Drawer
                style={{ backgroundColor: 'rgb(248, 183, 85)', color: '#fff' }}
                title="Recipe"
                placement='left'
                closable={false}
                onClose={() => setOpen(false)}
                open={open}
                width={'35%'}
            >
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}