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
    const handleModalClose = () => {
        setOpenModal(false);
        setOpenModalo(false);
    };
    const handleConnect = (element, action) => {
        // Find the index of the user in the connected array
        const userIndex = connected.findIndex((user) => user.userName === element.userName);

        // If the action is 'follow', add the user to the following list
        // If the action is 'unfollow', remove the user from the following list
        if (action === 'follow') {
            // Check if the user is not already in the following list to avoid duplicates
            if (!connected[0].profile.following.some((user) => user.userName === element.userName)) {
                setConnected(prevState => {
                    const updatedConnected = [...prevState];
                    updatedConnected[0].profile.following.push(element);
                    return updatedConnected;
                });
            }
        } else if (action === 'unfollow') {
            // Remove the user from the following list
            setConnected(prevState => {
                const updatedConnected = [...prevState];
                updatedConnected[0].profile.following = updatedConnected[0].profile.following.filter((user) => user.userName !== element.userName);
                return updatedConnected;
            });
        }
    };
    const handleDeleteFollower = (follower) => {
        // Logic to delete the follower
        setConnected(prevState => {
            const updatedConnected = [...prevState];
            updatedConnected[0].profile.followers = updatedConnected[0].profile.followers.filter((f) => f.userName !== follower.userName);
            return updatedConnected;
        });
    };
    // console.log(connected[0].email);

    return (
        <>
            <div className='w-[100%] lg:flex  justify-around items-center bg-[#F4F7FB] profil-container'>
                <div className=' w-[75%] bg-[#697BA0]  flex flex-col justify-around gap-5 rounded-lg right-side m-5'>
                    <div className='user-img relative bg-red-600 rounded-lg'>
                        <div className='bg-purple-500 w-[100%] rounded-lg coverture'>
                            <img src={cover} className='w-[100%] rounded-lg' alt="" />
                        </div>
                        <img src={profil} className=' w-[10%] rounded-full absolute m-auto lg:top-96 left-0 right-0 prof' alt="" />
                    </div>
                    <div className='Full-name w-[100%] pt-16 '>
                        <h1 className=' text-2xl text-center '><b>{connected[0].userName}</b></h1>
                    </div>
                    <div className='Stats p-4 flex justify-center items-center  '>
                        <ul className=' lg:flex justify-between items-center list-none w-[40%]    '>
                            <li className='  text-2xl flex flex-col text-center'><b>Posts</b> <p>{connected[0].profile.postsProfile.length}</p></li>
                            <li className='  text-2xl flex flex-col text-center lg:ml-9'><b>Followores</b> <p>{connected[0].profile.followers.length}</p> </li>
                            <li className='  text-2xl flex flex-col text-center'><b>Following</b> <p>{connected[0].profile.following.length}</p> </li>
                        </ul>
                    </div>
                    <div className='Bio w-[100%] text-center flex flex-col justify-center items-center'>
                        <h2 className='text-2xl pb-4'><b>Bio</b></h2>
                        <p className='lg:w-[30%]'>{connected[0].profile.bio}</p>
                    </div>
                </div>




                {/* right side */}




                <div className='flex flex-col gap-4 justify-center '>
                    <Card className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Manage your account
                        </h5>
                        <Button className='bg-[#35C635]' onClick={() => setOpenModal(true)}>Followers</Button>
                        <Modal show={openModal} onClose={handleModalClose}>
                            <Modal.Header>Followers</Modal.Header>
                            <Modal.Body>
                                <div className='h-auto overflow-auto'>
                                    {connected[0].profile.followers.map((follower) => (
                                        <div key={follower.userName} className='flex justify-between '>
                                            <div className='flex justify-center gap-3 items-center '>
                                                <img src={follower.profile.image} height={40} width={40} className='rounded-full  w-[50px] h-[50px] object-cover' alt="" />
                                                <h3 className='text-2xl'><b>{follower.userName}</b></h3>
                                            </div>
                                            <div>
                                                <Button
                                                    onClick={() => handleDeleteFollower(follower)}
                                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button color="gray" onClick={handleModalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        <Button className='bg-[#35C635]' onClick={() => setOpenModalo(true)}>Following</Button>
                        <Modal show={openModalo} onClose={handleModalClose}>
                            <Modal.Header>Following</Modal.Header>
                            <Modal.Body>
                                <div className='h-auto overflow-auto'>
                                    {connected[0].profile.following.map((following) => (
                                        <div key={following.userName} className='flex justify-between '>
                                            <div className='flex justify-center gap-3 items-center '>
                                                <img src={following.profile.image} height={40} width={40} className='rounded-full  w-[50px] h-[50px] object-cover' alt="" />
                                                <h3 className='text-2xl'><b>{following.userName}</b></h3>
                                            </div>
                                            <div>
                                                <Button
                                                    onClick={(event) => {
                                                        const action = event.target.innerText === 'Unfollow' ? 'unfollow' : 'follow';
                                                        event.target.innerText = action === 'unfollow' ? 'Follow' : 'Unfollow';
                                                        handleConnect(following, action);
                                                    }}
                                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    {following.following ? 'Follow' : 'Unfollow'}
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button color="gray" onClick={handleModalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                    <Card className='max-w-sm'>
                        {/* Card Content */}
                    </Card>
                    <div className="group w-70 bg-slate-50 shadow-lg text-center p-3 rounded-xl">
                        <p className='text-center'>© 2024 WebDev, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};