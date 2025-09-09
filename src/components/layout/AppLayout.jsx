import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppSider from './AppSider';

const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh'
};



export default function AppLayout() {
    return (
        <Layout style={layoutStyle}>
            <AppHeader />
            <Layout style={{ position: 'relative' }}>
                <AppSider />
                <AppContent />
            </Layout>
            <AppFooter />
        </Layout>
    )
}