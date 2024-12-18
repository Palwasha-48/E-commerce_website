"use client"

import React, { useState } from "react";
import Image from 'next/image'
import { faUser, faSearch, faHeart, faShoppingCart, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Homepage() {
const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image src="/logo.png" alt="Logo" className="h-12 mr-2" height={290} width={60}/>
                  <Image src="/logoname.png" alt="Logo Name" className="h-6" height={100} width={120}/>
                </div>
                <div className="hidden lg:flex items-center space-x-6">
                  <a href="/Home" className="hover:text-gray-800 text-sm font-medium">Home</a>
                  <a href="/shop" className="hover:text-gray-800 text-sm font-medium">Shop</a>
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
                    className="lg:hidden focus:outline-none">
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
                  </button>
                </div>
              </div>
      
              {menuOpen && (
                <div className="lg:hidden flex flex-col mt-4 space-y-4">
                  <a href="/Home" className="hover:text-gray-800 text-sm font-medium">Home</a>
                  <a href="/shop" className="hover:text-gray-800 text-sm font-medium">Shop</a>
                  <a href="/Blog" className="hover:text-gray-800 text-sm font-medium">Blog</a>
                  <a href="/Contact" className="hover:text-gray-800 text-sm font-medium">Contact</a>
                </div>
              )}
      
      </div>
    
  )
}
