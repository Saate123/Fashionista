/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import designImage from "../assets/images/design3.jpg";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Colors } from "./Colors";
import { Link } from "react-router-dom";

function Form2() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    // Redirect after successful login (adjust based on authentication logic)
    navigate("/");
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-200">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-6 max-w-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-10 text-left">
          Welcome back!
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <button className="flex items-center justify-center w-full bg-transparent border-2 text-black hover:border-0 py-2 rounded-lg hover:bg-purple-700 transition duration-300 mb-6">
            <FcGoogle className="mr-2 text-2xl" /> Use Google Account
          </button>
          <p className="text-center text-black mb-5">Or</p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-style w-full h-9 border-b-2 mb-5"
            required
          />

          {/* Password Input with Eye Icon Inside */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-style w-full pr-12 h-9 border-b-2 mb-5"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <FaRegEye size={18} className="mb-2.5" />
              ) : (
                <FaRegEyeSlash size={18} className="mb-2.5" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2 text-sm mb-5">
            <input type="checkbox" />
            <p>Remember Password</p>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg"
            style={{ backgroundColor: Colors.primaryText }}
          >
            Welcome Back!
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="hover:underline"
              style={{ color: Colors.primaryText }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-end mb-6 md:mb-0">
        <img
          src={designImage}
          alt="Design"
          className="w-full max-w-lg md:max-w-md lg:max-w-xl"
        />
      </div>
    </section>
  );
}

export default Form2;
