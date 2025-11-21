import React from "react";
import { FaMosque } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-screen bg-[#0e0d0a]">
        {/* Glowing Mosque Icon */}
        <div className="text-[#FFD700] text-6xl animate-pulse drop-shadow-[0_0_25px_#FFD700] mb-4">
          <FaMosque />
        </div>

        {/* Spinning Circle Loader */}
        <span
          className="loading loading-ring"
          style={{
            width: "90px",
            height: "90px",
            borderColor: "#FFD700",
            borderWidth: "6px",
          }}
        ></span>

        {/* Text Glow */}
        <p className="text-[#FFD700] font-serif mt-6 text-xl tracking-widest animate-pulse drop-shadow-[0_0_10px_#FFD700]">
          Loading...
        </p>

        {/* Slow Fade Animation Background Highlights */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18140d] to-transparent opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
