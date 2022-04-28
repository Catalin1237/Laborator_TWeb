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
        
        const localInfo = localStorage.getItem("login");
        let este = false;

        if(localInfo){
            const itemsData = JSON.parse(localInfo);
            
            for(let i=0; i<itemsData.length; i++){
                if(itemsData[i].user == user && itemsData[i].passwd == passwd){
                    alert("Logarea a fost efectuata cu succes");
                    este = true;
                    break;
                }
            }

            if(!este){
                alert("User sau parola e gresita!")
            }
        }


        // console.log();
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
                    />
                    
                    <br />

                    <label>Password: </label>
                    <input 
                        value={ passwd }
                        onChange={ (e) => {setPasswd(e.target.value)}}
                        type="password" 
                        // type="text" 
                        placeholder="password" 
                        autoComplete="false" 
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