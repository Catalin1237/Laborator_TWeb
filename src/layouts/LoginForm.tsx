import { useState } from "react";
import { Form, Button } from "antd";


const LoginForm = () =>{

    const [user, setUser] = useState("");
    const [passwd, setPasswd] = useState("");

    const submitInfo = () =>{
        const result = {
            user,
            passwd
        }
        

        console.log(result);
    }

    return(
        <>
            <div className="container">
                <h1>Login</h1>

                <Form>

                    <label>Login: </label>
                    <input 
                        value={ user }
                        onChange = { (e) => {setUser(e.target.value)}}
                        type="text" 
                        placeholder="user name / email" 
                        autoComplete="false" 
                        required
                    />
                    
                    <br />

                    <label>Password: </label>
                    <input 
                        value={ passwd }
                        onChange={ (e) => {setPasswd(e.target.value)}}
                        type="password" 
                        placeholder="password" 
                        autoComplete="false" 
                        required
                    />

                    <br />

                    <Button type="primary" htmlType="submit" onClick={submitInfo}>Login</Button>
                    

                </Form>
            </div>
        </>
    )
}

const Login = () => {
    return(
        <>
            <main>
                <LoginForm />
            </main>
        </>
    )
}

export default Login;