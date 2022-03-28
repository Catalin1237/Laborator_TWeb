import { Form, Input, Button, Checkbox } from 'antd';
import SimpleName from './nameSurname';

export const Form1 = () => {
    return(

        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 5 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
            label="Nume"
            name="name"
            >
            <Input />
            </Form.Item>
    
            <Form.Item
            label="Prenume"
            name="surname"
            >
            <Input />
            </Form.Item>
    
            <Form.Item wrapperCol={{ offset: 9, span: 7 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>

    );
}