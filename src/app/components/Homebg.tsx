import React from 'react'

const homebg = () => {
  return (
    <div className="bg-white min-h-full pb-0">   
      {/*  home page  -----  bg part    */}
        <div
        className="relative w-full h-full sm:h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-center justify-center pl-[300px]"
        style={{ backgroundImage: "url('/homepagemain.jpeg')" }}>
          <div className="bg-[#fdf1e3] p-6 sm:p-8 lg:p-10 w-11/12 max-w-md rounded-lg shadow-lg">
            <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-600 mb-2">New Arrival</p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#9c772f] mb-4">Discover Our New Collection</h1>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#9c772f] text-white uppercase font-bold py-2 px-4 sm:py-2 sm:px-6 rounded hover:bg-[#7d5c24] transition duration-300">Buy Now</button>
          </div>
        </div>
    </div>
  )
}

export default homebg