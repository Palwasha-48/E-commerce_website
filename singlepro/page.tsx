import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-white min-h-full pb-2'>
      <div className="w-full h-20 bg-pink-100 items-center px-4 py-4 flex flex-wrap gap-4 text-xl pl-20 ">
        <span className='text-gray-500'>Home</span> {'>'} <span className='text-gray-500'>Shop</span> {'>'} <span className='text-gray-600'>|</span> Asgaard sofa
      </div>



      <div className='h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10 items-center justify-center'>
        <div>
          <Image
           src="/singlepagesofa1.png"
           alt="Setup 1"
           width={100}
           height={100}
           className="bg-pink-100 w-96 object-cover pb-10"/>
        </div>
        <div>
          <Image
           src="/singlepagesofa2.png"
           alt="Setup 1"
           width={100}
           height={100}
           className="bg-pink-100 w-96 object-cover pb-10"/>
        </div>
      </div>
    </div>
  )
}

export default page
