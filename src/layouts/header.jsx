import React from 'react';
import "./header.sass"
import logo from '../assets/img/pngegg (2).png'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div className='bg-purple-400 flex items-center p-2 justify-between'>
                <img width={50} src={logo} alt="logo" />
                <input className='w-[40%] p-1 px-3 rounded-full' type="text" />
                <div className='navbar flex justify-around w-[40%]'>
                    <Link className='bg-white p-2 rounded-full' to={'/home'}>Home</Link>
                    <Link className='bg-white p-2 rounded-full' to={'/profile'}>Profile</Link>
                    <Link className='bg-white p-2 rounded-full' to={'/market'}>Market</Link>
                    <Link className='bg-white p-2 rounded-full' to={'/suggestions'}>Suggestions</Link>
                    <Link className='bg-white p-2 rounded-full' to={'/settings'}>settings</Link>
                    <Link className='bg-white p-2 rounded-full' to={'/groupes'}>Groupes</Link>
                    <Link className='bg-white p-2 rounded-full' to={'/'}>Signup</Link>
                    <Link className='bg-white p-2 rounded-full' to={'/login'}>login</Link>
                </div>
            </div>
        </>
    );
};

