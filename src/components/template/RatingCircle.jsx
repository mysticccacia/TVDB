import React from "react";

const RatingCircle = ({ rating }) => {
  const strokeDasharray = 100;
  const percentage = (rating / 10) * 100; // Convert to percentage
  const strokeDashoffset = strokeDasharray - percentage;

  return (
    <div className="relative w-16 h-16">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        {/* Background Circle */}
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
        {/* Progress Circle */}
        <circle
          className="text-green-500"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Centered Rating Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-sm font-semibold">{rating*10}<sup>%</sup></span>
      </div>
    </div>
  );
};

export default RatingCircle;
