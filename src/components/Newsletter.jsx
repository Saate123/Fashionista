import React, { useState } from "react";
import { Colors } from "./Colors";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you, your subscription was successful`);
    setEmail(""); // Clear input field after submission
  };

  return (
    <div className=" text-white py-16 px-6" style={{backgroundColor:Colors.foot}}>
      <div className="max-w-2xl text-left md:ml-16 lg:ml-20">
        <h2 className="text-2xl md:text-2xl font-semi-bold italic mb-4">
          Join our Newsletter
        </h2>
        <p className="text-lg text-gray-900 md:text-lg mb-6">
          Do not miss a thing and join our mailing list! Get exclusive updates
          and new arrivals straight to your inbox
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex items-center w-full max-w-lg bg-white rounded-sm overflow-hidden"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 text-gray-800 outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-700 transition duration-300"
            style={{ backgroundColor: Colors.primaryText }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
