import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './template/TopNav';

const About = () => {

    const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f0f0f] via-[#111] to-[#0f0f0f] text-white px-8 ">
        <div className='h-[8%] w-full px-[5%] flex items-center justify-between'>
             <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] text-xl font-extrabold  mr-4 ri-arrow-left-line"
          ></i>
          <TopNav/>
        </div>
      <div className="max-w-5xl mt-5 mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10 text-[#6556cd]">
          Welcome to TVDB 🎬
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
          <span className="text-[#6556cd] font-semibold">TVDB</span> is your ultimate destination for discovering and exploring movies, TV series, and everything in between. Whether you're looking for the latest blockbusters or classic shows, TVDB gives you a powerful search tool to find <span className="text-white font-medium">any movie or TV show</span> in seconds.
        </p>

        <div className="my-10 grid gap-6 md:grid-cols-2">
          <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#6556cd] mb-2">🔍 Smart Search</h2>
            <p className="text-zinc-400">Search by title, actor, director, or even famous personalities involved in your favorite movies or series. Our smart search engine brings you results instantly.</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#6556cd] mb-2">🔥 Trending & Popular Filters</h2>
            <p className="text-zinc-400">Filter content by trending, most popular, or top-rated to always stay up-to-date with what’s hot in the entertainment world.</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#6556cd] mb-2">🎞️ Watch Trailers</h2>
            <p className="text-zinc-400">Get a glimpse of the story before watching. TVDB lets you view trailers of any movie or TV show directly within the site.</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#6556cd] mb-2">🌍 Platform Availability</h2>
            <p className="text-zinc-400">Wondering where to watch? We show you the streaming platforms where each movie or series is available so you can watch with ease.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-zinc-400 text-sm">
            Built with ❤️ using <span className="text-white">React</span>, <span className="text-white">Tailwind CSS</span> & powered by <span className="text-white">Vite</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
