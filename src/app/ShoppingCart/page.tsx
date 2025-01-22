"use client";

import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component

const ShoppingCart = () => {
  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "Asgaard Sofa",
      image: "/Asgaard sofa 1.png",
      price: 250000,
      quantity: 1,
    },
  ];

  const subtotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="relative w-full h-screen bg-[#FFFFFF] flex justify-end">
      {/* Cart Sidebar */}
      <div className="w-full sm:w-[417px] h-[746px] bg-white border border-[#D9D9D9] p-6 shadow-lg">
        {/* Shopping Cart Title */}
        <h2 className="text-black text-xl font-semibold mb-6">Shopping Cart</h2>

        {/* Conditional Rendering for Products */}
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center border-b border-[#D9D9D9] pb-4 mb-4"
            >
              <div className="bg-[#FBEBB5] rounded-lg w-[80px] h-[80px] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-black text-base font-medium">
                  {product.name}
                </p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span>{product.quantity}</span>
                  <span className="mx-2">X</span>
                  <span className="text-[#B88E2F]">Rs. {product.price}</span>
                </div>
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/cross.png"
                  alt="Remove"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}

        {/* Subtotal Section */}
        <div className="mb-4 mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-black text-lg">Subtotal</p>
            <p className="text-[#B88E2F] text-lg font-medium">Rs. {subtotal}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="w-[47%] bg-gray-200 text-black py-2 rounded-lg border border-black hover:bg-yellow-600">
            View Cart
          </button>
          <button
            onClick={handleCheckout}
            className="w-[47%] bg-gray-200 text-black py-2 rounded-lg hover:bg-yellow-600 border border-black"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;