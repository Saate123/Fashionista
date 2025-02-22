import React from "react";
import Image from "../assets/images/review.jpg";
import { LiaStarSolid } from "react-icons/lia";
import { Colors } from "./Colors";

function Reviews() {
  const reviews = [
    {
      image: Image,
      name: "Susan Omosigho",
      title: "Fashion Enthusiast",
      rating: 5,
      text: "Fashionista.com has greatly improved my overall fashion style.",
    },
    {
      image: Image,
      name: "Daniel Okeke",
      title: "Designer",
      rating: 5,
      text: "This platform helps me connect with customers who love my designs.",
    },
    {
      image: Image,
      name: "Fatima Bello",
      title: "Style Influencer",
      rating: 5,
      text: "The best fashion marketplace! Unique, stylish, and quality pieces.",
    },
    {
      image: Image,
      name: "James Olu",
      title: "Fashion Blogger",
      rating: 5,
      text: "A game-changer for discovering trendy and affordable fashion.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-200 py-10 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <h1
        className="text-3xl md:text-4xl font-semi-bold italic text-left mb-6"
        style={{ color: Colors.primaryText }}
      >
        Customers Reviews
      </h1>

      {/* Reviews Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{ backgroundColor: Colors.primaryText }}
            className="flex flex-row items-center p-10 rounded-lg rounded-tr-4xl rounded-bl-4xl shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Image Section (Always on Left) */}
            <div className="w-1/3 flex justify-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            </div>

            {/* Text Section (Takes Remaining Space) */}
            <div className="w-2/3 text-left mt-4 md:mt-0 px-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {review.name}
              </h3>
              <p className="text-sm text-white mb-2">{review.title}</p>
              <div className="flex justify-start my-2 text-yellow-500">
                {Array.from({ length: review.rating }, (_, i) => (
                  <LiaStarSolid key={i} />
                ))}
              </div>
              <p className="text-white text-center">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
