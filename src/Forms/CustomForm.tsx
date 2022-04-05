import { Button, Form, Input, InputNumber, notification } from 'antd'
import { useState } from 'react'

export const CustomForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);

    const submitInfo = (value: any) => {
        const result = {
            title,
            description,
            phoneNumber
        }

        notification.open({
            message: "Deschide consola cu F12!"
        })
        console.log("Succes: ", result);
    }

    return(
        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 5 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="Titlu"
                name="titlu"
                rules={[{ required: true, message: 'Introduceti un titlu!' }]}
            >
                <Input 
                    onChange={ (e) => setTitle(e.target.value) }
                />
            </Form.Item>

            <Form.Item
                label="Descriere"
                name="descriere"
                rules={[{ required: true, message: 'Introduceti o descriere!' }]}
            >
                <Input.TextArea 
                    onChange={ (e) => setDescription(e.target.value)}
                />
            </Form.Item>
            
            <Form.Item
                label="Telefon"
                name="phone"
                rules={[{ required: true, message: 'Introduceti un numar de telefon!', type: 'number' }]}
            >
                <InputNumber 
                    value={ phoneNumber }
                    onChange={ (num) => setPhoneNumber(num)}    
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
                <Button type="primary" htmlType="submit" onClick={ submitInfo }>
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}