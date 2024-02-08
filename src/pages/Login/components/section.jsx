import "./section.sass"
import React, { useContext, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { MyContext } from "../../../utils/contextProvider";
import { useNavigate } from "react-router-dom";

class Users {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


export const Section = () => {
    const [myData, setMyData] = useContext(MyContext)

    

    const [newusername, setNewusername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [vérusername, setVérUsername] = useState("");
    const [vérpassword, setVérPassword] = useState("");


    const filterElement = () => {
        const user = new Users(newusername, newPassword);
        // let userpas = myData.filter(element => element.password === user.password);
        let username = myData.filter(element => element.username === user.username);

        setVérUsername(username[0]?.username );
        setVérPassword(username[0]?.password );
    };

    console.log(vérpassword);
    console.log(vérusername);
    console.log(newPassword);
    console.log(newusername);
    const navigate = useNavigate();
    const hello = (e) => {
        e.preventDefault();
        filterElement();
        if (newPassword == vérpassword && newusername == vérusername) {
            navigate('/home')
        } else {
            alert("Passwords do not match or there is a validation error.");
        }
    };
    return (
        <div className='bg-white h-[96vh] w-[[96vw]] justify-around flex items-center'>
            <div>
                <h1 className='text-sky-500 text-6xl font-medium'>logo</h1>
            </div>
            <form className="flex max-w-md flex-col gap-4 w-72">
                <div>
                    <h1 className='text-sky-500 text-center text-4xl font-medium'>Sign in</h1>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username" value="Username" />
                    </div>
                    <TextInput onChange={(e) => setNewusername(e.target.value)} id="username" type="text" placeholder="username" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput onChange={(e) => setNewPassword(e.target.value)} id="password1" placeholder="password" type="password" required />
                </div>
                <div className='flex justify-center'>
                    <Button className='w-[20vw] bg-sky-500' onClick={(e) => { hello(e); filterElement(); }} type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

