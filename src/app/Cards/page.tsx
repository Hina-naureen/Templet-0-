'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// Product Component
const Product: React.FC<{ name: string; image: string; price: string; description: string }> = ({ name, image, price, description }) => {
  return (
    <div className="border border-[#D9D9D9] p-4 flex flex-col items-start rounded-[10px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-[287px] h-[287px] mb-4 overflow-hidden rounded-[10px] group">
        <Image
          src={image}
          alt={name}
          width={287}
          height={287}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Name and Description */}
      <div className="text-left">
        <h3 className="text-[16px] font-medium text-black mb-2" style={{ fontFamily: 'Poppins' }}>
          {name}
        </h3>
        <p className="text-[14px] text-[#707070]" style={{ fontFamily: 'Poppins' }}>
          {description}
        </p>
      </div>

      {/* Product Price */}
      <div className="mt-2">
        <p className="text-[18px] font-semibold text-black" style={{ fontFamily: 'Poppins' }}>
          {price}
        </p>
      </div>
    </div>
  );
};

// Main Component
const NewComponent: React.FC = () => {
  const productRows = [
    [
      {
        name: 'Trenton Modular Sofa_3',
        image: '/Trenton modular sofa_3 1.png',
        price: 'Rs. 25,000.00',
        description: 'A comfortable and stylish sofa perfect for any living room.',
      },
      {
        name: 'Granite Dining Table with Dining Chair',
        image: '/Granite dining table with dining chair 1.png',
        price: 'Rs. 25,000.00',
        description: 'Elegant dining table set for a modern home.',
      },
      {
        name: 'Outdoor Bar Table and Stool',
        image: '/Outdoor bar table and stool 1.png',
        price: 'Rs. 25,000.00',
        description: 'Perfect for outdoor gatherings and bar spaces.',
      },
      {
        name: 'Plain Console with Teak Mirror',
        image: '/Plain console with teak mirror 1.png',
        price: 'Rs. 25,000.00',
        description: 'Stylish console with a teak mirror for modern homes.',
      },
    ],
[
    {
      name: 'Grain coffee table',
      image: '/Grain coffee table 1.png',
      price: 'Rs. 15,000.00',
      description: 'A sleek and modern coffee table for your living room.',
    },
    {
      name: 'Kent coffee table',
      image: '/Kent coffee table 1.png',
      price: 'Rs. 225,000.00',
      description: 'A luxurious leather armchair for your home.',
    },
    {
      name: 'Round coffee table_color 2',
      image: '/Round coffee table_color 2 1.png',
      price: 'Rs. 251,000.00',
      description: 'A spacious bookshelf for your favorite reads.',
    },
    {
      name: 'Reclaimed teak coffee table',
      image: '/Reclaimed teak coffee table 1.png',
      price: 'Rs. 25,200.00',
      description: 'A compact bedside table for your bedroom.',
    },
  ],
  [
    {
     name: 'Plain console_',
      image: '/Plain console_ 1.png',
      price: 'Rs. 258,200.00',
      description: 'A complete dining set for your dining room.', 
    },
    {
      name: 'Reclaimed teak Sideboard',
      image: '/Reclaimed teak Sideboard 1.png',
      price: 'Rs. 20,000.00',
      description: 'An ergonomic office chair for your workspace.',
    },
    {
      name: 'SJP_0825',
      image: '/SJP_0825  1.png',
      price: 'Rs. 200,000.00',
      description: 'A high-quality coffee maker for coffee lovers.',
    },
    {
      name: 'Bella chair and table',
      image: '/Bella chair and table 1.png',
      price: 'Rs. 100,000.00',
      description: 'A study desk with ample storage.',
    },
  ],
  [
    {
      name: 'Granite square side table',
      image: '/Granite square side table 2.png',
      price: 'Rs. 258,800.00',
      description: 'A complete dining set for your dining room.',
    },

    {
      name: 'Asgaard sofa',
      image: '/Asgaard sofa 1.png',
      price: 'Rs. 250,000.00',
      description: 'An ergonomic office chair for your workspace.'
    },
    {
      name: 'Maya sofa three seater',
      image: '/Maya sofa three seater 1.png',
      price: 'Rs. 115,000.00',
      description: 'A high-quality coffee maker for coffee lovers.'
    },
    {
      name: 'Outdoor sofa set',
      image: '/Outdoor sofa set 1.png',
      price: 'Rs. 244,000.00',
      description: 'A study desk with ample storage.'
    },
    // Add more rows as required
  ],
];

  return (
    <section className="bg-white py-8 px-4 md:px-16 mx-auto">
      {/* Products Grid */}
      {productRows.map((row, rowIndex) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 mx-auto"
          key={rowIndex}
          style={{ maxWidth: '1240px' }}
        >
          {row.map((product, index) => (
            <Link key={index} href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <Product
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            </Link>
          ))}
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-20">
        <div className="bg-[#FBEBB5] rounded-[10px] w-[60px] h-[60px] flex justify-center items-center mr-2">1</div>
        <div className="bg-[#FFF9E5] rounded-[10px] w-[60px] h-[60px] flex justify-center items-center mx-2">2</div>
        <div className="bg-[#FFF9E5] rounded-[10px] w-[60px] h-[60px] flex justify-center items-center mx-2">3</div>
        <div className="bg-[#FFF9E5] rounded-[10px] w-[98px] h-[60px] flex justify-center items-center ml-2">
          Next
        </div>
      </div>
    </section>
  );
};

export default NewComponent;