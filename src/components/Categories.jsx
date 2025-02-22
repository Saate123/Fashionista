import React from "react";
import Image from "../assets/images/design2.png";
import Image1 from "../assets/images/design5.png";
import Image2 from "../assets/images/design6.png";
import Image3 from "../assets/images/design7.png";

function Categories() {
  const categories = [
    { image: Image, text: "Ankara" },
    { image: Image1, text: "Suits" },
    { image: Image2, text: "Dresses" },
    { image: Image3, text: "Jumpsuits" },
  ];

  return (
    <div className="bg-gray-500">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semi-bold text-left italic text-white mb-8">
        Categories
      </h1>

      {/* Category Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-50 h-50 rounded-full bg-gray-900 mb-4 object-contain"
            />
            <p className="font-semibold text-lg text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
