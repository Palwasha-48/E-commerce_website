"use client"

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faShoppingCart, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { IoMdHeartEmpty, IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import Footer from "./Footer";
import Slides from "./Slides";
import Slide2 from "./Slide2";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <>
    <div className="bg-white min-h-screen pb-4">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" className="h-12 mr-2" height={290} width={60}/>
            <Image src="/logoname.png" alt="Logo Name" className="h-6" height={100} width={120}/>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/Home" className="hover:text-gray-800 text-sm font-medium">Home</a>
            <a href="/Shop" className="hover:text-gray-800 text-sm font-medium">Shop</a>
            <a href="/Blog" className="hover:text-gray-800 text-sm font-medium">Blog</a>
            <a href="/Contact" className="hover:text-gray-800 text-sm font-medium">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faUser} className="hover:text-gray-800 cursor-pointer" />
            <FontAwesomeIcon icon={faSearch} className="hover:text-gray-800 cursor-pointer" />
            <FontAwesomeIcon icon={faHeart} className="hover:text-gray-800 cursor-pointer" />
            <FontAwesomeIcon icon={faShoppingCart} className="hover:text-gray-800 cursor-pointer" />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden focus:outline-none"
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </button>

          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col mt-4 space-y-4">
            <a href="/Home" className="hover:text-gray-800 text-sm font-medium">Home</a>
            <a href="/Shop" className="hover:text-gray-800 text-sm font-medium">Shop</a>
            <a href="/Blog" className="hover:text-gray-800 text-sm font-medium">Blog</a>
            <a href="/Contact" className="hover:text-gray-800 text-sm font-medium">Contact</a>
          </div>
        )}

      </div>
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-center justify-center pl-[300px]"
        style={{ backgroundImage: "url('/homepagemain.jpeg')" }}>
        <div className="bg-[#fdf1e3] p-6 sm:p-8 lg:p-10 w-11/12 max-w-md rounded-lg shadow-lg">
          <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-600 mb-2">New Arrival</p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#9c772f] mb-4">Discover Our New Collection</h1>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="bg-[#9c772f] text-white uppercase font-bold py-2 px-4 sm:py-2 sm:px-6 rounded hover:bg-[#7d5c24] transition duration-300">Buy Now</button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Browse The Range</h2>
          <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white">
            <Image src="/item3.png" alt="Dining" width={400} height={300} />
            <div className="p-4 text-center">
              <p className="text-lg font-bold">Dining</p>
            </div>
          </div>
          <div className="bg-white">
            <Image src="/item2.png" alt="Living" width={400} height={300} />
            <div className="p-4 text-center">
              <p className="text-lg font-bold">Living</p>
            </div>
          </div>
          <div className="bg-white">
            <Image src="/item1.png" alt="Bedroom" width={400} height={300} />
            <div className="p-4 text-center">
              <p className="text-lg font-bold">Bedroom</p>
            </div>
          </div>
        </div>
      </div>
   

  <div className="bg-white pt-0">
    <div className="container mx-auto px-4 py-0">
    <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Our Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 relative">
            <Image
              src="/pro1.png"
              alt="pro1"
              width={400}
              height={300} />
           <div className="p-4 text-left">
              <p className="text-xl font-bold">Syltherine</p>
              <p className="font-normal text-gray-600">Stylish cafe chair</p>
              <p className="text-black">Rp 2.500.000</p>
              <span className="text-gray-600"><del> Rp 3.500.000 </del></span>
            </div>
            <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
          -30%
        </div>
          </div>

          <div 
            className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-cover bg-center flex flex-col justify-center items-center space-y-4"
                      style={{ backgroundImage: "url('/bgpic.png') " }}>
              <div className="bg-white">
                  <button className="items-center justify-center font-bold text-yellow-500 hover:bg-orange-100 h-10 w-40 ">Add to cart</button>
              </div>
              <div className="flex items-center justify-center ">
                <div className="flex justify-evenly ">
                   <IoMdShare />  Share 
                   <MdOutlineCompareArrows />  Compare  
                   <IoMdHeartEmpty />  Like  
                </div>
              </div>
          </div>

          <div className="bg-gray-100 relative">
            <Image
              src="/pro2.png" 
              alt="pro2"
              width={400}
              height={300} />
              <div className="p-4 text-left">
              <p className="text-xl font-bold">Lolito</p>
              <p className="font-normal text-gray-600">Luxury big sofa</p>
              <p className="text-black">Rp 7.000.000 </p>
              <span className="text-gray-600"><del> Rp 14.000.000 </del></span>
            </div>
            <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
          -50%
        </div>
          </div>

          <div className="bg-gray-100 relative ">
            <Image
              src="/pro3.jpeg" 
              alt="pro3"
              width={400}
              height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Respira</p>
              <p className="font-normal text-gray-600">Outdoor bar table and stool</p>
              <p className="text-black">Rp 500.000</p>
            </div>
            <div className="absolute top-4 right-4 bg-emerald-400 text-white text-sm font-semibold px-[10px] py-[15px] rounded-full">
          New
        </div>
          </div>

          <div className="bg-gray-100 ">
            <Image
              src="/pro4.png" 
              alt="pro4"
              width={400}
              height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Grifo</p>
              <p className="font-normal text-gray-600">Night lamp</p>
              <p className="text-black">Rp 1.500.000</p>
            </div>
          </div>

          <div className="bg-gray-100 relative ">
            <Image
              src="/pro5.png" 
              alt="pro5"
              width={400}
              height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Muggo</p>
              <p className="font-normal text-gray-600">Small mug</p>
              <p className="text-black">Rp 150.000</p>
            </div>
            <div className="absolute top-4 right-4 bg-emerald-400 text-white text-sm font-semibold px-[10px] py-[15px] rounded-full">
          New
        </div>
          </div>

          <div className="bg-gray-100 relative">
            <Image
              src="/pro6.jpeg" 
              alt="pro6"
              width={400}
              height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Pingky</p>
              <p className="font-normal text-gray-600">Cute bed set</p>
              <p className="text-black">Rp 7.000.000</p>
              <span className="text-gray-600"><del>Rp 14.000.000</del></span>
            </div>
            <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
          -50%
        </div>
          </div>

          <div className="bg-gray-100 relative ">
            <Image
              src="/pro7.jpeg" 
              alt="pro7"
              width={400}
              height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Potty</p>
              <p className="font-normal text-gray-600">Minimalist flower pot</p>
              <p className="text-black">Rp 500.000</p>
            </div>
            <div className="absolute top-4 right-4 bg-emerald-400 text-white text-sm font-semibold px-[10px] py-[15px] rounded-full">
          New
        </div>
          </div>

      </div>
    </div>
  </div>
  <div className='flex justify-center pt-8 pb-4 '>
    <button className="bg-white border border-x-yellow-700 border-y-yellow-700 text-yellow-700 font-semibold py-[6px] px-16 hover:bg-orange-100 hover:text-yellow-700 transition-colors">
      Show More
    </button>
    </div>
    
<Slides />
<Slide2 />
<Footer />
</div>
      </>
      )}
