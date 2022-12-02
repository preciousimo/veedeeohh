import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Content() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    let getData = async () => {
        let response = await axios.get(
            `http://127.0.0.1:8000/contents`
        );
        console.log("Response:", response);
        setContents(response.data);
    };

    return (
        <div className='px-5 lg:px-10 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {contents.map((content) => (
                <div>
                    <div className="flex w-full h-40 justify-center">
                        <img src={content.photo} alt="" className="object-cover w-80 h-40 rounded-[0.7rem]" />
                    </div>
                </div>
            ))}
        </div>
        
    );
};