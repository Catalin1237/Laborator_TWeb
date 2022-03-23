import { Layout, Menu, Form, Input, Button, notification } from 'antd';
import { Card } from 'antd';
import './layoutStyle.css';

const { Header, Content, Footer } = Layout;

const cardInfo = [
    {
        id: 1,
        title: 'Titlu 1',
        description: "Descriere 1",
        phoneNumber: 1234
    },
    {
        id: 2,
        title: 'Titlu 2',
        description: "Descriere 2",
        phoneNumber: 1234
    },
    {
        id: 3,
        title: 'Titlu 3',
        description: "Descriere 3",
        phoneNumber: 1234
    },
    {
        id: 4,
        title: 'Titlu 4',
        description: "Descriere 4",
        phoneNumber: 1234
    },
];

const MyCard = ({title, description, phoneNumber} : {title: string, description: string, phoneNumber: number}) => {

    return(
        <Card 
            title={ title }  
            bordered={ true } 
            hoverable={ true }
            size='small'
        >
            <b><i>Descriere</i>:</b> <br />{ description }
            <br /> <br />
            <b><i>Telefon:</i></b> <br />{ phoneNumber }
        </Card>
    )
}

const MyForm = () => {

    const onFinish = (values: any) => {
        notification.open({
          message: 'Deschide consola pe F12.',
        });
        console.log('Success:', values);
    };

    return(
        <Form
            name='basic'
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 5}}
            onFinish={onFinish}
            autoComplete="off"
        >

            <Form.Item
                label="Titlul:"
                name="titlu"
                rules={[
                    { required: true, message: 'Introdu un titlu!!!'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Textul din interior:"
                name="text"
                rules={[
                    { required: true, message: 'Introdu un text!!!'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Numarul de telefon:"
                name="nrTelefon"
                rules={[
                    { required: true, message: 'Introdu un text!!!'}
                ]}
            >
                <Input type={ 'number' } />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 7}}>
                <Button type='primary' htmlType='submit' ghost>
                    Introdu
                </Button>

            </Form.Item>

        </Form>
    )
}

export const MyLayout = () => {

    return(
        <Layout className="layout">

            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(4).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>

            <main>
                <Content style={{ padding: '0 50px' }}>
                    {/* form */}
                    <MyForm />
                    
                    <div className="site-layout-content grid-3">                   

                        {/* cards */}
                        {
                            cardInfo.map((el, index) => {
                                return(

                                    <MyCard key={ el.id } title={ el.title } description={ el.description } phoneNumber={ el.phoneNumber } />
                                )
                            })
                        }
                    </div>
                </Content>
            </main>

            <Footer className='footer'>Calestru Catalin, CR-191</Footer>
      </Layout>
    )
}