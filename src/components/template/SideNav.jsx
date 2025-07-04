import React from 'react'
import { Link } from 'react-router-dom'


const SideNav = () => {

 
  return (
    <div className='w-[20%]  fixed left-0 top-0 h-screen z-10 border-zinc-400 px-10 py-5'>
        <h1 className='text-[1.5vw] text-white font-bold'>
            <i className="text-[#6556CD] ri-tv-fill pr-2"></i>
            <span className='text-[1.5vw]'>TVDB</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 gap-2 text-[1.1vw]'>
            <h1 className='text-white font-semibold text-[1.2vw] mt-8 mb-5'>New Feeds</h1>
            <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4"><i className="ri-fire-fill"></i> Trending</Link>
            <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4" ><i className="ri-bard-fill"></i> Popular</Link>
            <Link to="/movies"  className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4" ><i className="ri-movie-2-fill"></i> Movies</Link>
            <Link to="/TV" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4"><i className="ri-tv-2-fill"></i> TV Shows</Link>
            <Link to="/people"  className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4"><i className="ri-user-3-fill"></i> People</Link>
        </nav>
        <hr className='border-none mt-2 h-[1px] bg-zinc-400' />
         <nav className='flex flex-col text-zinc-400 gap-2 text-[1.1vw]'>
            <h1 className='text-white font-semibold text-[1.2vw] mt-8 mb-5'>Website Information</h1>
            <Link to="/about" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4"><i className="ri-file-info-fill"></i> About TVDB</Link>
            <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4" ><i className="ri-contacts-fill"></i> Contact</Link>
        </nav>
    </div>
  )
}

export default SideNav