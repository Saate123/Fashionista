/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Image from "../assets/images/design1.png";

function ProductDescription() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [selectedSize, setSelectedSize] = useState(null); // State for size selection
  const [selectedColor, setSelectedColor] = useState(null); // State for color selection

  const product = {
    name: "Black Jumpsuit",
    rating:5,
    price: "$50",
    description:
      "This elegant black jumpsuit is perfect for any occasion. Designed with premium fabric for comfort and durability, it features a stylish fit that flatters all body types.",
    image: Image,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red", "White"],
  };

  // Sample recommended products
  const recommendedProducts = [
    { id: 1, image: Image, name: "Red Dress", price: "$45", rating: 4 },
    { id: 2, image: Image, name: "Blue Jeans", price: "$40", rating: 3 },
    { id: 3, image: Image, name: "White Blouse", price: "$35", rating: 5 },
    { id: 4, image: Image, name: "Leather Jacket", price: "$60", rating: 4 },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg shadow-lg">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <div className="flex items-center mt-2">
            {renderStars(product.rating)}
          </div>
          <p className="text-xl text-gray-600 mt-2">{product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Select Size */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Select Size:</h4>
            <div className="flex space-x-3 mt-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 rounded-lg transition ${
                    selectedSize === size
                      ? "bg-gray-800 text-white"
                      : "border-gray-400 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Select Color */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Available Colors:</h4>
            <div className="flex space-x-3 mt-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 border-2 cursor-pointer transition ${
                    selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-400"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Quantity:</h4>
            <div className="flex items-center border-2 w-32 mt-2 space-x-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-lg hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-lg hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart & Buy Now */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() =>
                console.log("Added to Cart:", {
                  selectedSize,
                  selectedColor,
                  quantity,
                })
              }
              className="bg-purple-950 w-36 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() =>
                console.log("Bought:", {
                  selectedSize,
                  selectedColor,
                  quantity,
                })
              }
              className="bg-transparent w-36 border-2 text-black hover:text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* "You May Also Like" Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommendedProducts.map((item) => (
            <Link
              to=""
              key={item.id}
              className="p-4 hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-48 h-56 bg-gray-500 object-contain rounded-lg mb-10"
              />
              <p className="text-lg font-medium text-gray-800 mt-3">
                {item.name}
              </p>
              <p className="text-gray-600 font-semibold">{item.price}</p>

              {/* Star Rating Display */}
              <div className="flex items-center mt-2">
                {renderStars(item.rating)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
