'use client';
import Image from 'next/image';
import React from 'react';

const Product: React.FC<{ name: string; image: string; price: string; description: string }> = ({ name, image, price, description }) => (
  <div className="border-[#D9D9D9] p-[16px] flex flex-col items-center rounded-[10px]">
    {/* Product Image */}
    <div className="w-[287px] h-[287px] mb-[16px] flex justify-center items-center">
      <Image src={image} alt={name} width={287} height={287} className="object-cover" />
    </div>

    {/* Product Name and Description */}
    <div className="text-center">
      <h3 className="text-[16px] font-medium text-black mb-[4px]" style={{ fontFamily: 'Poppins' }}>
        {name}
      </h3>
      <p className="text-[16px] text-[#000000]" style={{ fontFamily: 'Poppins' }}>
        {description}
      </p>
    </div>

    {/* Product Price */}
    <div className="text-center mt-[8px]">
      <p className="text-[24px] font-medium text-black" style={{ fontFamily: 'Poppins' }}>
        {price}
      </p>
    </div>
  </div>
);

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
    // Add more rows as needed...
  ];

  return (
    <section className="bg-white py-8 px-4 md:px-16">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-[36px] font-bold text-black mb-[24px]" style={{ fontFamily: 'Poppins' }}>
          Explore Our Products
        </h2>
        <p className="text-[16px] text-[#9F9F9F]" style={{ fontFamily: 'Poppins' }}>
          Discover our top selections with premium quality and design.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] mt-[36px]">
        {productRows.flat().map((product, index) => (
          <Product
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-[40px]">
        <button className="px-[32px] py-[16px] bg-black text-white text-[20px] font-medium rounded-[4px]" style={{ fontFamily: 'Poppins' }}>
          View More
        </button>
      </div>
    </section>
  );
};

export default NewComponent;