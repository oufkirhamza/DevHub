import React from 'react';
import "./section.sass"
import tsswira from '../../../assets/img/avatar-profile.jpg'
import { MyContext } from '../../../utils/contextProvider';
import { useContext, useState } from 'react';
// import React, { useContext, useState } from 'react';


export const Section = () => {
    const [myData, setMyData] = useContext(MyContext);
    const [screenArray, setScreenArray] = useState(myData);
    const [connected, setConnected] = useContext(MyContext)


    const filterElement = (event) => {
        let newTab = myData.filter(element => element.userName.toLowerCase().includes(event.target.value.toLowerCase()));
        setScreenArray(newTab);
    }


    // const [buttonText, setButtonText] = useState('Connect');
    // const handleButtonClick = () => {
    //     setButtonText((prevText) => (prevText === 'Connect' ? 'Unfollow' : 'Connect'));
    // };

    // Filter suggestions to exclude your profile and profiles of your following
    const getFilteredSuggestions = () => {
        const filteredSuggestions = myData.filter(
            suggestion =>
                suggestion.userName !== connected.userName && // Exclude your profile
                !connected.profile.following.includes(suggestion.userName) // Exclude profiles of your following
        );
    }

        //     return filteredSuggestions;
        // };
        return (
            <>

                <div className='sggestion-container w-[100%] flex  justify-around  bg-[#ffffff] gap-5'>
                    <div className='left-bar w-[20%] h-[100vh] bg-[#F4F7FB] lg:px-10 '>
                        <div class=" group  before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-[#1089f9] to-[#35c635] before:absolute before:top-0 w-70 P-3 relative bg-slate-50 shadow-lg flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div class="w-28 bg-blue-700 rounded-full border-4 border-slate-50 z-10  mt-1">
                                <img className='object-cover rounded-full' src={tsswira} alt="" />
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
                        <div class="my-5 group w-70 bg-slate-50 shadow-lg text-center p-3 rounded-xl ">
                            <p className='text-center' >© 2024 WebDev, Inc. All rights reserved.</p>
                        </div>
                    </div>
                    <div className='suggestion w-[75%] bg-[#697BA0] p-5 '>





                        <form>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input onChange={(e) => filterElement(e)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                        <div className='flex flex-wrap gap-5 p-5'>



                            {/* card of suggestion */}
                            {
                                screenArray.map((element, index) =>
                                    <>
                                        <div key={element.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <div className="flex justify-end px-4 pt-4">
                                                <button data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                                    <span className="sr-only">Open dropdown</span>
                                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                    </svg>
                                                </button>
                                                {/* <!-- Dropdown menu --> */}
                                                <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                    <ul className="py-2" aria-labelledby="dropdownButton">
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center pb-10">
                                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={tsswira} alt="Bonnie image" />
                                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{element.userName}</h5>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                                <div className="flex mt-4 md:mt-6">
                                                    <a onClick={(e) => e.target.innerText = (e.target.innerText === 'Connect') ? 'Unfollow' : 'Connect'} href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        Connect
                                                    </a>                                            </div>
                                            </div>
                                        </div>

                                    </>)
                            }
                            {/* card of suggestion */}



                        </div>






                    </div>
                </div>
            </>
        );
    };
