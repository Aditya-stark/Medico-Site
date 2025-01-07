import React from "react";

export default function CartTable({ cartItems, onQuantityChange, onRemoveItem }) {
  
  return (
    <div className="container pt-6 sm:pt-0 md:p-6 bg-gray-100 rounded-lg shadow">
      <div className="flex w-full flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs sm:text-sm text-gray-500">
                <th className="p-1 sm:p-2 md:p-4">IMAGE</th>
                <th className="p-1 sm:p-2 md:p-4">PRODUCT NAME</th>
                <th className="p-1 sm:p-2 md:p-4">PRICE</th>
                <th className="p-1 sm:p-2 md:p-4">QUANTITY</th>
                <th className="p-1 sm:p-2 md:p-4">SUB TOTAL</th>
                <th className="p-1 sm:p-2 md:p-4">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b text-xs sm:text-sm">
                  <td className="p-1 sm:p-2 md:p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded"
                    />
                  </td>
                  <td className="p-1 sm:p-2 md:p-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-xs">Type: {item.type}</p>
                    <p className="text-gray-500 text-xs">Color: {item.color}</p>
                  </td>
                  <td className="p-1 sm:p-2 md:p-4">₹{item.price}</td>
                  <td className="p-1 sm:p-2 md:p-4 flex items-center">
                    <button
                      className="p-1 border rounded text-gray-600"
                      onClick={() => onQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-2 sm:px-4">{item.quantity}</span>
                    <button
                      className="p-1 border rounded text-gray-600"
                      onClick={() => onQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </td>
                  <td className="p-1 sm:p-2 md:p-4">₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-1 sm:p-2 md:p-4">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
