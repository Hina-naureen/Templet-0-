"use client";

import React from "react";
import { NavBar } from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";
import Payment from "../Payment/page";

export default function Contact() {
  return (
    <>
      {/* Navbar */}
      <NavBar bgColor="bg-white" />

      {/* Header Section */}
      <div className="relative w-full bg-[#FFFFFF]">
        <div className="relative w-full h-[316px] top-[70px] opacity-50">
          <Image
            src="/shop.png"
            alt="Background"
            fill={true}
            style={{ objectFit: "cover" }}
            priority // Ensures fast loading
          />
        </div>
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Module Image"
            width={77}
            height={77}
            priority
          />
        </div>
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-medium text-center text-black">
          Contact
        </h1>
        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex justify-center items-center text-sm md:text-lg font-medium text-black">
          <span>Home</span>
          <div className="mx-2 w-[20px] h-[20px]">
            <Image
              src="/Vector.png"
              alt="Arrow"
              width={10}
              height={10}
            />
          </div>
          <span className="font-light">Contact</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full mt-10 md:mt-20 bg-[#FFFFFF] mx-auto px-4 md:px-0">
        {/* "Get In Touch With Us" Section */}
        <div className="w-full py-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
            Get In Touch With Us
          </h2>
          <p className="text-center text-[#9F9F9F] font-poppins text-[14px] md:text-[16px] font-normal leading-[24px] mt-5">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us<br /> An Email. Our Staff Will Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Form and Info Section */}
        <div className="w-full lg:w-[1240px] bg-[#FFFFFF] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Address, Phone, and Working Time */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-start space-x-5">
              <Image
                src="/address.png"
                alt="Address Icon"
                width={22}
                height={28.18}
              />
              <div>
                <h3 className="text-base md:text-lg font-medium text-black">Address</h3>
                <p className="text-sm text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <Image
                src="/phone.png"
                alt="Phone Icon"
                width={22}
                height={28.18}
              />
              <div>
                <h3 className="text-base md:text-lg font-medium text-black">Phone</h3>
                <p className="text-sm text-gray-600">
                  Mobile: (+84) 546-6789 <br />
                  Hotline: (+84) 456-7898
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <Image
                src="/workintime.png"
                alt="Working Time Icon"
                width={22}
                height={28.18}
              />
              <div>
                <h3 className="text-base md:text-lg font-medium text-black">Working Time</h3>
                <p className="text-sm text-gray-600">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-gray-100 border border-[black] hover:bg-yellow-600 text-black font-medium rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Payment Component */}
      <Payment />

      {/* Footer */}
      <Footer />
    </>
  );
}