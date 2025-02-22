import React from "react";
import Image from "../assets/images/design1.png";
import Image1 from "../assets/images/design2.png";
import Image2 from "../assets/images/design5.png";
import { Link } from "react-router-dom";

function BestSellers() {
  const bestsellers = [
    { image: Image, text: "Black Jumpsuit", price: "₦25,000" },
    { image: Image1, text: "Ankara Gown", price: "₦25,000" },
    { image: Image2, text: "Suit", price: "₦30,000" },
  ];

  return (
    <div className="bg-gray-300 py-10 px-6">
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl md:text-4xl font-bold italic text-purple-950">
          Best Sellers
        </h1>
        <p>
          <Link to="/see-more" className="text-purple-500 hover:underline">
            See More...
          </Link>
        </p>
      </div>

      {/* Best Sellers Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bestsellers.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-48 h-48 rounded-lg object-contain mb-4"
            />
            <p className="font-semibold text-lg text-black">{item.text}</p>
            <h4 className="text-black font-bold text-xl">{item.price}</h4>
            <button className="mt-4 bg-purple-950 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
