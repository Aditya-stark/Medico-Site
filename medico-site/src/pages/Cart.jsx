import React from "react";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import CartTable from "../components/Cart/CartTable";
import CartSummary from "../components/Cart/CartSummary";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Surgical Face Mask",
      type: "Armchair",
      color: "Orange",
      price: 1500,
      quantity: 1,
      image: "https://live.themewild.com/medion/assets/img/product/01.png",
    },
    {
      id: 2,
      name: "Surgical Face Mask",
      type: "Armchair",
      color: "Orange",
      price: 1000,
      quantity: 1,
      image: "https://live.themewild.com/medion/assets/img/product/15.png",
    },
    {
      id: 3,
      name: "Surgical Face Mask",
      type: "Armchair",
      color: "Orange",
      price: 100,
      quantity: 1,
      image: "https://live.themewild.com/medion/assets/img/product/03.png",
    },
    {
      id: 4,
      name: "Surgical Face Mask",
      type: "Armchair",
      color: "Orange",
      price: 200,
      quantity: 1,
      image: "https://live.themewild.com/medion/assets/img/product/04.png",
    },
    {
      id: 5,
      name: "Surgical Face Mask",
      type: "Armchair",
      color: "Orange",
      price: 500,
      quantity: 1,
      image: "https://live.themewild.com/medion/assets/img/product/05.png",
    },
  ]);

  //To Display from Top Always
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Quantity Change
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove Item
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate Summary
  const calculateSummary = () => {
    const subTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discount = 5;
    const shipping = subTotal > 500 ? 0 : 50;
    const taxes = cartItems.length === 0 ? 0 : subTotal * 0.18;
    const total = subTotal - discount + taxes + shipping;
    return { subTotal, discount, shipping, taxes, total };
  };

  const { subTotal, discount, shipping, taxes, total } = calculateSummary();

  return (
    <div className="overflow-x-hidden">
      {/* Head Title */}
      <PageTitle title="Shop Cart" />

      {/* Cart Items Table and Cart Summary */}
      <div className="p-0 sm:p-2 md:px-[10%] md:py-[5%] flex flex-col w-full lg:flex-row gap-8">
        <CartTable
          cartItems={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}
        />
        <CartSummary
          subTotal={subTotal}
          discount={discount}
          shipping={shipping}
          taxes={taxes}
          total={total}
        />
      </div>
    </div>
  );
}
