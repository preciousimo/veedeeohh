import React, { useContext} from 'react';
import { Link, } from "react-router-dom";
import { FiMenu, FiSearch } from 'react-icons/fi';
import { GrAppsRounded } from 'react-icons/gr';
import { IoIosSettings } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import logo from "../assets/logo.png"
import AuthContext from '../context/AuthContext';

export default function Navbar() {
    let {user, logoutUser} = useContext(AuthContext);

    return (
        <div className='flex items-center justify-between px-5 lg:px-10 py-3'>
            
            {/* Left Side */}
            <div className='flex items-center shrink-0'>
                <FiMenu className='w-6 h-6'/>
                <div className='pl-4'>
                    <img src={logo} alt="logo" className='w-32'/>
                </div>
            </div>

            {/* <p>Hello {user.name}</p> */}

            {/* Middle */}
            <div className='hidden relative sm:flex w-full max-w-[40rem] mx-10 items-center'>
                <input type="search" placeholder="Search..."
                className="outline-0 bg-[#dae0e6] rounded-full pl-10 py-2 w-full"/>
                <div className='absolute left-4'>
                    <FiSearch />
                </div>
            </div>
            
            {/* Right Side */}
            <div className='flex h-full items-center gap-3'>
                <FiSearch className='sm:hidden h-6 w-6'/>
                <GrAppsRounded className='sm:hidden h-6 w-6'/>
                <IoIosSettings className='h-6 w-6'/>
                {user ? 
                    <Link to={'/'}>
                    <button className='flex items-center bg-[#a359a0] p-1 rounded-full text-white'>
                        <FaUser className='h-5 w-5 ml-1.5 mr-1'/>
                        <p className='font-bold mr-1.5 whitespace-nowrap' onClick={logoutUser}>Log out</p>
                    </button >
                    </Link> :  
                    <Link to={'/login'}>
                    <button className='flex items-center bg-[#a359a0] p-1 rounded-full text-white'>
                        <FaUser className='h-5 w-5 ml-1.5 mr-1'/>
                        <p className='font-bold mr-1.5 whitespace-nowrap'>Log in</p>
                    </button >
                    </Link>
                }
            </div>
        </div>
    )
}
