import React, { useState } from "react";
import "../../LoginPage/LoginForm/LoginForm.css";
import Card from "../Card/Card";
import { database } from '../../database';

const LoginForm = (setIsLoggesIn) => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState({});

// console.log(username,password);
const error = {
    username: "ชื่อผู้ใช้ไม่ถูกต้อง",
    password: "รหัสผ่านไม่ถูกต้อง",
    noUsername: "กรุณาใส่ชื่อผู้ใช้",
    noPassword: "กรุณาใส่รหัสผ่าน",
};
const handleSubmit = (e) => {
    //ไม่ให้โหลดหน้าซ้ำ
    e.preventDefault();

    if (!username){
        //ไม่ได้ใส่ username
        setErrorMessage({name: "noUsername", message: error.noUsername});
        return;
    }
    if (!password){
        //ไม่ได้ใส่ password
        setErrorMessage({name: "noPassword", message: error.noPassword});
        return;
    }

    //ค้นหาข้อมูล user
    const currentUser = database.find((user) => user.username === username);
    if (currentUser) {
        if(currentUser.password !== password){
            //รหัสผ่านผิด
            errorMessage({name: "password", message: error.password});
        } else {
            //correct pass == login
            setErrorMessage({});
            setIsLoggesIn(true);


        }
        

    } else {
        // correct == login
        errorMessage({name: "username", message: error.username});
    }

};

//render error mess
const renderErrorMsg = (name) =>name === errorMessage.name && <p className="error_msg">{errorMessage.message}</p>;
 

    return(
        <Card>
            <h1 className="title">เข้าสู่ระบบ</h1>
            <from onSubmit={handleSubmit}>
                <div className="inputs">
                    <input 
                        type="text" 
                        placeholder="เลขทะเบียนนักศึกษา/เลขประจำตัวประชาชน" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {renderErrorMsg("username")}
                    {renderErrorMsg("noUsername")}
                    <input 
                        type="password" 
                        placeholder="รหัสผ่าน"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {renderErrorMsg("password")}
                    {renderErrorMsg("noPassword")}
                
                </div>
            
            </from>
            <br/><br/>
            <div className="link_forget">
                ลืมรหัสผ่านหรือไม่?
                <a href="" className="small">
                    ติดต่อเจ้าหน้าที่
                </a>
            </div>

            <input type="submit" value="เข้าสู่ระบบ" className="loggin_button"/>
        </Card>
    ) 
    
        // <div className="cover">
        //     <h1>เข้าสู่ระบบ</h1>
        //     <input type="text" placeholder="เลขทะเบียนนักศึกษา/เลขประจำตัวประชาชน"/>
        //     <input type="password" placeholder="รหัสผ่าน"/>

        // </div>
    
}


export default LoginForm