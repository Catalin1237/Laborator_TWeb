import { Form, Input, Button, notification } from 'antd';
import { useState } from 'react';

export const FormHero = () => {

    const onFinish = (values: any) => {
        notification.open({
            message: 'Deschide consola pe F12.',
        });
    };

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [superHeroName, setSuperHeroName] = useState("");
    const [supHeroPower, setSupHeroPower] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");


    const submitHero = () => {
        const info = {
            "1. Name: ": name,
            "2. Surname: ": surname,
            "3. Hero Name: ": superHeroName,
            "4. Hero Power: ": supHeroPower,
            "5. Address: ": address,
            "6. Age: ": age
        };

        console.log(info)
    }

    return (
        <>
            <Form
                name='basic'
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                autoComplete="off"
                onFinish={ onFinish}
            >

                <Form.Item
                    label="Name:"
                    name="name"
                    rules={[
                        { required: true, message: 'Insert hero name!!!' }
                    ]}
                >
                    <Input
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </Form.Item>

                <Form.Item
                    label="Surname:"
                    name="surname"
                    rules={[
                        { required: true, message: 'Insert hero surname!!!' }
                    ]}
                >
                    <Input
                        onChange={(e) => { setSurname(e.target.value); }}
                    />
                </Form.Item>

                <Form.Item
                    label="Hero Name"
                    name="superHeroName"
                    rules={[
                        { required: true, message: 'Insert the super hero name!!!' }
                    ]}
                >
                    <Input
                        onChange={(e) => { setSuperHeroName(e.target.value); }}
                    />
                </Form.Item>

                <Form.Item
                    label="Hero Power"
                    name="supHeroPower"
                    rules={[
                        { required: true, message: 'Insert the super hero power!!!' }
                    ]}
                >

                    <Input
                        onChange={(e) => { setSupHeroPower(e.target.value); }}
                    />

                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        { required: true, message: 'Insert hero address!!!' }
                    ]}
                >
                    <Input
                        onChange={(e) => { setAddress(e.target.value); }}
                    />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        { required: true, message: 'Input hero age!!!' }
                    ]}
                >
                    <Input
                        type={"number"}
                        onChange={(e) => { setAge(e.target.value); }}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 7 }}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        onClick={ submitHero }
                        ghost
                    >
                        Introdu
                    </Button>

                </Form.Item>

            </Form>
        </>
    );
}