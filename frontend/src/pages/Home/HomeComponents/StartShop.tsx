import { Link } from "react-router-dom"
import { StartShopImg } from "../../../assets"
import "../home.css"

const StartShop = () => {
  return (
   <div className="startShopSection">
    <h3>Join Our Team of Expert Technicians</h3>
    <div className="startShopContainer">

  
    <div className="startShopImage">
        <img src={StartShopImg} alt="repair now image" />
    </div>
    <div className="startShopContent">
        <Link to="/Questions"><button>JOIN US</button></Link>
        <p>
        "Join our community of skilled technicians and connect with customers in need of your expertise! Our platform allows you to bid on available jobs and communicate directly with customers through our chat feature. Don't miss out on the opportunity to expand your business and reach new customers. Apply to become a part of our network today!
        </p>
    </div>
   </div>
   </div>
  )
}

export default StartShop