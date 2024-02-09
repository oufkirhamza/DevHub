import React, { useContext, useState } from 'react';
import "./section.sass"
import Test_pic from "../../../assets/img/profile-pic-test.jpg"
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MyContext } from '../../../utils/contextProvider';

export const Section = () => {
    const [myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe,connectedUser, setConnectedUser] = useContext(MyContext)

    const [theme, setTheme] = useState("light")
    const [profileImg, setProfileImg] = useState([]);
    const [image, setImage] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [newPasswordPolicyError, setNewPasswordPolicyError] = useState(false);

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const handlechange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    const [userInfo, setUserInfo] = useState({
        username: 'user1',
        firstName: 'ahmed',
        lastName: 'wasim',
        email: 'wasim12@gmail.com',
        bio: 'never give up',
        password: 'badr77'

    });

    const [tempChanges, setTempChanges] = useState({
        firstName: '',
        lastName: '',
        email: '',
        bio: '',
        password: ''

    });

    const handleUserInfoChange = (field, value) => {
        if (field === 'firstName' || field === 'lastName') {
            // Limit the input to 10 characters
            if (value.length > 10) {
                alert(`The ${field === 'firstName' ? 'First Name' : 'Last Name'} cannot be more than 10 characters.`);
                return;
            }
        } else if (field === 'email' || field === 'bio') {
            // Limit the input to 30 characters
            if (value.length > 30) {
                alert(`The ${field === 'email' ? 'Email' : 'Bio'} cannot be more than 30 characters.`);
                return;
            }
        }
    
        // Handle password change separately
        if (field === 'password') {
            setPassword(value);
        } else if (field === 'newPassword') {
            setNewPassword(value);
    
            // Validate the new password only if the field is 'newPassword'
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;
    
            if (!passwordRegex.test(value) && value !== '') {
                setNewPasswordPolicyError(true);
            } else {
                setNewPasswordPolicyError(false);
            }
        } else {
            setTempChanges((prevChanges) => ({
                ...prevChanges,
                [field]: value,
            }));
        }
    };
    

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    const handleApplyButtonClick = () => {
        // Validate email format only for the email field
        if (tempChanges.email && !isValidEmail(tempChanges.email)) {
            alert('Invalid email format');
            // Clear the email input
            setTempChanges((prevChanges) => ({
                ...prevChanges,
                email: '',
            }));
            return;
        }

        // Check if a new password is provided
        if (password !== '' && password !== userInfo.password) {
            setPasswordError(true);
            alert('Current password is incorrect!');
            setPassword('');
            setConfirmPassword('');
            return;
        }

        // Check new password policy
        if (newPasswordPolicyError) {
            alert('New password must be at least 7 characters and contain a mix of uppercase, lowercase, and numbers.');
            
            // Clear the new password input
            setNewPassword('');
    
            return;
        }
    
        // Clear password error when passwords match
        setPasswordError(false);
    
        // Update userInfo with new values
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            ...Object.fromEntries(
                Object.entries(tempChanges).filter(([key, value]) => value !== '')
            ),
            password: newPassword !== '' ? newPassword : prevUserInfo.password,
        }));
    
        // Clear the tempChanges after applying
        setTempChanges({
            firstName: '',
            lastName: '',
            email: '',
            bio: '',
            password: '', // Clear the temporary password value
        });
    
        // Clear password and confirm password fields after applying
        setPassword('');
        setConfirmPassword('');
    
        // Clear the new password input
        setNewPassword('');
    };

    return (
        <>
        <div className={` bg-[#030712] ${theme == "light" ? " bg-[#030712]" : "bg-white"} `}>

            {/* navbar */}
            <div className={`nav  fixed top-0 w-[100%] z-50  flex items-center py-3 px-5 justify-between shadow  shadow-[#6c28d955]`}>
                <Link className='text-xl font-bold text-[#bcbcbc] hover:text-[#F9FAFB]' to={'/'}>DevHub</Link>
                
                <div className='navbar flex justify-around w-[40%]'>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/home'}><FaHome /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/profile'}><FaUser /> </Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/market'}><MdLocalGroceryStore /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/suggestions'}><FaUserPlus /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/settings'}><IoIosSettings /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/groupes'}><HiUserGroup /></Link>
                    {/* <Link className='text-[#F9FAFB] text-2xl' to={'/'}>Signup</Link>
                    <Link className='text-[#F9FAFB] text-2xl' to={'/login'}>login</Link> */}
                </div>
                <input className='w-[40%] p-1 px-3 rounded-full border-none outline-none font-mono' type="text" placeholder='search freinds' />
                <div className='flex gap-2'>
                <RiLogoutBoxLine className='text-[#F9FAFB] text-2xl cursor-pointer' />
                <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/settings'}><IoIosSettings /></Link>
                </div>

                <label class="relative inline-flex items-center cursor-pointer">
                            <input class="sr-only peer" value="" type="checkbox" />
                            <div onClick={handleTheme}
                                class="w-20 h-10 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-[#F9FAFB] before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow shadow-[#F9FAFB] peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                            ></div>
                </label>
            </div>

            {/* sec-1 pic & name */}
            <div className={`flex flex-row justify-center gap-16 items-center  p-10 bg-[#030712]   rounded-xl w-[700px] m-auto mt-[10vh] ${theme == "light" ? " bg-[#030712] text-white border-2 border-[#f9fafb4c]" : "bg-white text-black border-2 border-[#00000025]"}`}>

                {/* <img className='object-cover h-[200px] w-[200px] rounded-full ' src={(image)} alt="" /> */}
                <div className={`input-div ${theme == "light" ? " bg-[#030712] " : "bg-white  shadow-md hover:shadow-xl hover:border-2 hover:border-[#1b1b1b42]"}`}>
                    <img id='test' className='object-cover rounded-full filter blur-[2px]  cursor-pointer z-[0] w-[200px] h-[200px]' on src={(image)} alt="" />
                    <input class="input z-10 cursor-pointer file:cursor-pointer" name="file" type="file" onChange={(e) => handlechange(e)} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                    <h1 className='absolute text-[#d8d8d8] font-bold bottom-[30%] text-xl '>Upload</h1>
                </div>


                <div className='flex flex-col  gap-3'>

                    <table>
                        <tr>
                            <td class='text-xl font-bold ps-5'>Username:</td>
                            <td class='text-xl opacity-75 ps-5'>
                            {userInfo.username.length > 10 ? userInfo.username.substring(0, 10) + '...' : userInfo.username}
                            </td>
                        </tr>
                        <tr>
                            <td class='text-xl font-bold ps-5'>FirstName:</td>
                            <td class='text-xl opacity-75 ps-5'>
                                {/* {connectedUser[0].firstName.length > 10 ? connectedUser[0].firstName.substring(0, 10) + '...' : connectedUser[0].firstName} */}
                                {userInfo.firstName.length > 10 ? userInfo.firstName.substring(0, 10) + '...' : userInfo.firstName}
                            </td>
                        </tr>
                        <tr>
                            <td class='text-xl font-bold ps-5'>LastName:</td>
                            <td class='text-xl opacity-75 ps-5'>
                                {userInfo.lastName.length > 10 ? userInfo.lastName.substring(0, 10) + '...' : userInfo.lastName}
                            </td>
                        </tr>
                        <tr>
                            <td class='text-xl font-bold ps-5'>Email:</td>
                            <td class='text-xl opacity-75 ps-5'>
                                {userInfo.email.length > 10 ? userInfo.email.substring(0, 10) + '...' : userInfo.email}
                            </td>
                        </tr>
                        <tr>
                            <td class='text-xl font-bold ps-5'>Bio:</td>
                            <td class='text-xl opacity-75 ps-5'>
                                {userInfo.bio.length > 10 ? userInfo.bio.substring(0, 10) + '...' : userInfo.bio}
                            </td>
                        </tr>
                    </table>



                </div>

            </div>

            {/* sec-2 form */}
            <div className={`flex justify-center  p-5 gap-10 ${theme == "light" ? " bg-[#030712]" : "bg-white"}`}>



                <div className={` flex flex-col gap-3 bg-[#030712]  rounded-xl  w-[700px] m-auto p-5 ${theme == "light" ? " bg-[#030712] text-white border-2 border-[#f9fafb4c]" : "bg-white text-black border-2 border-[#00000025]"}`}>
                    <h1 className={`text-center  text-xl font-bold ${theme == "light" ? " bg-[#030712] text-white " : "bg-white text-black "}`}>User Infos :</h1>
                    <input onChange={(e) => handleUserInfoChange('firstName', e.target.value)} value={tempChanges.firstName} className=' outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='New FirstName' />
                    <input onChange={(e) => handleUserInfoChange('lastName', e.target.value)} value={tempChanges.lastName} className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='New LastName' />
                    <input onChange={(e) => handleUserInfoChange('email', e.target.value)} value={tempChanges.email} className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='New Email' />
                    <div className='flex flex-row gap-3 '>
                        <input onChange={(e) => handleUserInfoChange('password', e.target.value)} value={password} className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-full rounded-xl p-5 bg-[#f4f7fb]' type="password" placeholder='Current password' />
                        <input onChange={(e) => handleUserInfoChange('newPassword', e.target.value)} value={newPassword} className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-full rounded-xl p-5 bg-[#f4f7fb]' type="password" placeholder='New password' />
                    </div>
                    <div>
                        <textarea onChange={(e) => handleUserInfoChange('bio', e.target.value)} value={tempChanges.bio} className='outline-none border-[1.5px] border-[#6978a04f] h-28 w-50 rounded-xl p-5 bg-[#f4f7fb] w-full' name="" id="" placeholder='New Bio'></textarea>
                    </div>

                    <button onClick={handleApplyButtonClick} className='text-white bg-[#6D28D9] p-3 rounded-full w-[120px] h-[50px] m-auto font-bold'>Apply</button>
                </div>


            </div>
        </div>
        </>
    );
};

