import React, { useEffect, useState } from 'react'
import SideNav from './template/SideNav'
import TopNav from './template/TopNav'
import axios from "./utils/axios";
import Headers from './template/Headers';
import HorizontalCards from './template/HorizontalCards';
import DropDown from './template/DropDown';
import Loader from './Loader';


const Home = () => {
    document.title = "Homepage"

    const [wallpaper, setwallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all")

    const GetHeaderWallpaper =  async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData = data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(randomData)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const GetTrendingData =  async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      
      setTrending(data.results)
    } catch (error) {
      console.log("Error:", error);
    }
  };


  useEffect(() => {
    GetTrendingData();
    !wallpaper &&  GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
    <SideNav/>
    <div className='ml-[20%] w-[80%] min-h-screen overflow-y-auto'>
        <TopNav/>
        <Headers data={wallpaper}/>
        <div className="flex items-center p-3 justify-between">
          <h1 className="text-[1.4vw] font-semibold text-zinc-400">Trending</h1>
          <DropDown title="Filter" options={["tv","movie","all"]} func = {(e)=>setCategory(e.target.value)} />
        </div>
        <HorizontalCards data ={trending}/>
    </div>
    </>
  ) : <Loader/>
}

export default Home