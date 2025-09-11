import { Layout, Menu, Typography } from 'antd';
import { fetchDataMealCategories } from '../../services/api';
import { useEffect, useState } from 'react';
import { 
    FireOutlined, 
    CoffeeOutlined, 
    GiftOutlined, 
    EnvironmentOutlined,
    StarOutlined,
    AppleOutlined,
    CarOutlined,
    CloudOutlined,
    EyeOutlined,
    HeartOutlined,
    HomeOutlined,
    MailOutlined,
    MehOutlined,
    PhoneOutlined,
    RocketOutlined,
    SmileOutlined,
    ToolOutlined,
    TrophyOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const siderStyle = {
    padding: '2rem 1rem',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '4px 0 15px -2px rgba(0, 0, 0, 0.12)',
    backdropFilter: 'blur(10px)',
    overflowY: 'auto'
};

const menuStyle = {
    border: 'none',
    background: 'transparent',
    marginTop: '2rem'
};

const menuItemStyle = {
    height: '50px',
    margin: '8px 0',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    color: '#2d3436'
};

const iconStyle = {
    fontSize: '18px',
    marginRight: '12px'
};

const getCategoryIcon = (categoryName) => {
    const iconMap = {
        'Beef': <FireOutlined style={iconStyle} />,
        'Chicken': <EnvironmentOutlined style={iconStyle} />,
        'Dessert': <GiftOutlined style={iconStyle} />,
        'Lamb': <AppleOutlined style={iconStyle} />,
        'Miscellaneous': <CoffeeOutlined style={iconStyle} />,
        'Pasta': <CarOutlined style={iconStyle} />,
        'Pork': <CloudOutlined style={iconStyle} />,
        'Seafood': <EyeOutlined style={iconStyle} />,
        'Side': <HeartOutlined style={iconStyle} />,
        'Starter': <HomeOutlined style={iconStyle} />,
        'Vegan': <StarOutlined style={iconStyle} />,
        'Vegetarian': <AppleOutlined style={iconStyle} />,
        'Breakfast': <SunOutlined style={iconStyle} />,
        'Goat': <MehOutlined style={iconStyle} />,
        'Soup': <MailOutlined style={iconStyle} />,
        'Salad': <PhoneOutlined style={iconStyle} />,
        'Pizza': <RocketOutlined style={iconStyle} />,
        'Sandwich': <SmileOutlined style={iconStyle} />,
        'BBQ': <ToolOutlined style={iconStyle} />,
        'Steak': <TrophyOutlined style={iconStyle} />,
        'Sushi': <UserOutlined style={iconStyle} />
    };
    
    return iconMap[categoryName] || <CoffeeOutlined style={iconStyle} />;
};

const SunOutlined = () => <span style={iconStyle}>☀️</span>;

export default function AppSider() {
    const [categories, setCategories] = useState([]);
    const [selectedKey, setSelectedKey] = useState('');

    useEffect(() => {
        async function preload() {
            const dataRecipes = await fetchDataMealCategories();
            setCategories(dataRecipes.categories || []);
        }
        preload();
    }, []);

    const handleMenuClick = (category) => {
        setSelectedKey(category);
        console.log('Selected category:', category);
    };

    return (
        <Layout.Sider width="15%" style={siderStyle}>
            <Title level={4} style={{ textAlign: 'center', color: '#2d3436', marginBottom: 0, fontWeight: 600 }}>
                Categories
            </Title>

            <Menu mode="vertical" style={menuStyle} selectedKeys={[selectedKey]}>
                {categories.map(category => (
                    <Menu.Item 
                        key={category.strCategory}
                        style={menuItemStyle}
                        icon={getCategoryIcon(category.strCategory)}
                        onClick={() => handleMenuClick(category.strCategory)}
                    >
                        {category.strCategory}
                    </Menu.Item>
                ))}
            </Menu>
        </Layout.Sider>
    );
}