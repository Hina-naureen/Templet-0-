
"use client";

import { NavBar } from "@/app/Component/Navbar";
import React from "react";


import { useRouter } from "next/navigation"; // Correct import for App Router
import Image from "next/image"; // Import Image component

const ProductOrder = () => {
  const router = useRouter(); // Initialize router

  const handleAddToCart = () => {
    router.push("/ShoppingCart"); // Redirect to /cart page
  };

  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Navbar */}
      <NavBar bgColor="bg-[#FFFFFF]" />

      {/* Additional Container */}
      <div className="w-full h-[100px] bg-[#FFFFFF] fixed top-9 left-0 z-10 flex justify-start px-[99px]">
        <div className="flex items-center text-gray-500">
          <span>Home</span>
          <Image
            src="/Vector.png"
            alt="arrow"
            width={12}
            height={8}
            className="mx-[20px]"
          />
          <span>Shop</span>
          <Image
            src="/Vector.png"
            alt="arrow"
            width={14}
            height={8}
            className="mx-[20px]"
          />
        </div>
        <div className="flex items-center">
          <div className="w-[37px] rotate-90 border-t-2 border-gray-500"></div>
          <div className="text-[16px] text-black ml-[9px]">Asgaard sofa</div>
        </div>
      </div>

      {/* Page Container */}
      <div className="relative top-[1px] w-[1440px] h-[820px] mx-auto bg-gray-50">
        {/* Left Side Images */}
        <div className="absolute w-[76px] h-[416px] top-[266px] left-[99px]">
          {[
            "Outdoor sofa set 1.png",
            "Outdoor sofa set_3.png",
            "Stuart sofa 1.png",
            "Maya sofa three seater (1) 1.png",
          ].map((img, i) => (
            <div
              key={i}
              className="w-[66px] h-[70px] mb-[15px] bg-[#FFF9E5]"
            >
              <Image
                src={`/${img}`}
                alt={`Sofa ${i + 1}`}
                width={66}
                height={70}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Side Layout */}
        <div className="absolute w-[1241px] h-auto top-[246px] left-[197px] flex gap-[20px]">
          {/* Image and Background */}
          <div className="relative w-[553px] h-[500px]">
            <div className="absolute w-[423px] h-[500px] bg-[#FFF9E5] rounded-tl-[10px]"></div>
            <div className="absolute w-[391px] h-[391px] top-[55px] left-[25px]">
              <Image
                src="/Asgaard sofa 1.png"
                alt="Asgaard Sofa"
                width={391}
                height={391}
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="relative w-[606px] h-auto">
            <h1 className="text-[42px] font-poppins font-light leading-[63px] text-black mb-[20px]">
              Asgaard Sofa
            </h1>
            <p className="text-[24px] font-medium text-[#9F9F9F] mb-[10px]">
              Rs. 250,000.00
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-[10px] mb-[20px]">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  alt="Full Star"
                  width={18}
                  height={18}
                />
              ))}
              <div className="w-[18px] h-[18px] bg-[url('/half.png')] bg-cover bg-no-repeat"></div>
              <div className="w-[37px] rotate-90 border-t-2 border-gray-500"></div>
              <p className="text-[#9F9F9F] text-[13px] ml-[10px]">
                5 Customer Reviews
              </p>
            </div>

            {/* Description */}
            <p className="text-[13px] font-light leading-[19.5px] text-black mb-[20px]">
              Setting the bar as one of the loudest speakers in its class,<br />
              the Kilburn is a compact, stout-hearted hero with a<br />
              well-balanced audio which boasts a clear midrange and<br />
              extended highs for a sound.
            </p>

            {/* Sizes */}
            <div className="mb-[20px]">
              <span className="text-gray-500 font-poppins text-[14px] block mb-[10px]">
                Size:
              </span>
              <div className="flex gap-[10px]">
                {["L", "XL", "XS"].map((size, i) => (
                  <div
                    key={i}
                    className={`w-[30px] h-[30px] ${
                      i === 0 ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"
                    } flex justify-center items-center rounded-[5px]`}
                  >
                    <span className="text-[13px] font-light">{size}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-[20px]">
              <span className="text-gray-500 font-poppins text-[14px] block mb-[10px]">
                Color:
              </span>
              <div className="flex gap-[10px]">
                <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-black rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-[#CDBA7B] rounded-full"></div>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="flex items-center gap-[20px] mb-[20px]">
              <div className="flex items-center justify-between w-[123px] h-[64px] bg-[#FFF9E5] rounded-[10px]">
                <button className="text-black text-[16px]">-</button>
                <span className="text-black text-[16px]">1</span>
                <button className="text-black text-[16px]">+</button>
              </div>

              {/* Updated Button */}
              <button
                onClick={handleAddToCart} // Call function on click
                className="mt-6 border border-black py-3 px-10 text-black hover:bg-yellow-600 hover:text-black bg-gray-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;