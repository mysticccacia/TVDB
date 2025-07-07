import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import NoTrailer from "./NoTrailer";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);

   useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Re-enable scroll when unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!ytvideo?.key) {
    return (
      <NoTrailer/>
    );
  }


  return (
    <div className="fixed  z-100 top-0 left-0 bg-gray-900 w-screen h-screen flex items-center justify-center">
      <i
        onClick={() => navigate(-1)}
        className="hover:text-[#6556cd] text-2xl mb-[10%] text-white absolute top-[5%] left-[5%] font-extrabold  mr-4  ri-close-line"
      ></i>
      <ReactPlayer
        controls
        height={600}
        width={90 + "%"}
        src={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
    </div>
  );
};

export default Trailer;
