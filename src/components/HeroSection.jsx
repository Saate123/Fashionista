import React from "react";
import { Colors } from "./Colors";
import BackgroundImage from "../assets/images/foot.png"; // ✅ Correct way to import an image

function HeroSection() {
  return (
    <div
      className="relative h-[500px] flex items-center justify-baseline  text-white text-center px-6 bg-cover bg-center md:px-16 lg:px-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }} // ✅ Correct way to set the background
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 ml-5 max-w-3xl text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Become a Vendor Today
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Reach new customers and grow your sales
        </p>
        <button
          className="mt-6 px-6 py-3 rounded-lg font-semibold text-white hover:border-2 "
          style={{ backgroundColor: Colors.primaryText }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
