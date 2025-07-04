import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./template/TopNav";
import DropDown from "./template/DropDown";
import axios from "./utils/axios";
import Cards from "./template/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {

    
    const [category, setcategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    
    document.title = "TVDB | Trending " + `| ${category.toUpperCase()}`
  const GetTrendingData = async (
    categoryParam = category,
    durationParam = duration,
    pageParam = page
  ) => {
    try {
      const { data } = await axios.get(
        `/trending/${categoryParam}/${durationParam}?page=${pageParam}`
      );
      if (data.results.length > 0) {
        setTrending((prevData) => [...prevData, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  
  const refreshPageHandler = () => {
    setPage(1);
    setTrending([]);
    sethasMore(true); // reset this too

    // Call with fresh values
    GetTrendingData(category, duration, 1);
  };

  useEffect(() => {
    refreshPageHandler();
  }, [category, duration]);

  const navigate = useNavigate();

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] pt-[1%] w-full justify-between flex items-center">
        <h1 className="w-[25%] text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-4 ri-arrow-left-line"
          ></i>
          Trending <small className='ml-2 text-sm text-zinc-600'>({category.toUpperCase()})</small>
        </h1>
        <TopNav />
        <DropDown
          title={"Category"}
          options={["movie", "tv", "all"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <DropDown
          title={"Duration"}
          options={["week", "day"]}
          func={(e) => setDuration(e.target.value.toLowerCase())}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrendingData}
        hasMore={hasMore}
        loader={<h1 className="text-white ">Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
