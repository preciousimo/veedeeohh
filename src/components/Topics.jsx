import React, {useState, useEffect} from 'react'
import TopicBtn from './TopicBtn'
import axios from "axios";

export default function Topics() {
    // const topics = ["All", "Trending", "Gospel", "Education", "Sports", "Programming", "Comedy", "Fashion", "Cartoons"];

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    let getData = async () => {
        let response = await axios.get(
            `http://127.0.0.1:8000/api/topics/`
        );
        console.log("Response:", response);
        setTopics(response.data);
    };

    return (
        <div className='flex flex-wrap items-center gap-4 px-5 lg:px-6 pt-2'>
            {topics.map((topic) => (
                <TopicBtn topic={topic.name} />
            ))}
        </div>
    );
};
