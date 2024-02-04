import React, { useState } from 'react';
import "./section.sass"
import Test_pic from "../../../assets/img/profile-pic-test.jpg"

export const Section = () => {
    const [profileImg, setprofileImg] = useState([]);
    const [image, setImage] = useState(null);
    const handlechange = (e) => {
        const selectedImage = e.target.files[0];
        console.log(selectedImage);
        setImage(URL.createObjectURL(selectedImage));
        
    };
    const showD = () => {
        console.log(image);
    }
    return (
        <>

            {/* sec-1 pic & name */}
            <div className='flex flex-row gap-32 items-center justify-center p-10 bg-white rounded-xl w-fit m-auto '>
                <div className='border-4 border-[#161E34]  h-[200px] w-[200px] rounded-full '>

                    <img className='object-cover rounded-full ' src={(image)} alt="" />

                </div>
                <div className='flex flex-col  gap-3'>
                    <div className='flex flex-row gap-16 '>
                        <h1 className='text-xl font-bold '> Username : </h1>
                        <h1 className='text-xl opacity-75'> cd Badr </h1>
                    </div>

                    <div className='flex flex-row gap-16'>
                        <h1 className='text-xl font-bold '> FirstName : </h1>
                        <h1 className='text-xl opacity-75'> Badreddine </h1>
                    </div>

                    <div className='flex flex-row gap-16'>
                        <h1 className='text-xl font-bold '> LastName : </h1>
                        <h1 className='text-xl opacity-75'> Faras </h1>
                    </div>

                    <div className='flex flex-row gap-16'>
                        <h1 className='text-xl font-bold '> Email : </h1>
                        <h1 className='text-xl opacity-75'> Badr@gmail.com </h1>
                    </div>

                </div>

            </div>

            {/* sec-2 form */}
            <div className='flex justify-center  p-10 gap-10 '>

                <div className=' flex flex-col gap-3 items-center bg-white rounded-xl p-3 h-[50%]' >
                    <h1 className='text-center  text-xl font-bold '>Profile picture :</h1>
                    <div className='flex flex-col gap-2 items-center '>

                        <div class="input-div ">
                                <img id='test' className='object-cover rounded-full filter blur-[2px]  cursor-pointer z-[0]' on  src={(image)} alt="" />
                                <input class="input z-10 cursor-pointer file:cursor-pointer" name="file" type="file" onChange={(e) => handlechange(e)}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                        </div>

                    </div>

                    <button className='text-white bg-[#35c635] p-3 rounded-full w-fit w-32 m-auto font-bold ' >Upload</button>
                    

                </div>

                <div className=' flex flex-col gap-3 bg-white rounded-xl p-3'>
                    <h1 className='text-center  text-xl font-bold '>User Infos :</h1>
                    <input className=' outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='New FirstName' />
                    <input className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='New LastName' />
                    <input className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='New Email' />
                    <div className='flex flex-row gap-3'>
                        <input className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='Current password' />
                        <input className='outline-none border-[1.5px] border-[#6978a04f] h-14 w-50 rounded-xl p-5 bg-[#f4f7fb]' type="text" placeholder='New password' />
                    </div>
                    <div>
                        <textarea className='outline-none border-[1.5px] border-[#6978a04f] h-28 w-50 rounded-xl p-5 bg-[#f4f7fb] w-full' name="" id="" placeholder='New Bio'></textarea>
                    </div>

                    <button className='text-white bg-[#1089F9] p-3 rounded-full w-fit w-32 m-auto font-bold'>Apply</button>
                </div>


            </div>
        </>
    );
};

