import React from 'react'

export default function TopicBtn({ topic }) {
    return (
        <div className='bg-gray-100 rounded-full'>
            <p className='py-1 px-3'>{topic}</p>
        </div>
    );
};