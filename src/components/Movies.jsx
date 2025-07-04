import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from "./template/TopNav";
import DropDown from "./template/DropDown";
import axios from "./utils/axios";
import Cards from "./template/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";


const Movies = () => {

    const [category, setcategory] = useState("now_playing");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    
    document.title = "TVDB | Movies " + `| ${category.toUpperCase()}`
  const GetMoviesData = async (
    categoryParam = category,
    pageParam = page
  ) => {
    try {
      const { data } = await axios.get(
        `/movie/${categoryParam}?page=${pageParam}`
      );
      if (data.results.length > 0) {
        setMovies((prevData) => [...prevData, ...data.results]);
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
    setMovies([]);
    sethasMore(true); // reset this too

    // Call with fresh values
    GetMoviesData(category,1);
  };

  useEffect(() => {
    refreshPageHandler();
  },[category]);

  const navigate = useNavigate();


  return  movies.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] pt-[1%] w-full justify-between flex items-center">
        <h1 className="w-[25%] text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-4 ri-arrow-left-line"
          ></i>
          Movies <small className='ml-2 text-sm text-zinc-600'>({category.toUpperCase()})</small>
        </h1>
        <TopNav />
        <DropDown
          title={"Category"}
          options={["popular", "top_rated","upcoming","now_playing"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={GetMoviesData}
        hasMore={hasMore}
        loader={<h1 className="text-white ">Loading...</h1>}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
   
  
}

export default Movies;