import Homebg from "./Homebg";
import Homethree from "./Homethree";
import Homepro from "./Homepro";
import HomePics from "./HomePics";
import HomeSlides from "./HomeSlides";

export default function HomePage() {
  return ( 
    <>
  <div className="bg-white min-h-screen pb-4">   
    <Homebg />
    <Homethree />
    <Homepro />
    <HomePics />
    <HomeSlides />
  </div>
      </>
)
}
