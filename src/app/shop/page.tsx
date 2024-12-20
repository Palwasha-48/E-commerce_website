import React from 'react'
import Image from 'next/image'
import { IoMdHeartEmpty, IoMdShare } from "react-icons/io";
import { MdFilterList, MdOutlineCompareArrows } from "react-icons/md";
import { BsViewList } from 'react-icons/bs';
import { HiViewGrid } from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';
import Link from 'next/link';
import { LuBadgeCheck } from 'react-icons/lu';
import { RiHandHeartLine } from 'react-icons/ri';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const page = () => {
  return (
    <><div className='bg-white min-h-full pb-4'>
      <div className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] inset-0 bg-cover bg-center backdrop-blur-md flex justify-center items-center text-center'
        style={{ backgroundImage: "url('/bgimg.jpeg')" }}>
        <div className="text-center text-black">
          <h1 className="text-[50px]"> Shop </h1>
          <p className="text-[20px]"> <b> Home </b> {'>'} Shop</p>
        </div>
      </div>

      <div className="w-full h-auto bg-pink-100 items-center px-4 py-4 flex flex-wrap gap-4 text-xl pl-[40px]">
  <div className="flex items-center gap-4 mx-8">
    <MdFilterList /> 
    <span>Filter</span>
  </div>
  <HiViewGrid />
  <BsViewList />
  <span className="text-gray-600 hidden md:inline"> | </span>
  <span className="text-gray-600">Showing 1–16 of 32 results</span>

  <div className="flex flex-col md:flex-row items-center gap-2 pl-0 md:pl-64">
    <label className="flex items-center gap-2 pl-5">
      Show 
      <input type="text" placeholder="16" className="h-[20px] w-[40px] text-sm p-1" />
    </label>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-2 pl-0 md:pl-5">
    <label className="flex items-center gap-2">Short by <input type="text" placeholder="Default" className="h-[20px] w-[120px] text-sm p-1" /></label>
  </div>
      </div>
<Link href='/singlepro'> 
      <div className="container mx-auto px-4 py-0 pt-12">
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
          <div className="bg-gray-100 relative">
           <Image
           src="/bgpic.png"
           alt='pro2'
           width={400}
           height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Leviosa</p>
              <p className="font-normal text-gray-600">Stylish cafe chair</p>
              <p className="text-black">Rp 2.500.000</p>
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
          <div className="bg-gray-100 relative">
           <Image
           src="/bgpic.png"
           alt='pro2'
           width={400}
           height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Leviosa</p>
              <p className="font-normal text-gray-600">Stylish cafe chair</p>
              <p className="text-black">Rp 2.500.000</p>
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
          <div className="bg-gray-100 relative">
           <Image
           src="/bgpic.png"
           alt='pro2'
           width={400}
           height={300} />
            <div className="p-4 text-left">
              <p className="text-xl font-bold">Leviosa</p>
              <p className="font-normal text-gray-600">Stylish cafe chair</p>
              <p className="text-black">Rp 2.500.000</p>
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
        </div>
      </div>
</Link>

      <div className='justify-center items-center flex gap-8 pt-8 pb-8'>
        <button className='bg-amber-200 h-12 w-12 rounded'>1</button>
        <button className='bg-orange-50 h-12 w-12 rounded hover:bg-orange-100'>2</button>
        <button className='bg-orange-50 h-12 w-12 rounded hover:bg-orange-100'>3</button>
        <button className='bg-orange-50 h-12 w-16 rounded hover:bg-orange-100'>Next</button>
      </div>

      <div className='w-full h-auto flex flex-wrap bg-orange-50 justify-center items-center gap-x-10 gap-y-5 p-5'>
<div className='flex gap-1'>
          <div className='text-6xl md:text-5xl'>
            <HiOutlineTrophy />
          </div>
          <div className='text-xl grid'>
            <div className='text-black font-bold'>
              High Quality
            </div>
            <div className='text-gray-500'>
              crafted from top materials
            </div>
          </div>
        <div/>
</div>
<div className='flex gap-1'>
        <div className='text-6xl md:text-5xl'>
          <LuBadgeCheck />
        </div>
        <div className='text-xl grid'>
          <div className='text-black font-bold'>
            Warranty Protection
          </div>
          <div className='text-gray-500'>
            Over 2 years
          </div>
        </div>
</div>
<div className='flex gap-1'>
        <div className='text-6xl md:text-5xl'>
          <RiHandHeartLine />
        </div>
        <div className='text-xl grid'>
          <div className='text-black font-bold'>
            Free Shipping
          </div>
          <div className='text-gray-500'>
            Order over 150 $
          </div>
        </div>
</div>
<div className='flex gap-1'>
        <div className='text-6xl md:text-5xl'>
          <TfiHeadphoneAlt />
        </div>
        <div className='text-xl grid'>
          <div className='text-black font-bold'>
            24 / 7 Support
          </div>
          <div className='text-gray-500'>
            Dedicated support
          </div>
        </div>
</div>
        </div>
<div/>
    </div></>
  )
}
export default page
