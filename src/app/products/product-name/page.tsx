// 'use client';

// import React from 'react';
// import { useParams } from 'next/navigation';
// import { products } from '@/Data/products';
// import { NavBar } from '@/app/Component/Navbar'; // Import NavBar
// import Image from 'next/image';

// const ProductPage = () => {
//   const params = useParams();
//   const productName = params?.['product-name']; // Extract product name from URL

//   if (typeof productName !== 'string') {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Poppins' }}>
//           Invalid Product Name
//         </h1>
//       </div>
//     );
//   }

//   const product = products.find(
//     (item) =>
//       item.name.toLowerCase().replace(/\s+/g, '-') === productName.toLowerCase()
//   );

//   if (!product) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Poppins' }}>
//           Product Not Found
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <NavBar bgColor="bg-[#FFFFFF]" />

//       <div className="container mx-auto py-8 px-4">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Product Image Section */}
//           <div className="flex justify-center items-center">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="object-contain w-full rounded-lg shadow-lg"
//               quality={100}
//               priority
//             />
//           </div>

//           {/* Product Details Section */}
//           <div className="space-y-6">
//             <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
//             <p className="text-3xl font-semibold text-yellow-600">{product.price}</p>
//             <div className="flex gap-1 items-center">
//               {[...Array(4)].map((_, index) => (
//                 <span key={index} className="text-yellow-400">&#9733;</span>
//               ))}
//               <span className="text-gray-400">&#9734;</span>
//               <p className="ml-2 text-sm text-gray-600">(5 Reviews)</p>
//             </div>
//             <p className="text-lg text-gray-700">{product.description}</p>
//             <div className="flex gap-4">
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-600 mb-2">Size:</h3>
//                 <div className="flex gap-2">
//                   {["L", "XL", "XS"].map((size, i) => (
//                     <button
//                       key={i}
//                       className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-200"
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-600 mb-2">Color:</h3>
//                 <div className="flex gap-2">
//                   <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></div>
//                   <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
//                   <div className="w-8 h-8 bg-yellow-500 rounded-full cursor-pointer"></div>
//                 </div>
//               </div>
//             </div>
//             <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;