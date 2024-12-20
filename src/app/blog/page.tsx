import React from 'react'
import Image from 'next/image'

export default function page () {
  return (

      <div className='bg-white min-h-full pb-4'>
      <div className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] inset-0 bg-cover backdrop-blur-xl  bg-center flex justify-center items-center text-center'
        style={{ backgroundImage: "url('/bgimg.jpeg')" }}>
        <div className="text-center text-black">
          <Image src="/logo.png" alt="Logo" height={50} width={100}/>
          <h1 className="text-[50px]"> Blog </h1>
          <p className="text-[20px]"> <b> Home </b> {'>'} Blog</p>
        </div>
      </div>
    </div>
  )
}
