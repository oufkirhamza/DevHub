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

export const Section = () => {
    const [profileImg, setProfileImg] = useState([]);
    const [image, setImage] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [newPasswordPolicyError, setNewPasswordPolicyError] = useState(false);

    const handlechange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    const [userInfo, setUserInfo] = useState({
        username: 'cd badr',
        firstName: 'Badreddine',
        lastName: 'Faras',
        email: 'Badr@gmail.com',
        bio: 'dima raja',
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

            if (!passwordRegex.test(value) && value !== '' && newPasswordPolicyError) {
                alert('New password must be at least 7 characters and contain a mix of uppercase, lowercase, and numbers.');
            }

            setNewPasswordPolicyError(!passwordRegex.test(value));
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
    };

    return (
        <>
            {/* navbar */}
            <div className='bg-[#1089F9] flex items-center  p-5 justify-between'>
                <Link className='text-2xl font-bold text-white' to={'/'}>DevHub</Link>

                <div className='navbar flex justify-around w-[40%]'>
                    <Link className='text-white text-3xl' to={'/home'}><FaHome /></Link>
                    <Link className='text-white text-3xl' to={'/profile'}><FaUser /> </Link>
                    <Link className='text-white text-3xl' to={'/market'}><MdLocalGroceryStore /></Link>
                    <Link className='text-white text-3xl' to={'/suggestions'}><FaUserPlus /></Link>
                    <Link className='text-white text-3xl' to={'/settings'}><IoIosSettings /></Link>
                    <Link className='text-white text-3xl' to={'/groupes'}><HiUserGroup /></Link>
                    <Link className='text-white text-2xl' to={'/'}>Signup</Link>
                    <Link className='text-white text-2xl' to={'/login'}>login</Link>
                </div>
                <input className='w-[40%] p-1 px-3 rounded-full border-none outline-none font-mono' type="text" placeholder='search freinds' />
                <RiLogoutBoxLine className='text-[#F9FAFB] text-2xl cursor-pointer' />
            </div>

            {/* sec-1 pic & name */}
            <div className='flex flex-row justify-center gap-16 items-center  p-10 bg-white rounded-xl w-[700px] m-auto '>

                {/* <img className='object-cover h-[200px] w-[200px] rounded-full ' src={(image)} alt="" /> */}
                <div class="input-div ">
                    <img id='test' className='object-cover rounded-full filter blur-[2px]  cursor-pointer z-[0] w-[200px] h-[200px]' on src={(image)} alt="" />
                    <input class="input z-10 cursor-pointer file:cursor-pointer" name="file" type="file" onChange={(e) => handlechange(e)} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                    <h1 className='absolute text-[#d8d8d8] font-bold bottom-[30%] text-xl '>Upload</h1>
                </div>


                <div className='flex flex-col  gap-3'>

                    <table>
                        <tr>
                            <td class='text-xl font-bold ps-5'>Username:</td>
                            <td class='text-xl opacity-75 ps-5'>cd badr</td>
                        </tr>
                        <tr>
                            <td class='text-xl font-bold ps-5'>FirstName:</td>
                            <td class='text-xl opacity-75 ps-5'>
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
            <div className='flex justify-center  p-5 gap-10 '>



                <div className=' flex flex-col gap-3 bg-white rounded-xl p-3 w-[700px] m-auto p-5'>
                    <h1 className='text-center  text-xl font-bold '>User Infos :</h1>
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

                    <button onClick={handleApplyButtonClick} className='text-white bg-[#1089F9] p-3 rounded-full w-fit w-[8vw] m-auto font-bold'>Apply</button>
                </div>


            </div>
        </>
    );
};

