'use client';  // For client-side rendering

import React from 'react';
import { NavBar } from '../Component/Navbar';  // Import NavBar from the specified path

import FilterPage from '../Filter-page/page';  // Import FilterPage component

import NewComponent from '../Cards/page';
import Payment from '../Payment/page';
import Footer2 from '../Footer2/page';
import Vase from '../ShoppingCart/vase/page';


const Shop = () => {
  return (
    <div className="bg-white">  {/* Background set to white */}
      {/* NavBar */}
      <NavBar bgColor="bg-[#FFFFFF]" />  {/* Setting the NavBar background color */}

      {/* Vase component */}
      <Vase />  {/* Render the Vase component */}

      {/* FilterPage component */}
      <FilterPage />  {/* Render the FilterPage component */}

    <NewComponent />
    
    <Payment />
    <Footer2 />
    
    </div>
  );
};

export default Shop;  // Export the Shop component to be used in other parts of the application