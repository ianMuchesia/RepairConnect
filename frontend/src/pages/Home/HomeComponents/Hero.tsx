import { hero } from "../../../assets"
import "../home.css"
import {AiOutlineArrowRight} from "react-icons/ai"

const Hero = () => {
  return (
    <div className="heroSection">
        <div className="heroContent">
            <h3>Welcome</h3>
            <h1>RepairConnect</h1>
            <p>Are you tired of dealing with broken phones, laptops, and other electronics? RepairConnect is here to help! Our platform makes it easy to find and connect with experienced repair professionals who can get your devices up and running in no time.</p>
            <button>Get Started Today</button>
            <h4>Visit Shops<AiOutlineArrowRight/></h4>
        </div>
        <div className="heroImage-container">
            <img src={hero} alt="hero image" className="heroImage"/>
        </div>
    </div>
  )
}

export default Hero