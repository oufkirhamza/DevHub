
import { useContext, useEffect } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import avatar from "../../../assets/img/attachment_119362573.png"
import zack from "../../../assets/img/zackuser.jpg"


import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button } from 'antd';
import { AiFillPicture, AiOutlineLike } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardBoxFill } from "react-icons/ri";
import { CiShare1 } from "react-icons/ci";
import { Carousel } from 'flowbite-react';
import { Value } from 'sass';

export const FirstSection = () => {
    const [myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe] = useContext(MyContext)


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        console.log(fileList[0]);
    };
    const handleCance = () => {
        setIsModalOpen(false);
    };
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
    ]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    }
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );
    const [postInput, setPostInput] = useState('')
    
    // const [poste, setPoste] = useState(
    //     {
    //         id: "",
    //         image: fileList.originFileObj,
    //         description: postInput,
    //         likes: [],
    //         comments: [],
    //     }
    // )
    const handlPostInput = (e) => {
        // console.log(e.target.value);
        setPostInput(e.target.value)
        // poste.description = e.target.value
    }
    const tchitcharito = (e) => {
        poste.description=postInput
        setPostInput("")
        console.log(poste);
        console.log(fileList);
    }
    // useEffect(() => {
    //     if (poste.description !== '') {
    //         const updatedMyData = [...myData];
    //         updatedMyData[0].profile.poste.push({ ...groupe });
    //         console.log(updatedMyData);
    //         setMyData(updatedMyData);
    //     }
    // }, [groupe.groupeName]);
    return (
        <>
            <div className='bg-slate-50 w-[100%] h-[92vh] flex justify-around'>
                <div className='w-[22%] h-[90vh] p-3 flex flex-col gap-11 items-center bg-white'>
                    <div class=" group  before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-[#1089f9] to-[#35c635] before:absolute before:top-0 w-70 P-3 relative bg-slate-50 shadow-lg flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                        <div class="w-28 bg-blue-700 rounded-full border-4 border-slate-50 z-10  mt-1">
                            <img className='object-cover rounded-full' src={avatar} alt="" />
                        </div>
                        <div class="z-10 bg-slate-50 flex flex-col p-3">
                            <span class="text-2xl font-semibold">George Johnson</span>
                            <div className='flex gap-3 font-mono p-2 items-center'>
                                <div className='flex flex-col w-[30%]'>
                                    <p>2</p>
                                    <p>Posts</p>
                                </div>
                                <div className='flex flex-col w-[30%]'>
                                    <p>120</p>
                                    <p>followers</p>
                                </div>
                                <div className='flex flex-col w-[30%]'>
                                    <p>120</p>
                                    <p>following</p>
                                </div>
                            </div>
                            <p className='text-center' >Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Sit libero ab magni ullam aliquid aliquam quas repudiandae doloremque quasi!.</p>
                        </div>
                    </div>
                    <div class=" group w-70 bg-slate-50 shadow-lg text-center p-3 rounded-xl ">
                        <p className='text-center' >© 2024 WebDev, Inc. All rights reserved.</p>
                    </div>
                </div>
                <div className='w-[51%] min-h-[90vh] bg-white'>
                    <div className='flex flex-col items-center py-3'>
                        <div className='w-[80%] bg-[#d2e2f1] rounded-xl  flex gap-16 p-3 flex-wrap'>
                            <img src={avatar} className='rounded-full w-[7%]' alt="avatar" />
                            <input onChange={(e) => handlPostInput(e)} className='w-[70%] rounded-full focus:outline-none px-5' type="text" placeholder='Write Post' />
                            <div className='flex justify-between items-center w-[100%] px-3'>
                                <Button className='bg-[#1089f9] w-[17%] flex items-center font-bold text-white' onClick={showModal}>
                                    <AiFillPicture /> Upload
                                </Button>
                                <Modal title="Upload your image" open={isModalOpen} onOk={handleOk} onCancel={handleCance}>
                                    <Upload
                                        // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                    >
                                        {fileList.length >= 8 ? null : uploadButton}
                                    </Upload>
                                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                        <img
                                            alt="example"
                                            style={{
                                                width: '100%',
                                            }}
                                            src={previewImage}
                                        />
                                    </Modal>
                                </Modal>
                                <BsSend onClick={tchitcharito} className='text-[#1089f9] cursor-pointer hover:text-[#35c635] text-4xl' />
                            </div>
                        </div>
                        <div className=' w-[80%] flex flex-col gap-1 mt-2 '>
                            {
                                myData.map((element, index) =>
                                    element.profile.postsProfile.map((p, idx) =>
                                        <div key={idx} className='w-[100%] bg-[#d2e2f1] flex flex-col gap-5 rounded-xl p-3'>
                                            <div className='flex items-center  gap-2'>
                                                <img className='rounded-full ' width={40} height={40} src={element.profile.image} alt="profile" />
                                                <span>{element.userName}</span>
                                            </div>
                                            <div className='w-[100%] flex flex-col justify-center '>
                                                <p>{p.description}</p>
                                                <img width={500} height={500} src={p.image} className={`${p.image ? "" : "hidden"}`} alt="" />
                                            </div>
                                            <div className='flex gap-4 w-[100%] px-3 font-bold'>
                                                <span className='flex gap-2 items-center  cursor-pointer'><AiOutlineLike className='text-2xl ' /> <p className='text-xl'>{p.likes.length}</p> </span>
                                                <span className='flex gap-2 items-center text-xl cursor-pointer'><FaRegCommentAlt /> </span>
                                                <span className='flex gap-2 items-center text-2xl cursor-pointer'><RiShareForwardBoxFill /> </span>
                                            </div>
                                        </div>

                                    ))}
                        </div>
                    </div>
                </div>
                <div className='w-[22%] h-[90vh] p-3 flex flex-col bg-white gap-2'>
                    <h3>Suggestions</h3>
                    <div className='w-[100%] bg-[#f4f7fb] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Ismail Outmaghost</h1>
                        <button className='bg-[#1089f9] px-3 py-2 text-white rounded-full'>follow</button>
                    </div>
                    <div className='w-[100%] bg-[#f4f7fb] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%] h-[3vw]' src={zack} alt="" />
                        <h1>Ismail Outmaghost</h1>
                        <button className='bg-[#1089f9] px-3 py-2 text-white rounded-full'>follow</button>
                    </div>
                    <div className='w-[100%] bg-[#f4f7fb] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Ismail Outmaghost</h1>
                        <button className='bg-[#1089f9] px-3 py-2 text-white rounded-full'>follow</button>
                    </div>
                    <div className='w-[100%] bg-[#f4f7fb] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Ismail Outmaghost</h1>
                        <button className='bg-[#1089f9] px-3 py-2 text-white rounded-full'>follow</button>
                    </div>
                    <div className='w-[100%] bg-[#f4f7fb] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Ismail Outmaghost</h1>
                        <button className='bg-[#1089f9] px-3 py-2 text-white rounded-full'>follow</button>
                    </div>
                    <div className='w-[100%] bg-[#f4f7fb] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Ismail Outmaghost</h1>
                        <button className='bg-[#1089f9] px-3 py-2 text-white rounded-full'>follow</button>
                    </div>

                </div>
            </div>
        </>
    );
}
