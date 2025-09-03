import { Layout, Flex, Input, ConfigProvider } from 'antd';
import './AppLayout.css'
import './AppHeader.css'

const headerStyle = {
    color: '#fff',
    height: 100,
    backgroundColor: 'rgb(248, 183, 85)',
    padding: '1rem'
};

export default function AppHeader() {
    return (
        <Layout.Header style={headerStyle}>
            <div className="container">
                <Flex justify='space-between' align='center'>
                    <h1 style={{ margin: 0 }}>Сulinary guide</h1>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimaryHover: '#feb47b',
                                    hoverBorderColor: '#ff7e5f',
                                },
                                Input: {
                                    hoverBorderColor: '#ff7e5f', 
                                    activeBorderColor: '#ff7e5f', 
                                    activeShadow: '0 0 0 2px rgba(255, 126, 95, 0.2)',
                                },
                            },
                        }}
                    >
                        <Input.Search
                            placeholder="find recipe"
                            style={{ width: 400 }}
                        />
                    </ConfigProvider>
                </Flex>
            </div>
        </Layout.Header>
    )
}