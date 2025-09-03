import { Layout, Flex, Input } from 'antd';
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
                    <Input.Search className='no-bottom-space' placeholder="input search text" style={{ width: 400 }} />
                </Flex>
            </div>
        </Layout.Header>
    )
}