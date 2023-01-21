import React from 'react'
import TopicBtn from './TopicBtn'

export default function Topics() {
    const topics = ["All", "Trending", "Gospel", "Education", "Sports", "Programming", "Comedy", "Fashion", "Cartoons"]
    return (
        <div className='flex flex-wrap items-center gap-4 px-5 lg:px-6 pt-2'>
            {topics.map((topic) => (
                <TopicBtn topic={topic} />
            ))}
        </div>
    );
};
