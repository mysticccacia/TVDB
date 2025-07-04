import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from "./template/TopNav";
import DropDown from "./template/DropDown";
import axios from "./utils/axios";
import Cards from "./template/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";


const People = () => {

    const category = "popular";
    const [People, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    
    document.title = "TVDB | People " + `| ${category.toUpperCase()}`
  const GetPeopleData = async (
    categoryParam = category,
    pageParam = page
  ) => {
    try {
      const { data } = await axios.get(
        `/person/${categoryParam}?page=${pageParam}`
      );
      if (data.results.length > 0) {
        setPeople((prevData) => [...prevData, ...data.results]);
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
    setPeople([]);
    sethasMore(true); // reset this too

    // Call with fresh values
    GetPeopleData(category,1);
  };

  useEffect(() => {
    refreshPageHandler();
  },[]);

  const navigate = useNavigate();


  return  People.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] pt-[1%] w-full justify-between flex items-center">
        <h1 className="w-[25%] text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-4 ri-arrow-left-line"
          ></i>
          People 
        </h1>
        <TopNav />
      
        
      </div>

      <InfiniteScroll
        dataLength={People.length}
        next={GetPeopleData}
        hasMore={hasMore}
        loader={<h1 className="text-white ">Loading...</h1>}
      >
        <Cards data={People} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
   
  
}

export default People;