import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from "./template/TopNav";
import DropDown from "./template/DropDown";
import axios from "./utils/axios";
import Cards from "./template/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";


const Popular = () => {

    
    const [category, setcategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    
    document.title = "TVDB | Popular " + `| ${category.toUpperCase()}`
  const GetPopularData = async (
    categoryParam = category,
    pageParam = page
  ) => {
    try {
      const { data } = await axios.get(
        `${categoryParam}/popular?page=${pageParam}`
      );
      if (data.results.length > 0) {
        setPopular((prevData) => [...prevData, ...data.results]);
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
    setPopular([]);
    sethasMore(true); // reset this too

    // Call with fresh values
    GetPopularData(category,1);
  };

  useEffect(() => {
    refreshPageHandler();
  }, [category]);

  const navigate = useNavigate();


  return  popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] pt-[1%] w-full justify-between flex items-center">
        <h1 className="w-[25%] text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-4 ri-arrow-left-line"
          ></i>
          Popular <small className='ml-2 text-sm text-zinc-600'>({category.toUpperCase()})</small>
        </h1>
        <TopNav />
        <DropDown
          title={"Category"}
          options={["movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopularData}
        hasMore={hasMore}
        loader={<h1 className="text-white ">Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
   
  
}

export default Popular