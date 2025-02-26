/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../assets/images/design1.png";
import { Link } from "react-router-dom";

function Box2() {
  const seeMore = [
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
    { image: Image, text: "Black Jumpsuit", price: "#25,000" },
  ];

  return (
    <div className="bg-gray-300 p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {seeMore.map((item, index) => (
          <div
            key={index}
            className="p-4 hover:shadow-lg transition duration-300 flex flex-col items-center "
          >
            <Link to="/description">
              <img
                src={item.image}
                alt={item.text}
                className="w-40 h-56 bg-gray-500 rounded-lg object-contain mb-4"
              />
            </Link>
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

export default Box2;
