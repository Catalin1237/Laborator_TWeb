import { Form, Input, Button, Checkbox } from 'antd';

export const Form2 = () => {
    return(

        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 5 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
            label="Name"
            name="name"
            >
            <Input />
            </Form.Item>
    
            <Form.Item
            label="Surname"
            name="surname"
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Hero name"
            name="hName"
            >
                <Input />
            </Form.Item>

            <Form.Item
            label="Superpower"
            name="power"
            >
                <Input />
            </Form.Item>

            <Form.Item
            label="Address"
            name="add"
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