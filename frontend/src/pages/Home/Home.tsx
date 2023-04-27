import Hero from "./Hero"
import HomeService from "./HomeService"
import RepairNow from "./RepairNow"
import StartShop from "./StartShop"
import Testimonial from "./Testimonial"
import "./home.css"


const Home = () => {
  return (
    <section>
        <Hero/>
        <HomeService/>
        <RepairNow/>
        <StartShop/>
        <Testimonial/>
    </section>
  )
}

export default Home