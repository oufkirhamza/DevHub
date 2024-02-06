'use client';

import React, { useContext, useState } from 'react';
import "./section.sass"
import { CiCirclePlus, CiHeart, CiSearch } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import imgUser from "../../../assets/img/user.jpg"

import { FaImages, FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import userBanner from "../../../assets/img/bannerGroup.avif"
import { MyContext } from '../../../utils/contextProvider';
import modale from './Modale'
import Modal from './Modale';
import { Likepose, Likeposte } from './Likeposte';
import Comment from './Comment';
import Creategrp from './Creategrp';
import { click } from '@testing-library/user-event/dist/click';


export const Section = () => {

    const [myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe] = useContext(MyContext)
    const [modalOpen, setModalOpen] = useState(false);
    const [like, setLike] = useState(true)
    const [myComment, setMyComment] = useState('')
    const [groupVisible, setGroupVisible] = useState(false)

    const showSec = () => {
        let grp1 = document.querySelector('.grp1')
        grp1.style.display = 'block'
    }

    const showSec1 = () => {
        let grp2 = document.querySelector('.grp2')
        grp2.style.display = 'block'
    }


    return (
        <>
            {/* <Modal className="z-50" /> */}
            <div className='flex bg-gray-100 gap-4 w-[100]'>
                <div className='w-[20%] p-5 bg-gray-100 flex flex-col gap-4'>
                    <div className='border py-11 px-3 flex gap-5 flex-col bg-white shadow-lg rounded-lg'>
                        <h1 className='text-center font-medium text-3xl'>Seggsetion</h1>
                        <div className='text-center flex flex-col gap-3'>
                            <h2 className='border p-2'>Ibrahim</h2>
                            <h2 className='border p-2'>Hamza</h2>
                            <h2 className='border p-2'>Ziko</h2>
                        </div>
                    </div>

                    <div className='border py-5 px-3 flex flex-col gap-3 bg-white shadow-lg rounded-lg'>
                        <div className='text-center flex flex-col gap-3'>
                            {
                                myData.map((element, index) =>
                                    element.profile.groupes.map((blassa, idx) =>
                                        <div>
                                            <div key={idx} className='border py-2 cursor-pointer overflow-auto showdata'>
                                                <h1>{blassa.groupeName}</h1>
                                            </div>
                                        </div>

                                    )
                                )
                            }

                            <div className='flex flex-col gap-3'>
                                <h1 onClick={showSec} className='border py-2 cursor-pointer'>grp1</h1>
                                <h1 onClick={showSec1} className='border py-2'>grp2</h1>
                                <h1 className='border py-2'>grp3</h1>
                            </div>

                        </div>


                    </div>
                    <Creategrp />
                    <div>
                    </div>


                </div>

                <div className='w-[60%] h-fit mt-5  flex flex-col '>
                    <div className=' px-8 w-[100%] flex items-center bg-white rounded-full shadow-lg'>
                        <div className='relative w-[100%] flex gap-3'>
                            <img className='w-[10%] ' src={imgUser} alt="" />
                            <input type="text" className='w-[85%] h-[7vh] rounded-full bg-gray-100 mt-3 px-5' placeholder='Share Something...' />
                            <BsEmojiSmile className='absolute top-6 right-11 text-2xl' />
                        </div>
                        <div >
                            <Modal />
                        </div>
                    </div>


                    <div className='search'>
                    </div>

                    <div className='hidden grp1'>
                        <div className='p-5 flex-col gap-2 bg-white mt-5 rounded-md shadow-lg h-fit'>
                            <div className='flex gap-2'>
                                <img className='w-[5%] ' src={imgUser} alt="" />
                                <div className='flex items-center'>
                                    <h1 className='text-xl'>User1</h1>
                                    <FaEarthAfrica className='text-xs' />
                                </div>
                            </div>

                            <div>
                                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit <span className='text-blue-600'>Lorem, ipsum.</span></h1>
                            </div>

                            <div>
                                <img className='rounded-md' src={userBanner} alt="" />
                                <div className='flex gap-4 py-3'>
                                    <Likeposte />
                                    <Comment /> <div className=' w-[40%] ml-4'></div>
                                </div>
                            </div>


                        </div>

                        <div className='p-5 flex-col gap-2 bg-white mt-5 rounded-md shadow-lg h-fit '>
                            <div className='flex gap-2'>
                                <img className='w-[5%] ' src={imgUser} alt="" />
                                <div className='flex items-center'>
                                    <h1 className='text-xl'>User1</h1>
                                    <FaEarthAfrica className='text-xs' />
                                </div>
                            </div>

                            <div>
                                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit <span className='text-blue-600'>Lorem, ipsum.</span></h1>
                            </div>

                            <div>
                                <img className='rounded-md' src={userBanner} alt="" />
                                <div className='flex gap-4 py-3'>
                                    <Likeposte />
                                    <Comment /> <div className=' w-[40%] ml-4'></div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='hidden grp2'>
                        <div className='p-5 flex-col gap-2 bg-white mt-5 rounded-md shadow-lg h-fit'>
                            <div className='flex gap-2'>
                                <img className='w-[5%] ' src={imgUser} alt="" />
                                <div className='flex items-center'>
                                    <h1 className='text-xl'>User1</h1>
                                    <FaEarthAfrica className='text-xs' />
                                </div>
                            </div>

                            <div>
                                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit <span className='text-blue-600'>Lorem, ipsum.</span></h1>
                            </div>

                            <div>
                                <img className='rounded-md' src={userBanner} alt="" />
                                <div className='flex gap-4 py-3'>
                                    <Likeposte />
                                    <Comment /> <div className=' w-[40%] ml-4'></div>
                                </div>
                            </div>


                        </div>


                    </div>



                </div>


            </div >

        </>
    );
};



