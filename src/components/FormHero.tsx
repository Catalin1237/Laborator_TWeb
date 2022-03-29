import { Form, Input, Button, notification } from 'antd';
import { useState } from 'react';
import MainInterface from '../interfaces/MainInterface';

interface ShowHeroProp extends MainInterface {
    myHero: {
        superHeroName: string;
        supHeroPower: string;
        address: string;
        age: string
    };
}

export const ShowHero = (props: ShowHeroProp) => {

    return (
        <>
            <table>

                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Super Hero Name</th>
                    <th>Super Hero Power</th>
                    <th>Address</th>
                    <th>Age</th>
                </tr>

                <tr>

                    <td>{props.mainInt.name}</td>
                    <td>{props.mainInt.surname}</td>
                    <td>{props.myHero.superHeroName}</td>
                    <td>{props.myHero.supHeroPower}</td>
                    <td>{props.myHero.address}</td>
                    <td>{props.myHero.age}</td>

                </tr>

            </table>
        </>
    );
}

export let infoHero = {
    name: "Peter",
    surname: "Parker",
    superHeroName: "Spiderman",
    supHeroPower: "Spider power",
    address: "Queens",
    age: "16",
}

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
    const [age, setAge] = useState("0");


    const submitHero = () => {
        infoHero = {
            name: name,
            surname: surname,
            superHeroName: superHeroName,
            supHeroPower: supHeroPower,
            address: address,
            age: age
        }
    }

    

    return (
        <>
            <Form
                name='basic'
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                autoComplete="off"
                onFinish={ onFinish }
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