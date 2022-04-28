import { Content } from 'antd/lib/layout/layout'
import { observer } from 'mobx-react-lite';
import { CustomForm } from '../Forms/CustomForm';
import './layout.css';



export const ContentLayout = () => {
    return(
        <main>
            <Content style={ { padding: '0 50px' } }>
                <div>
                    <CustomForm />
                </div>
            </Content>
        </main>
    )
}