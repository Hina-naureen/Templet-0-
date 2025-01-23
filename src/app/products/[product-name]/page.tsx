'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data/product';
import { NavBar } from '@/app/Component/Navbar'; // Import NavBar
import Image from 'next/image';

const ProductPage = () => {
  const params = useParams();
  const productName = params?.['product-name']; // Extract product name from URL

  if (!productName) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Poppins' }}>
          Invalid Product Name
        </h1>
      </div>
    );
  }

  const product = products.find(
    (item) =>
      item.name.toLowerCase().replace(/\s+/g, '-') === productName.toLowerCase()
  );

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Poppins' }}>
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar bgColor="bg-[#FFFFFF]" />
      <div className="container mx-auto py-8 px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain w-full rounded-lg shadow-lg"
              quality={100}
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-3xl font-semibold text-yellow-600">{product.price}</p>
            <p className="text-lg text-gray-700">{product.description}</p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
