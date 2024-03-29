import "./section.sass";
import React, { useContext, useState, useEffect } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { MyContext } from "../../../utils/contextProvider";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/Website_Creator-amico.png";



export const Section = () => {
    const [myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe, connectedUser, setConnectedUser] = useContext(MyContext)
    const [newusername, setNewusername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const navigate = useNavigate();

    const hello = (e) => {
        e.preventDefault();
        // let userpas = myData.filter(element => element.password === user.password);
        console.log(myData);
        const compare = myData.find(element => element.userName == newusername && element.passWord == newPassword)
        console.log(compare);
        console.log(newusername,newPassword);
        // filterElement();
        if (compare) {
            setConnectedUser(user)
            navigate('/home')
        } else {
            alert("Passwords do not match or there is a validation error.");
        }
    };

    return (
        <div className='bg-[#030712] h-[100vh] justify-around flex items-center'>
            <div className=''>
                <img src={logo} width={"550px"} alt="" />
            </div>
            <form className="flex max-w-md flex-col gap-4 w-[50vw] bg-[#030712] border-2 border-[#f9fafb4c]  p-7">
                <div>
                    <h1 className='text-[#6c28d9c4] text-center text-4xl font-medium'>Sign in</h1>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className="text-white" htmlFor="username" value="Username" />
                    </div>
                    <TextInput onChange={(e) => setNewusername(e.target.value)} id="username" type="text" placeholder="username" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className="text-white" htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput onChange={(e) => setNewPassword(e.target.value)} id="password1" placeholder="password" type="password" required />
                </div>
                <div className='flex gap-2  text-white items-center'>
                    <p>I dont have a account</p>
                    <Link className='text-[#6c28d9c4] border-b-2 border-[#6c28d9c4] ' to={'/'}>Sign up</Link>
                </div>
                <div className='flex justify-center'>
                    <Button className='w-[20vw] text-white bg-[#6c28d9c4]' onClick={(e) => { hello(e) }} type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};
