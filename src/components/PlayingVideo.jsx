import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData} from "../utils/rapidapi.js";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo.jsx";
import { BsFillCheckCircleFill} from "react-icons/bs";



function PlayingVideo() {
    const [video, setVideo] = useState();
    const [realatedVideo, setRelatedVideo] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetchVideoDetails();
        fetchRelatedVideo();
    }, [id]);

    const fetchVideoDetails = async () => {
        fetchData(`video/details/?id=${id}`).then((res) => {
            console.log(res);
            setVideo(res);
        });
    };

    const fetchRelatedVideo = async () => {
        fetch(`video/related-contents/?id=${id}`).then((res) => {
            console.log(res);
            setRelatedVideo(res);
        })
    }

    return (
        <div className=" flex justify-center flex-row h-[calc(100%-56px)] mt-16">
            <div className="w-full max-w-[1580px] flex flex-col lg:flex-row" >
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
                    <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            height="100%"
                            width="100%"
                            controls
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
                    </div>
                    <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
                        {video?.title}
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-4">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={video?.author?.avatar[0]?.url}
                                        alt={""}
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-5">
                                <div className="flex flex-col ml-3">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayingVideo;