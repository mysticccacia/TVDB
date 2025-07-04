import React from "react";
import { Link } from "react-router-dom";

const Headers = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[80vh]  flex flex-col justify-end items-start pl-[4%] pb-[5%]"
    >
      <h1 className="text-5xl w-[70%]  font-black  text-white">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className="text-white text-lg mt-3 w-[70%]">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>

      <div className="uppercase mt-3 flex gap-2  text-white ">
        <span className="text-yellow-500 font-semibold">
          <i className="mr-1  ri-arrow-left-up-box-fill"></i>
          {data.release_date || "No Information"}{" "}
        </span>
        <span className="text-yellow-500 font-semibold ">
          <i className="mr-1  ri-movie-2-line"></i>
          {data.media_type}{" "}
        </span>
      </div>
      <Link
        className="text-zinc-100 mt-2 bg-[#6556CD] text-xl font-semibold  h-10 w-[20%] flex items-center justify-center rounded-xl hover:scale-99 transition-all"
        to={`/${data.media_type}/details/${data.id}/trailer`}
      >
        <i className="mr-2 ri-play-large-fill"></i>Play Trailer
      </Link>
    </div>
  );
};

export default Headers;
