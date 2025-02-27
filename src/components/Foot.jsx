import React from "react";
import Image from "../assets/images/logo.png";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Colors } from "./Colors";

function Foot() {
  return (
    <footer className="bg-gray-400 text-white py-10 items-center px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Socials */}
        <div>
          <img src={Image} alt="Logo" className="w-20 mb-4" />
          <p
            className="text-lg font-semibold mb-2"
            style={{ color: Colors.primaryText }}
          >
            Follow Us
          </p>
          <div className="flex space-x-4 text-2xl">
            <Link to="https://www.tiktok.com/@fashionistar_1?_t=ZM-8uGZ6xBSUsx&_r=1">
              <PiTiktokLogo
                className="cursor-pointer"
                style={{ color: Colors.primaryText }}
              />
            </Link>
            <Link to="https://www.facebook.com/share/1HPVqLzizy/">
              <SlSocialFacebook
                className=" cursor-pointer"
                style={{ color: Colors.primaryText }}
              />
            </Link>
            <Link>
              <SlSocialInstagram
                className="cursor-pointer"
                style={{ color: Colors.primaryText }}
              />
            </Link>
            <Link>
              <CiLinkedin
                className="cursor-pointer"
                style={{ color: Colors.primaryText }}
              />
            </Link>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h4
            className="text-lg font-semibold mb-3"
            style={{ color: Colors.primaryText }}
          >
            About Us
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-purple-500">
                Who we are
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-purple-500">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-purple-500">
                Terms & Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4
            className="text-lg font-semibold mb-3"
            style={{ color: Colors.primaryText }}
          >
            Our Services
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-purple-500">
                Vendors
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-purple-500">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-purple-500">
                Size Charts
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4
            className="text-lg font-semibold mb-3"
            style={{ color: Colors.primaryText }}
          >
            Customer Care
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-purple-500">
                Delivery
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-purple-500">
                Payment
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-purple-500">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-900">
        &copy; {new Date().getFullYear()} Fashionista.com. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Foot;
