import { Layout, Menu } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import { ContentLayout } from './ContentLayout';
import InfoCard from './InfoCard';
import InsertAndRead from './InsertAndReadLocal';
import './layout.css';
import TabelInfo from './TableInfo';

const { Header } = Layout;

export const HeaderLayout = () => {
    return(
        <>
            <Header>
            <Menu theme='dark' mode='horizontal'>

                <Menu.Item key={1}>
                    <Link to="/">Insert Info</Link>
                </Menu.Item>
                <Menu.Item key={2}>
                    <Link to="/cards">Cards</Link>
                </Menu.Item>
                <Menu.Item key={3}>
                    <Link to="/table">Table info</Link>
                </Menu.Item>
                <Menu.Item key={4}>
                    <Link to="/insert">Insert localStorage</Link>
                </Menu.Item>
                
            </Menu>
        </Header>

        <Routes>
            <Route path='/' element={<ContentLayout />} />
            <Route path='/cards' element={<InfoCard />} />
            <Route path='/table' element={<TabelInfo />} />
            <Route path='/insert' element={<InsertAndRead />} />
        </Routes>
        </>
    )
}