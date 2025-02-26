/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize, selectedColor, quantity } =
    location.state || {};

  // State for Payment Method
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  // Calculate Total Price
  const totalPrice = product
    ? parseInt(product.price.replace("$", "")) * quantity
    : 0;

  // Handle Order Confirmation
  const handleOrder = () => {
    alert(`Order placed successfully using ${paymentMethod.toUpperCase()}!`);
    navigate("/"); // Redirect to home after order
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800">Checkout</h2>

        {product ? (
          <div className="mt-6">
            {/* Product Info */}
            <div className="flex items-center gap-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-40 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg text-gray-600">{product.price}</p>
                <p className="text-gray-700">Size: {selectedSize}</p>
                <p className="text-gray-700">Color: {selectedColor}</p>
                <p className="text-gray-700">Quantity: {quantity}</p>
              </div>
            </div>

            {/* Total Price */}
            <p className="mt-6 text-xl font-semibold">Total: ${totalPrice}</p>

            {/* Payment Method Selection */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Select Payment Method:</h4>
              <div className="mt-3 space-y-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="credit_card"
                    checked={paymentMethod === "credit_card"}
                    onChange={() => setPaymentMethod("credit_card")}
                  />
                  <span>Credit/Debit Card</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  <span>PayPal</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="bank_transfer"
                    checked={paymentMethod === "bank_transfer"}
                    onChange={() => setPaymentMethod("bank_transfer")}
                  />
                  <span>Bank Transfer</span>
                </label>
              </div>
            </div>

            {/* Confirm Order Button */}
            <button
              onClick={handleOrder}
              className="bg-green-600 text-white px-6 py-3 mt-6 rounded-lg hover:bg-green-700 transition w-full"
            >
              Confirm Order
            </button>
          </div>
        ) : (
          <p className="text-red-500 mt-4">No product selected.</p>
        )}
      </div>
    </div>
  );
}

export default Checkout;
