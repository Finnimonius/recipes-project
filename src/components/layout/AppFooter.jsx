import { Layout } from 'antd';

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 100,
    backgroundColor: 'rgb(248, 183, 85)',
};

export default function AppFooter() {
    return (<Layout.Footer style={footerStyle}></Layout.Footer>)
    
}