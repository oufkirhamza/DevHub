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





export const Header = () => {
    return (
        <>
            <div className='bg-[#1089F9] flex items-center  p-5 justify-between'>
                <Link className='text-2xl font-bold text-white' to={'/'}>DevHub</Link>
                
                <input className='w-[40%] p-1 px-3 rounded-full border-none outline-none' type="text" />
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
            </div>
        </>
    );
};

