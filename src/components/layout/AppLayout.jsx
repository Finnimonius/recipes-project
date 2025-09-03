import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100vh'
};

export default function AppLayout() {

    return (
        <Layout style={layoutStyle}>
            <Layout>
                <AppHeader />
                <AppContent />
                <AppFooter />
            </Layout>
        </Layout>
    )
}