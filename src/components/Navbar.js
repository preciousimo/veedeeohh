import React from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from "../assets/logo.png"


export default function Navbar() {
    return (
        <div>
            {/* Left Side */}
            <div className='flex items-center shrink-0 px-5 pt-4'>
                <FiMenu className='w-8 h-8' />
                <div className='pl-4'>
                    <img src={logo} alt="logo" className='w-36' />
                </div>
            </div>
            {/* Middle */}
            {/* Right Side */}
        </div>
    )
}
