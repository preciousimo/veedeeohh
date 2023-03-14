import React from 'react'

export default function SideBtn({ name, icon }) {
  return (
    <div className='flex flex-col lg:flex-row items-center hover:bg-gray-200 w-full py-1 rounded-[0.5rem] 
    duration-200 ease-out lg:gap-4 md:py-3 md:px-3'>
        <div className='text-[20px] lg:text-[28px]'>{icon}</div>
        <p className='text-[10px] lg:text-[17px]'>{name}</p>
    </div>
  )
}