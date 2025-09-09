import { Layout, Menu } from 'antd';
import { fetchDataMealCategories } from '../../services/api';
import { useEffect, useState } from 'react';

const siderStyle = {
    padding: '1rem',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '4px 0 10px -2px rgba(0, 0, 0, 0.1)'
};

const menuStyle = {
    border: 'none',
    background: 'transparent' 
}

export default function AppSider() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function preload() {
            const dataRecipes = await fetchDataMealCategories();
            setCategories(dataRecipes.categories || [])
            console.log(dataRecipes)
        }
        preload()
    }, [])

    return (
        <Layout.Sider width="15%" style={siderStyle}>
            <Menu mode="vertical" style={menuStyle}>
                {categories.map(category => (
                    <Menu.Item key={category.strCategory}>
                        {category.strCategory}
                    </Menu.Item>
                ))}
            </Menu>
        </Layout.Sider>
    )
}