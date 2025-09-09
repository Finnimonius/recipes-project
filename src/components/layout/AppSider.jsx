import { Layout } from 'antd';

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1
};

export default function AppSider() {
    return (
        <>
            <Layout.Sider width="15%" style={siderStyle}>
            </Layout.Sider>
        </>
    )
}