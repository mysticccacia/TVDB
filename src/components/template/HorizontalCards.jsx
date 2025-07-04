import React from "react";
import { Link } from "react-router-dom";
import NoImage from "/NoImage.jpeg"

const HorizontalCards = ({ data }) => {
  return (
    
     
      <div className="w-[100%] gap-5 overflow-y-hidden flex">
        {data.length > 0 ? data.map((item, idx) => (
          <Link to={`/${item.media_type}/details/${item.id}`} key={idx} className="min-w-[15%] p-2 bg-zinc-800 mb-2 rounded ">
            <img
             className="w-full p-1.5 "
              src={`https://image.tmdb.org/t/p/original/${
                item.poster_path || item.backdrop_path 
              })`}
              alt=""
            />

           <div className=" text-white overflow-hidden px-2">
             <h1 className="text-xl text-nowrap mb-2 mt-2 font-semibold ">
              {item.title ||
                item.original_title ||
                item.name ||
                item.original_name}
            </h1>
            {/* <p className="w-[100%] text-zinc-200 text-[0.95vw]">
              {item.overview.slice(0, 50)}...
              <span className="text-zinc-400">more</span>
            </p> */}
           </div>
          </Link>
        )) : <h1 className="text-center font-black mt-5 text-white text-3xl">Nothing to show</h1>}
      </div>

  );
};

export default HorizontalCards;
