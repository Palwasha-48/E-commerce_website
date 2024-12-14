export default function Home() {
    return (
      <div className="min-h-screen bg-gray-50 pt-[20px]">
        <div className="text-center my-8">
          <h1 className="text-xl font-semibold text-gray-600">Share your setup with</h1>
          <h2 className="text-3xl font-bold text-gray-800">#FuniroFurniture</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
        
          <div className="row-span-2">
            <img
              src="/img1.png"
              alt="Setup 1"
              className="w-full h-full object-cover rounded-lg"/>
          </div>
  
          <div>
            <img
              src="/img2.png"
              alt="Setup 2"
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
  
          <div>
            <img
              src="/img3.png"
              alt="Setup 3"
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
  
          <div>
            <img
              src="/img4.png"
              alt="Setup 4"
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
  
          <div className="row-span-2">
            <img
              src="/img5.png"
              alt="Setup 5"
              className="w-full h-full object-cover rounded-g"/>
          </div>

          <div>
            <img
              src="/img6.png"
              alt="Setup 6"
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
  
          <div>
            <img
              src="/img7.png"
              alt="Setup 7"
              className="w-full h-auto object-cover rounded-lg"/>
          </div>

          <div>
            <img
              src="/img8.png"
              alt="Setup 8"
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
        
          <div>
            <img
              src="/img9.png"
              alt="Setup 9"
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
        </div>
      </div>
    );
  }
  