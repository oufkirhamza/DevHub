import React, { useContext } from 'react';
import "./section.sass"
import { Alert, Button, Card, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import logo from "../../../assets/img/Website_Creator-amico.png"



export const Section = () => {
    const [myData, setMyData] = useContext(MyContext)
    
    const navigate = useNavigate();
    
    const formatName = (name) => {
        let nameArray = name.split(" ");
        let formattedNameArray = nameArray.map(word => word[0].toUpperCase() + word.substr(1).toLowerCase());
        let formattedName = formattedNameArray.join(" ");
        formattedName = formattedName.replace(/,/g, ' ');
        return formattedName;
    }


    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repeat, setrepeat] = useState("");
    const [validatedEmail, setValidatedEmail] = useState("");
    const [validatedPassword, setValidatedPassword] = useState("");
    const [dateDeNaissance, setdateDeNaissance] = useState("");
    const [Vérusername, setVérUsername] = useState("");
    
    class users {
        constructor(username, email, password, firstname, lastname , phone ,date) {
            this.username = username
            this.email = email
            this.password = password
            this.firstname = firstname
            this.lastname = lastname
            this.phone = phone
            this.date = date
        }
    }

    const user = new users();
    user.username = username;
    user.email = email;
    user.password = password;
    user.firstname = firstname;
    user.lastname = lastname;
    user.phone = phone;
    user.date = dateDeNaissance;

    const PushArray = (newUser) => {
        let newtable = [...myData, user];
        setMyData(newtable);
        console.log(newtable);
        console.log(myData);
        // Reset form fields
        setfirstname("");
        setlastname("");
        setusername("");
        setphone("");
        setemail("");
        setpassword("");
        setrepeat("");
        setValidatedEmail("");
        setValidatedPassword("");
        setdateDeNaissance("");
    };
    const filterElement = () => {

        setVérUsername(username[0]?.username || "");
    };
    const hello = (e) => {
        e.preventDefault();
        filterElement();
        

        // Validate and prompt for email
        const validateEmail = (inputEmail) => {
            const trimmedEmail = inputEmail.trim().toLowerCase().replace(/ /g, '');
            if (trimmedEmail.length < 10 || trimmedEmail.indexOf('@') === -1 || (trimmedEmail.split('@').length - 1 !== 1)) {
                setValidatedEmail("Enter a valid email (at least 10 characters and @).");
                return false;
            }
            setValidatedEmail("");
            return true;
        }
        let Password = password.trim();
        while (Password.length < 7 || !(/[A-Z]/.test(Password) && /[a-z]/.test(Password) && /\d/.test(Password) && /[@#\-+*/]/.test(Password))) {
            setValidatedPassword("Enter a strong password (at least 7 characters with a mix of uppercase, lowercase, numbers, and special characters).");
            return; 
        }

    

        if (password && repeat && password === repeat && validateEmail(email)) {
            const formattedUsername = formatName(username);
            navigate('/login');
        } else {
            alert("Passwords do not match or there is a validation error.");
        }

        let newtable = [...myData, newUser];
        setMyData(newtable);
    }


    return (
        <div className='flex justify-around items-center h-[100vh] p-7 gap-9 bg-[#030712]'>
            <div className=''>
                <img src={logo} width={"550px"} alt="" />
            </div>
            <Card className="w-[50vw] bg-[#030712] border-[#f9fafb4c] border-2">
                <form className="flex flex-col gap-2 h-[68vh]">
                    <div className='flex justify-center'>
                        <h1 className='text-violet-600 text-4xl font-medium'>Sign Up</h1>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label className='text-white' htmlFor="input-gray" color="gray" value="First name" />
                            </div>
                            <TextInput onChange={(e) => setfirstname(e.target.value)} id="input-gray" placeholder="first name" required color="gray" />
                        </div>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label className='text-white'  htmlFor="input-gray" color="gray" value="Last name" />
                            </div>
                            <TextInput onChange={(e) => setlastname(e.target.value)} id="input-gray" placeholder="Last name" required color="gray" />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label className='text-white' htmlFor="input-gray" color="gray" value="Username" />
                        </div>
                        <TextInput onChange={(e) => setusername(e.target.value)} id="input-gray" placeholder="username" required color="gray" />
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label className='text-white' htmlFor="input-gray" color="gray" value="Phone Number" />
                            </div>
                            <TextInput onChange={(e) => setphone(e.target.value)} type='number' id="input-gray" placeholder="Phone Number" required color="gray" />
                        </div>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label className='text-white' htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput onChange={(e) => setemail(e.target.value)} id="email1" type="email" placeholder="name@flowbite.com" required />
                            {validatedEmail && <p className="text-red-500">{validatedEmail}</p>}
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label className='text-white' htmlFor="input-gray" color="gray" value="Date" />
                        </div>
                        <TextInput onChange={(e) => setdateDeNaissance(e.target.value)} id="input-gray" placeholder="Date" type='date' required color="gray" />
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label className='text-white' htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput onChange={(e) => setpassword(e.target.value)} id="password1" placeholder="password" type="password" required />
                            {validatedPassword && <p className="text-red-500">{validatedPassword}</p>} {/* Corrected variable name */}
                        </div>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label className='text-white' htmlFor="repeat-password" value="Repeat password" />
                            </div>
                            <TextInput onChange={(e) => setrepeat(e.target.value)} id="repeat-password" placeholder="repeat-password" type="password" required shadow />
                        </div>
                    </div>
                </form>
                <div className='flex justify-center pt-4'>
                    <Button className='w-[20vw] bg-sky-500' onClick={(e) => {
                            PushArray();
                            hello(e);
                            filterElement();
                        }} type="submit">
                            Submit
                    </Button>
                </div>

            </Card>
        </div>
    );
};