
import { Hero, HomeService, RepairNow, StartShop, Testimonial } from "./HomeComponents"
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