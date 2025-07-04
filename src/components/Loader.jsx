import React from 'react';

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-[#0d0d0d] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Icon or logo */}
      <div className="text-5xl mb-6 animate-pulse">🎬</div>

      {/* Loading text */}
      <h1 className="text-xl md:text-3xl font-semibold tracking-wide animate-pulse">
        Now Loading Your Movie Experience...
      </h1>

      {/* Optional shimmer effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="w-[200%] h-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default Loader;
