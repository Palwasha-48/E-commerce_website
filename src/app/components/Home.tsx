import Footer from "./Footer"
import Navbar from "./Navbar";
import Homebg from "./Homebg";
import Homethree from "./Homethree";
import Homepro from "./Homepro";
import HomePics from "./HomePics";
import HomeSlides from "./HomeSlides";

export default function HomePage() {
  return ( 
    <>
    <div className="bg-white min-h-screen pb-4">   
    <Navbar />
    <Homebg />
    <Homethree />
    <Homepro />
    <HomePics />
       <HomeSlides />
    <Footer />
</div>
      </>
)
}
