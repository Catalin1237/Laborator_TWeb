import { Layout, Menu } from 'antd';
import './layout.css';

const { Header } = Layout;

export const HeaderLayout = () => {
    return(
        <Header>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={ [ '1' ] }>
                { new Array(4).fill(null).map((_, index) => {
                    const key = index + 1
                    return <Menu.Item key={ key }>{ `Menu ${ key }` }</Menu.Item>
                }) }
            </Menu>
        </Header>
    )
}