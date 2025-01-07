import React from "react";

export default function CartSummary({ subTotal, discount, shipping, taxes, total }) {
  return (
    <div className="w-full lg:w-1/3 mt-8">
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
        <div className="text-sm flex justify-between py-2">
          <span>Sub Total:</span>
          <span>₹{subTotal.toFixed(2)}</span>
        </div>
        <div className="text-sm flex justify-between py-2">
          <span>Discount:</span>
          <span>- ₹{discount.toFixed(2)}</span>
        </div>
        <div className="text-sm flex justify-between py-2">
          <span>Shipping:</span>
          <span>
            {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="text-sm flex justify-between py-2">
          <span>Taxes:</span>
          <span>₹{taxes.toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="text-lg font-semibold flex justify-between">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-teal-500 text-white py-2 rounded shadow hover:bg-teal-600">
          Checkout Now →
        </button>
      </div>
    </div>
  );
}
