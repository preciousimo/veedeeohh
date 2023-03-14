import React from 'react'

export default function TopicBtn({ topic }) {
    
    return (
        <div className='bg-gray-100 hover:bg-gray-400 hover:text-white rounded-full'>
            <p className='py-1 px-3'>{topic}</p>
        </div>
    );
};