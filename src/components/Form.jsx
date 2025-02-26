/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import designImage from "../assets/images/design3.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Colors } from "./Colors";
import { Link } from "react-router-dom";

function Form() {
  const [isVendor, setIsVendor] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    email: "",
    phone: "",
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
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (isVendor && !formData.brandName) {
      alert("Please enter your Brand Name.");
      return;
    }

    // Redirect based on user type
    if (isVendor) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen bg-gray-200">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-baseline mb-6 md:mb-0">
        <img
          src={designImage}
          alt="Design"
          className="w-full max-w-lg md:max-w-md lg:max-w-xl"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-6 rounded-lg max-w-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-10 text-left">
          Create an Account!
        </h3>

        {/* Form Switcher */}
        <div className="flex items-center space-x-10 mb-10">
          <span className="text-gray-600">User</span>
          <label className="relative inline-block w-14 h-7">
            <input
              type="checkbox"
              className="hidden"
              onChange={() => setIsVendor(!isVendor)}
            />
            <span
              className={`absolute cursor-pointer inset-0 rounded-full transition-all duration-300 ${
                isVendor ? "bg-purple-950" : "bg-gray-300"
              }`}
            ></span>
            <span
              className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                isVendor ? "translate-x-7" : "translate-x-0"
              }`}
            ></span>
          </label>
          <span className="text-gray-600">Vendor</span>
        </div>

        {/* User Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <button className="flex items-center justify-center w-full bg-transparent border-2 text-black hover:border-0 py-2 rounded-lg hover:bg-purple-700 transition duration-300 mb-6">
            <FcGoogle className="mr-2 text-2xl" /> Use Google Account
          </button>
          <p className="text-center text-black mb-5">Or</p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-style w-full h-9 border-b-2 mb-2.5"
            onChange={handleChange}
            required
          />
          {isVendor && (
            <input
              type="text"
              name="brandName"
              placeholder="Brand Name"
              className="input-style w-full h-9 border-b-2 mb-2.5"
              onChange={handleChange}
              required={isVendor}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-style w-full h-9 border-b-2 mb-2.5"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input-style w-full h-9 border-b-2 mb-2.5"
            onChange={handleChange}
            required
          />

          {/* Password Input with Eye Icon Inside */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input-style w-full pr-12 h-9 border-b-2 mb-2.5"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <FaRegEye size={18} />
              ) : (
                <FaRegEyeSlash size={18} />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2 text-sm mb-5">
            <input type="checkbox" required />
            <p>
              By signing up, I agree to{" "}
              <Link
                to="#"
                className="text-blue-500 hover:underline"
                style={{ color: Colors.primaryText }}
              >
                terms and conditions
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg"
            style={{ backgroundColor: Colors.primaryText }}
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600">
            Already have an account?
            <Link
              to="/signin"
              className=" hover:underline"
              style={{ color: Colors.primaryText }}
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Form;
