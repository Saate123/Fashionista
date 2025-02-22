import React from "react";
import Image from "../assets/images/icon1.png";
import Image1 from "../assets/images/icon2.png";
import Image2 from "../assets/images/icon3.png";
import Image3 from "../assets/images/icon4.png";
import { Colors } from "./Colors";

function Qualities() {
  const qualities = [
    { image: Image, text: "Trusted Brands" },
    { image: Image1, text: "High Quality Materials" },
    { image: Image2, text: "Stylish Designs" },
    { image: Image3, text: "Fast Delivery" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-500">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {qualities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 transition duration-300"
          >
            <img src={item.image} alt={item.text} className="w-24 h-24 mb-4" />
            <p className="font-semibold text-lg" style={{color: Colors.primaryText}}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qualities;
