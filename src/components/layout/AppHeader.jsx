import { Layout } from 'antd';
import './AppLayout.css'

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

export default function AppHeader() {
    return (
        <Layout.Header style={headerStyle}>

        </Layout.Header>
    )
}