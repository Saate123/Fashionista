/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="mt-4 text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b py-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    Size: {item.selectedSize}, Color: {item.selectedColor}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-800 font-semibold">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-6 py-3 mt-6 rounded-lg hover:bg-green-700 transition w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
