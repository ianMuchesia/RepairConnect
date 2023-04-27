import Hero from "./Hero"
import HomeService from "./HomeService"
import RepairNow from "./RepairNow"
import StartShop from "./StartShop"
import "./home.css"


const Home = () => {
  return (
    <section>
        <Hero/>
        <HomeService/>
        <RepairNow/>
        <StartShop/>
    </section>
  )
}

export default Home