/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "../assets/images/design3.jpg";
import Image2 from "../assets/images/design8.png";
import { Colors } from "./Colors";
import { useNavigate } from "react-router-dom";

function Box() {

  const navigate = useNavigate();

  const data = [
    {
      header: "Your Style, Elevated",
      text: "Discover a world of stunning ready-to-wear fashion designed to empower your unique style. We bring you a curated collection from a vibrant community of talented Designers—all at your fingertips.",
      image: Image,
    },
    {
      header: "Support Independent Designers",
      text: "Discover unique pieces that reflect the individuality and empower the creative mind behind them.",
      image: Image2,
    },
  ];

  return (
    <div className="p-10 bg-gray-300 max-w-full justify-around mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-around md:flex-row items-center gap-6 p-4">
              <div className="text-center md:text-left w-full md:w-1/2">
                <h2
                  className="text-5xl lg:text-7xl mb-5 font-bold"
                  style={{ color: Colors.primaryText }}
                >
                  {item.header}
                </h2>
                <p
                  className="text-lg mt-5"
                  style={{ color: Colors.primaryText }}
                >
                  {item.text}
                </p>
                <button
                  onClick={() => navigate("/see-more")}
                  style={{ backgroundColor: Colors.primaryText }}
                  className="mt-5 px-6 py-3 text-white rounded-lg text-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 md:px-8 md:py-4"
                >
                  Shop Now
                </button>
              </div>
              <img
                src={item.image}
                alt={item.header}
                className="w-full max-w-[400px] md:w-1/2 rounded-full shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Box;
