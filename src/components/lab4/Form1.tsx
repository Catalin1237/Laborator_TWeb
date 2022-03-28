import { Form, Input, Button, notification} from 'antd';
import { useState } from 'react';
import SimpleName from './nameSurname';
import Hero from './superHeroInfo';



export interface HeroProps{
    hero: Hero[];
}

export const FormHero = ({hero}: HeroProps) => {

    const onFinish = () => {
        notification.open({
            message: 'Deschide consola pe F12.',
          });
    }
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [hName, sethName] = useState("");
    const [power, setPower] = useState("");
    const [add, setAdd] = useState("");

    const submitValue = () =>{
        const fullInfo ={
            "1. Name" : name,
            "2. Surname" : surname,
            "3. Hero Name" : hName,
            "4. Power" : power,
            "5. Address" : add,
        };

        console.log(fullInfo);
    }

    return(

        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 5 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={ onFinish }
        >
            <Form.Item
            label="Name"
            name="name"
            rules={[
                { required: true, message: "Insert Hero real name!"}
            ]}
            >
            <Input 
                onChange={ (e) => {setName(e.target.value);}}
            />
            </Form.Item>
    
            <Form.Item
            label="Surname"
            name="surname"
            rules={[
                { required: true, message: "Insert Hero real surname!"}
            ]}
            >
            <Input 
                onChange={ (e) => {setSurname(e.target.value);}}
            />
            </Form.Item>

            <Form.Item
            label="Hero name"
            name="hName"
            rules={[
                { required: true, message: "Insert Hero name!"}
            ]}
            >
                <Input 
                    onChange={ (e) => {sethName(e.target.value);}}
                />
            </Form.Item>

            <Form.Item
            label="Superpower"
            name="power"
            rules={[
                { required: true, message: "Insert Hero powers!"}
            ]}
            >
                <Input 
                    onChange={ (e) => {setPower(e.target.value);}}
                />
            </Form.Item>

            <Form.Item
            label="Address"
            name="add"
            rules={[
                { required: true, message: "Insert Hero address!"}
            ]}
            >
                <Input 
                    onChange={ (e) => {setAdd(e.target.value);}}
                />
            </Form.Item>
    
            <Form.Item wrapperCol={{ offset: 9, span: 7 }}>
            <Button type="primary" htmlType="submit" onClick={ submitValue }>
                Submit
            </Button>
            </Form.Item>
        </Form>

    );
}