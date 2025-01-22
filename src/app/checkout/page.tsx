"use client";
import React from "react";
import Image from "next/image";
import { NavBar } from "../Component/Navbar";
import Footer from "../Component/Footer";
import Payment from "../Payment/page";

const Checkout = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar bgColor="bg-white" />

      {/* Image Background Section */}
      <div className="relative w-full bg-white">
        {/* Rectangle Image Background */}
        <div className="relative w-full h-[316px] top-[70px] opacity-50">
          <Image
            src="/shop.png"
            alt="Background Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Module Image */}
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Module Logo"
            width={77}
            height={77}
          />
        </div>

        {/* Checkout Text */}
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-medium text-center text-black">
          Checkout
        </h1>

        {/* Breadcrumb (Home > Checkout) */}
        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex justify-center items-center text-sm md:text-lg font-medium text-black">
          <span>Home</span>
          <div className="mx-2 w-5 h-5">
            <Image
              src="/Vector.png"
              alt="Arrow Icon"
              width={10}
              height={10}
            />
          </div>
          <span className="font-light">Checkout</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 mt-[90px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section: Billing Details */}
          <div className="w-full lg:w-2/3 border p-6">
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Input Fields */}
              <input type="text" placeholder="First Name" className="border p-2" />
              <input type="text" placeholder="Last Name" className="border p-2" />
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="border p-2 md:col-span-2"
              />
              <select className="border p-2 md:col-span-2">
                <option>Country/Region</option>
                <option>Pakistan</option>
              </select>
              <input
                type="text"
                placeholder="Street Address"
                className="border p-2 md:col-span-2"
              />
              <input type="text" placeholder="Town/City" className="border p-2" />
              <select className="border p-2">
                <option>Province</option>
                <option>Western Province</option>
              </select>
              <input type="text" placeholder="ZIP Code" className="border p-2" />
              <input type="text" placeholder="Phone" className="border p-2" />
              <input
                type="email"
                placeholder="Email Address"
                className="border p-2 md:col-span-2"
              />
              {/* Additional Information */}
              <textarea
                placeholder="Additional Information (Optional)"
                className="border p-2 md:col-span-2"
              ></textarea>
            </form>
          </div>

          {/* Right Section: Product Summary */}
          <div className="w-full lg:w-1/3 border p-6 bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Product</h2>
            <div className="flex justify-between mb-1">
              <p className="text-sm text-gray-500">Asgaard sofa</p>
              <p>1 X</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p className="font-bold">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Total</p>
              <p className="font-bold text-yellow-600">Rs. 250,000.00</p>
            </div>

            {/* Payment Methods */}
            <div className="mt-4">
              <label className="block">
                <input type="radio" name="payment" className="mr-2" />
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.
              </p>
              <label className="block mt-4 text-gray-400">
                <input type="radio" name="payment" className="mr-2" />
                Direct Bank Transfer
              </label>

              <label className="block mt-4 text-gray-400">
                <input type="radio" name="payment" className="mr-2" />
                Cash on Delivery
              </label>

            </div>

            {/* Privacy Policy */}
            <p className="text-sm mt-4 text-black">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            {/* Place Order Button */}
            <button
              className="w-full bg-gray-300 hover:bg-yellow-600 text-black py-2 mt-4"
              aria-label="Place Order"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Payment Component */}
      <Payment />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Checkout;