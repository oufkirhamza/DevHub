'use client';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import './firstSection.sass'
import cover from '../../../assets/img/cover2.png'
import { Sidebar } from 'flowbite-react';
import profil from '../../../assets/img/avatar-profile.jpg'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import zack from '../../../assets/img/zackuser.jpg'
import { Card } from 'flowbite-react';
import { useContext } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import 'flowbite';




export const FirstSection = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalo, setOpenModalo] = useState(false);
    const [myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe, connected, setConnected] = useContext(MyContext)
    // const [user, setUser] = useContext(MyContext)
    // const [product, setProduct] = useContext(MyContext)
    // const [poste, setPoste] = useContext(MyContext)
    // const [comment, setComment] = useContext(MyContext)
    // const [groupe, setGroupe] = useContext(MyContext)
    // const [connected, setConnected] = useContext(MyContext)
    const [screenArray, setScreenArray] = useState(connected);
    console.log(connected[0].email);





    return (
        <>

            {/* Profile big div */}
            <div className='w-[100%] lg:flex  justify-around items-center bg-[#F4F7FB] profil-container'>
                {/* left side of the profile */}
                <div className=' w-[75%] bg-[#697BA0]  flex flex-col justify-around gap-5 rounded-lg right-side m-5'>
                    {/* cover and profile picture */}
                    <div className='user-img relative bg-red-600 rounded-lg'>
                        {/* cover */}
                        <div className='bg-purple-500 w-[100%] rounded-lg coverture'>
                            <img src={cover} className='w-[100%] rounded-lg' alt="" />
                        </div>
                        {/* <img src={cover}  className='w-[100%] h-[30vh] object-cover' alt="" /> */}
                        {/* Profil */}
                        <img src={profil} className=' w-[10%] rounded-full absolute m-auto lg:top-96 left-0 right-0 prof' alt="" />
                    </div>
                    {/* Full name */}
                    <div className='Full-name w-[100%] pt-16 '>
                        <h1 className=' text-2xl text-center '><b>{connected[0].userName}</b></h1>
                    </div>
                    {/* Stats of following followers and posts */}
                    <div className='Stats p-4 flex justify-center items-center  '>
                        <ul className=' lg:flex justify-between items-center list-none w-[40%]    '>
                            <li className='  text-2xl flex flex-col text-center'><b>Posts</b> <p>15</p></li>
                            <li className='  text-2xl flex flex-col text-center lg:ml-9'><b>Followores</b> <p>210</p> </li>
                            <li className='  text-2xl flex flex-col text-center'><b>Following</b> <p>215</p> </li>
                        </ul>
                    </div>
                    <div className='Bio w-[100%] text-center flex flex-col justify-center items-center'>
                        <h2 className='text-2xl pb-4'><b>Bio</b></h2>
                        <p className='lg:w-[30%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsum recusandae quidem aliquid,
                            nihil non temporibus distinctio totam tempora hic nisi commodi quia sapiente, nam quis adipisci odio quod quaerat?</p>
                    </div>
                </div>
                {/* rightside */}










                <div className='flex flex-col gap-4 justify-center '>
                    <Card className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Manage your account
                        </h5>
                        <Button className='bg-[#35C635]' >Setting</Button>

                        <Button className='bg-[#35C635]' onClick={() => setOpenModal(true)}>Followers</Button>
                        <Modal show={openModal} onClose={() => setOpenModal(false)}>
                            <Modal.Header>Followers</Modal.Header>
                            <Modal.Body>
                                <div className='h-auto overflow-auto'>
                                    <div className='flex justify-between '>
                                        <div className='flex justify-center gap-3 items-center '>
                                            <img src={profil} height={40} width={40} className='rounded-full  w-[50px] h-[50px] object-cover' alt="" />
                                            <h3 className='text-2xl'><b>Full Name</b></h3>
                                        </div>
                                        <div>
                                            <button onClick={(e) => e.target.innerText = (e.target.innerText === 'Follow') ? 'Unfollow' : 'Follow'}>Follow</button>
                                        </div>
                                    </div>

                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button color="gray" onClick={() => setOpenModal(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Button className='bg-[#35C635]' onClick={() => setOpenModalo(true)}>Following</Button>
                        <Modal show={openModalo} onClose={() => setOpenModalo(false)}>
                            <Modal.Header>Following</Modal.Header>
                            <Modal.Body>

                            <div className='h-auto overflow-auto'>
                                    <div className='flex justify-between '>
                                        <div className='flex justify-center gap-3 items-center '>
                                            <img src={profil} height={40} width={40} className='rounded-full  w-[50px] h-[50px] object-cover' alt="" />
                                            <h3 className='text-2xl'><b>Full Name</b></h3>
                                        </div>
                                        <div>
                                            <button onClick={(e) => e.target.innerText = (e.target.innerText === 'Follow') ? 'Unfollow' : 'Follow'}>Follow</button>
                                        </div>
                                    </div>

                                </div>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button color="gray" onClick={() => setOpenModalo(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </Card>
                    <Card className='max-w-sm'>
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">49</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="my-7 space-y-5">
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path className='bg-[#35C635]'
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                    20GB Cloud storage
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                            </li>

                        </ul>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-lg bg-[#35C635] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Choose plan
                        </button>
                    </Card>
                    <div class=" group w-70 bg-slate-50 shadow-lg text-center p-3 rounded-xl ">
                        <p className='text-center' >© 2024 WebDev, Inc. All rights reserved.</p>
                    </div>
                </div>


            </div >

        </>
    )
}
