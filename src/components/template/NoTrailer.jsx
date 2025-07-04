import React from 'react'
import { Navigate } from 'react-router-dom'

const NoTrailer = () => {
  return (
    <div className="fixed  z-100 top-0 left-0 bg-gray-900 w-screen h-screen flex items-center justify-center">
        <i
        onClick={() => Navigate(-1)}
        className="hover:text-[#6556cd] text-2xl text-white absolute top-[5%] left-[5%] font-extrabold  mr-4  ri-close-line"
      ></i>
        {/* Icon or emoji */}
        <div className="text-6xl mb-4 animate-pulse">🚫🎬</div>

        {/* Text */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          No Trailer Available
        </h1>

        {/* <p className="text-sm text-zinc-400 animate-fade">
          We'll add it as soon as it's released!
        </p> */}

        {/* Optional floating filmstrip effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="w-[200%] h-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>
  )
}

export default NoTrailer