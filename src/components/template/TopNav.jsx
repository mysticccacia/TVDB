import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import noImage from "/NoImage.jpeg"
const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[9vh] relative flex justify-center items-center">
      <i className="text-2xl text-zinc-400 ri-search-line"></i>

      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] p-5 text-xl outline-none border-none bg-transparent text-zinc-200 "
        type="text"
        placeholder="Search Here..."
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-2xl text-zinc-400 ri-close-fill"
        ></i>
      )}
  {/*lower div */}
      <div className="absolute z-[100] w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[26%] overflow-auto rounded ">
        {searches.map((item, key) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={key}
            className="text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300 p-5  w-[100%] flex justify-between items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[15vh] object-cover shadow-lg rounded"
              src={
                item.poster_path || item.profile_path || item.backdrop_path ? `https://image.tmdb.org/t/p/original/${
                item.poster_path || item.backdrop_path || item.profile_path }`: noImage
              }
              alt=""
            />
            <span>
              {item.name ||
                item.original_name ||
                item.title ||
                item.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
