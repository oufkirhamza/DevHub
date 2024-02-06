import React, { useContext, useState } from 'react';
import "./section.sass"
import Test_pic from "../../../assets/img/profile-pic-test.jpg"
import { useParams } from 'react-router-dom';

export const Section = () => {
    const [profileImg, setprofileImg] = useState([]);
    const [image, setImage] = useState(null);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

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
        password: 'badr'
        
    });

    const handleUserInfoChange = (field, value) => {
        if (field === 'firstName' || field === 'lastName') {
          // Limit the input to 10 characters
          if (value.length > 10) {
            alert(`The ${field === 'firstName' ? 'First Name' : 'Last Name'} cannot be more than 10 characters.`);
            return;
          }
        } else if (field === 'email' || field === 'bio') {
          // Limit the input to 20 characters
          if (value.length > 30) {
            alert(`The ${field === 'email' ? 'Email' : 'Bio'} cannot be more than 30 characters.`);
            return;
          }
        }
    
        // Handle password change separately
        if (field === 'password') {
          setPassword(value);
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
    
        if (password !== confirmPassword) {
            setPasswordError(true);
            alert("Password and Confirm Password do not match!");
            return;
        }
    
        // Clear password error when passwords match
        setPasswordError(false);
    
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            ...Object.fromEntries(
                Object.entries(tempChanges).filter(([key, value]) => value !== '')
            ),
            password: password, // Add password to userInfo
        }));
    
        // Clear the tempChanges after applying
        setTempChanges({
            firstName: '',
            lastName: '',
            email: '',
            bio: '',
        });
    
        // Clear password and confirm password fields after applying
        setPassword('');
        setConfirmPassword('');
    };
    return (
        <>

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
                        <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-full rounded-xl p-5 bg-[#f4f7fb]' type="password" placeholder='New password' />
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

