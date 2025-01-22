"use client";

import React from "react";
import Image from "next/image";
import { NavBar } from "../Component/Navbar";
import Footer from "../Component/Footer";

import Payment from "../Payment/page";

export default function Cart() {
  return (
    <>
      {/* Navbar */}
      <NavBar bgColor="bg-white" />

      {/* Image Background Section */}
      <div className="relative w-full bg-[#FFFFFF]">
        {/* Rectangle Image Background */}
        <div className="relative w-full h-[316px] top-[70px] opacity-50">
          <Image
            src="/shop.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Module Image */}
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Module Image"
            width={77}
            height={77}
          />
        </div>

        {/* Checkout Text */}
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-5xl font-medium text-center text-black">
          Cart
        </h1>

        {/* Breadcrumb (Home > Cart) */}
        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex justify-center items-center text-lg font-medium text-black">
          <span>Home</span>
          <div className="mx-2 w-[20px] h-[20px]">
            <Image
              src="/Vector.png"
              alt="Arrow Image"
              width={10}
              height={10}
            />
          </div>
          <span className="font-light">Cart</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative flex mt-[150px] mx-auto w-[1440px] h-auto">
        {/* Product Table Section */}
        <div className="bg-[#FFF9E5] w-[792px] h-[55px] border border-[#9F9F9F] rounded-md p-4 ">
          <div className="grid grid-cols-4 gap-4 items-center text-center text-black font-[Poppins] text-[16px]">
            {/* Headers */}
            <span className="font-bold text-[black]">Product</span>
            <span className="font-bold text-[black]">Price</span>
            <span className="font-bold text-[black]">Quantity</span>
            <span className="font-bold text-[black]">Subtotal</span>

            {/* Product Row */}
            <div className="flex items-center gap-4  bg-[#FFF9E5] md p-3 mt-7 w-20 h-20">
              <Image
                src="/Asgaard sofa 1.png"
                alt="Asgaard Sofa"
                width={50}
                height={50}
                className="rounded-md"

              />
              <span className="text-[#9F9F9F] md p-5">AsgaardSofa</span>
            </div>
            <span className="text-[#9F9F9F] mt-7">Rs. 250,000.00</span>
            <div className="flex items-center justify-center gap-2 mt-7">
              <button className="w-[32px] h-[32px] bg-white border border-[#9F9F9F] rounded">
                -
              </button>
              <span className="text-black mt-2">1</span>
              <button className="w-[32px] h-[32px] bg-white border border-[#9F9F9F] rounded">
                +
              </button>
            </div>
            <span className="text-black mt-7">Rs. 250,000.00</span>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="ml-[50px] bg-[#FFF9E5] w-[393px] h-[390px] rounded-md p-6">
          <h3 className="text-black font-bold text-lg mb-4">Cart Totals</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#9F9F9F] text-sm">Subtotal</span>
            <span className="text-black font-medium text-sm">
              Rs. 250,000.00
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#9F9F9F] text-sm">Total</span>
            <span className="text-black font-medium text-sm">
              Rs. 250,000.00
            </span>
          </div>
          <button className="w-full border border-[black]  hover:bg-yellow-600 text-black py-2 rounded-lg font-medium mt-9">
            Check Out
          </button>
        </div>
      </div>
      <Payment />
      {/* Footer */}
      <Footer />
    </>
  );
}