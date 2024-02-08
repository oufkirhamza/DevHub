import React from 'react';
import "./header.sass"
import logo from '../assets/img/pngegg (2).png'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";
import webDevLogo from '../assets/img/webdev_logo.png'





export const Header = () => {
    return (
        <>
            <div className='nav bg-[#030712] fixed top-0 w-[100%] z-50  flex items-center py-3 px-5 justify-between shadow shadow-lg shadow-[#6c28d955]'>
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
            </div>
        </>
    );
};

