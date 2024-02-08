
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
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";
import webDevLogo from '../../../assets/img/webdev_logo.png'


export const FirstSection = () => {
    const [myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe] = useContext(MyContext)
    // console.log(myData);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
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
    const [fileList, setFileList] = useState([]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const [Pic, setPic] = useState([])
    const handleChange = ({ fileList: newFileList }) => {
        const userPictures = []
        setFileList(newFileList);
        const adaptPictures = [...fileList]
        adaptPictures.forEach(element => {
            // console.log(adaptPictures);
            // console.log("000000000000");
            userPictures.push(element.originFileObj)
            setPic(userPictures)
            // console.log(usePictures);
        });

    }
    const uploadButton = (
        <button style={{ border: 0, background: 'none', }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8, }}>
                Upload
            </div>
        </button>
    );
    const [postInput, setPostInput] = useState('');

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
    const [idLike, setIdLike] = useState(0)
    const submitPost = () => {
        if (postInput || fileList.length != 0) {

            const upPost = { ...poste }
            poste.id = idLike
            poste.description = postInput
            const imageUrls = Pic?.map(image => URL.createObjectURL(image));
            // console.log(imageUrls);
            poste.image = imageUrls
            // console.log(poste);
            // console.log(fileList);
            // console.log(usePictures);
            const newData = [...myData]
            // console.log(newData[0]);
            newData[0].profile.postsProfile.unshift(poste)
            // console.log(myData);
            setPostInput("")
            setFileList([])
            setPic(null)
            setPoste(upPost)
            setIdLike(idLike + 1)
        } else {
            alert("inputs khawin")
        }
    }
    const [like, setLike] = useState(true);
    const likePost = () => {
        const postLikes = myData[0].profile.postsProfile[0].likes;
        if (like) {
            postLikes.push(1);
        } else {
            postLikes.splice(0, 1);
        }
        setLike(!like);
        // console.log(idLike);
    }
    const [isModalOpenCmm, setIsModalOpenCmm] = useState(false);
    const [commnt, setCommnt] = useState('')
    const handleComnt = (e) => {
        setCommnt(e.target.value)
    }

    const showModalCmm = () => {
        setIsModalOpenCmm(true);
    };
    const handleOkCmm = () => {
        const postComment = myData[0].profile.postsProfile[0].comments
        const newComent = { ...comment }
        console.log(newComent);
        newComent.userName = myData[0].userName
        newComent.description = commnt
        setComment(newComent)
        postComment.push(comment)
        setIsModalOpenCmm(false);
        setCommnt('')
        console.log(comment);
        console.log(myData[0]);
    };
    const handleCancelCmm = () => {
        setIsModalOpenCmm(false);
    };
    const modalFooter = [
        <Button key="cancel" onClick={handleCancelCmm}>
            Cancel
        </Button>,
        <Button className='bg-[#6D28D9] ' key="ok" type="primary" onClick={handleOkCmm}>
            Publish
        </Button>,
    ];
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
            <div className='nav bg-[#030712] fixed top-0 w-[100%] z-50  flex items-center py-3 px-5 justify-between  shadow-lg shadow-[#6c28d955]'>
                <Link className='text-xl font-bold text-[#bcbcbc] hover:text-[#F9FAFB]' to={'/home'}><img width={50} src={webDevLogo} alt="logo" /></Link>


                <div className='navbar flex justify-around w-[40%]'>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/home'}><FaHome /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/profile'}><FaUser /> </Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/market'}><MdLocalGroceryStore /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/suggestions'}><FaUserPlus /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/groupes'}><HiUserGroup /></Link>
                    {/* <Link className='text-[#F9FAFB] text-2xl' to={'/'}>Signup</Link>
                    <Link className='text-[#F9FAFB] text-2xl' to={'/login'}>login</Link> */}
                </div>
                <input className='w-[40%] p-1 px-3 rounded-full border-none outline-none font-mono' type="text" placeholder='search freinds' />
                <div className='flex gap-2'>
                    <RiLogoutBoxLine className='text-[#F9FAFB] text-2xl cursor-pointer' />
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/settings'}><IoIosSettings /></Link>
                </div>
            </div>

            <div className='bg-[#030712] w-[100%] min-h-[100vh] pt-[7vh] flex justify-center'>
                <div className='w-[22%] h-[90vh] p-3 flex flex-col gap-11 justify-between items-center bg-[#030712] fixed left-4'>
                    <div class=" group bg-[#030712]  before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#6D28D9] via-[#321463] to-[#12022c] before:absolute before:top-0 w-70 P-3 relative  border border-[#f9fafb4c] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                        <div class="w-28 bg-[#030712] rounded-full border-4 border- z-10  mt-1">
                            <img className='object-cover rounded-full' src={avatar} alt="" />
                        </div>
                        <div class="z-10 bg-[#030712] text-[#F9FAFB] flex flex-col p-3">
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
                    <div class=" group w-70 bg-[#030712] text-[#F9FAFB]  border border-[#f9fafb4c]  p-3 rounded-xl ">
                        <div className='flex justify-between'>
                            <p className='text-center cursor-pointer hover:underline'>Info</p>
                            <p className='text-center cursor-pointer hover:underline'>Customer support</p>
                            <p className='text-center cursor-pointer hover:underline'>Accessibility</p>
                        </div>
                        <p className='text-center cursor-pointer hover:underline'>conditions and confidentiality</p>
                        <p className='text-center cursor-pointer hover:underline'>Download WebDev app</p>
                        <p className='text-center cursor-pointer hover:underline'>More</p>
                        <p className='text-center' >© 2024 WebDev, Inc. All rights reserved.</p>
                    </div>
                </div>
                <div className='w-[51%] min-h-[90vh] bg-[#030712] '>
                    <div className='flex flex-col items-center py-3'>
                        <div className='w-[80%] bg-[#030712]  border border-[#f9fafb4c] rounded-xl  flex gap-16 p-3 flex-wrap'>
                            <img src={avatar} className='rounded-full w-[7%]' alt="avatar" />
                            <input onChange={(e) => handlPostInput(e)} value={postInput} className='w-[70%] rounded-full  outline outline-2 bg-[#F9FAFB] focus:outline-none font-mono outline-[#f9fafb4c]  px-5' type="text" placeholder='Write Post' />
                            <div className='flex justify-between items-center w-[100%] px-3'>
                                <Button className='bg-[#6c28d9c4] border border-[#f9fafb4c] w-[17%] flex items-center font-bold text-[#f9fafbda] ' onClick={showModal}>
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
                                    <Modal open={previewOpen} title={previewTitle} onCancel={handleCancel} footer={modalFooter}>
                                        <img
                                            alt="example"
                                            style={{
                                                width: '100%',
                                            }}
                                            src={previewImage}
                                        />
                                    </Modal>
                                </Modal>
                                <BsSend onClick={submitPost} className='text-[#6D28D9] cursor-pointer hover:text-[#f9fafb4c] text-4xl' />
                            </div>
                        </div>
                        <div className=' w-[80%] flex flex-col gap-1 mt-2 '>
                            {
                                myData?.map((element, index) =>
                                    element.profile?.postsProfile?.map((p) =>
                                        <div key={poste.id} className='w-[100%] bg-[#030712] border border-[#f9fafb4c] text-[#F9FAFB] font-mono flex flex-col gap-5 rounded-xl p-3'>
                                            <div className='flex items-center gap-2'>
                                                <img className='rounded-full border border-3 border-[#6c28d993]' width={40} height={40} src={element.profile.image} alt="profile" />
                                                <span>{element.userName}</span>
                                            </div>
                                            <div className='w-[100%] flex flex-col  justify-center '>
                                                <p className='w-[100%]' >{p.description}</p>
                                                {(p.image && p.image.length > 1) ?
                                                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                                                        <Carousel>
                                                            {
                                                                p.image?.map((e, i) =>
                                                                    <img width={800} className='object-contain' key={i} src={e} alt="..." />
                                                                )
                                                            }
                                                        </Carousel>
                                                    </div>
                                                    : <img width={800} height={800} src={p.image[0]} className={`${p.image?.length > 0 ? "" : "hidden"} object-cover`} alt="" />
                                                }
                                            </div>
                                            <div className='flex gap-4 w-[100%] px-3 font-bold'>
                                                <span className='flex gap-2 items-center  cursor-pointer'><AiOutlineLike onClick={likePost} className='text-2xl ' /> <p className='text-xl'>{p.likes.length}</p> </span>
                                                <span className='flex gap-2 items-center text-xl cursor-pointer'><FaRegCommentAlt onClick={showModalCmm} /> </span>
                                                <span className='flex gap-2 items-center text-2xl cursor-pointer'><RiShareForwardBoxFill /> </span>
                                                <Modal title="Basic Modal" open={isModalOpenCmm} onOk={handleOkCmm} onCancel={handleCancelCmm} footer={modalFooter}>
                                                    <input onChange={(e) => handleComnt(e)} value={commnt} className='w-[100%] rounded-xl' type="text" placeholder='comment' />
                                                </Modal>
                                            </div>
                                            {p.comments?.map((cmnt) =>
                                                <div className='flex gap-3 border border-[#6c28d993] p-1 '>
                                                    <h5>{cmnt.userName}</h5>
                                                    <p>{cmnt.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                        </div>
                    </div>
                </div>
                <div className='w-[22%] h-[90vh] p-3 flex flex-col bg-[#030712] text-[#F9FAFB] gap-2 fixed right-5'>
                    <h3>Suggestions</h3>
                    <div className='w-[100%] bg-[#030712] border border-[#f9fafb4c] text-[#F9FAFB] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Lorenzo Martinez</h1>
                        <button className='bg-[#6D28D9]  px-3 py-2 text-[#F9FAFB] rounded-full'>follow</button>
                    </div>
                    <div className='w-[100%] bg-[#030712] border border-[#f9fafb4c] text-[#F9FAFB] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Lorenzo Martinez</h1>
                        <button className='bg-[#6D28D9]  px-3 py-2 text-[#F9FAFB] rounded-full'>follow</button>
                    </div>
                    <div className='w-[100%] bg-[#030712] border border-[#f9fafb4c] text-[#F9FAFB] flex justify-between items-center p-2 rounded'>
                        <img className='rounded-full w-[14%]' src={avatar} alt="" />
                        <h1>Lorenzo Martinez</h1>
                        <button className='bg-[#6D28D9]  px-3 py-2 text-[#F9FAFB] rounded-full'>follow</button>
                    </div>
                </div>
            </div >
        </>
    );
}
