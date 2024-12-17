import Image from "next/image";
export default function Home() {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="text-center">
          <h1 className="text-center text-3xl font-bold text-gray-600 mb-8">Share your setup with</h1>
          <h2 className="text-3xl font-bold text-gray-700">#FuniroFurniture</h2>
        </div>


{/* section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/*          images          */}

          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img1.png"
              alt="Setup 1"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
  
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img2.png"
              alt="Setup 2"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img3.png"
              alt="Setup 3"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img4.png"
              alt="Setup 4"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img5.png"
              alt="Setup 5"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
          
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img6.png"
              alt="Setup 6"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div  className="overflow-hidden shadow-lg">
            <Image
              src="/img7.png"
              alt="Setup 7"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
        
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img8.png"
              alt="Setup 8"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
          
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img9.png"
              alt="Setup 9"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>

        </div>
      </div>
    );
  }

  