import React, { useEffect, useState } from "react"; 
import axios from "axios";

export default function Content() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    let getData = async () => {
        let response = await axios.get(
            `https://veedeeohh-api.up.railway.app/api/contents/`
        );
        console.log("Response:", response);
        setContents(response.data);
    };

    return (
        <div className='px-5 lg:px-6 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {contents.map((content) => (
                <div className="mx-12 sm:mx-0">
                    <div className="flex h-48 justify-center shadow-gray-300 rounded-[0.7rem] md:h-32 lg:h-48 xxl:h-60 overflow-hidden"> {/* include "overflow-hidden" to classname*/}
                        <video src={content.video} alt="Thumbmail" width="250" height="250"
                        className="object-cover   rounded-[0.7rem] md:h-32 lg:h-full hover:scale-110 duration-200 ease-out" controls>
                        </video>
                    </div>
                    <div className="flex items-center pt-2">
                        <div className="w-10 h-10 shrink-0">
                            <img src={content.profile.img} alt="Alernative" className="rounded-full w-96 h-10" />
                        </div>

                        <div className="overflow-hidden flex flex-wrap items-center">
                            <p className="font-semibold text-[14px] pl-2 flex items-center">{content.title}</p>
                        </div>
                    </div>

                    <div className="pl-12">
                        <p className="text-[12px] text-gray-600 pt-[2px]">{content.profile.name}</p>
                        <p className="text-[12px] text-gray-600 pt-[1px] pr-1">{content.view} views &#x2022; 2 days ago</p>
                    </div>
                </div>
            ))}
        </div>

    );
};