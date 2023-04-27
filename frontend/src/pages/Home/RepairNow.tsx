import { RepairNowImg } from "../../assets"
import "./home.css"

const RepairNow = () => {
  return (
   <div className="repairNowSection">
    <h3>Repair Now</h3>
    <div className="repairNowContainer">

  
    <div className="repairNowImage">
        <img src={RepairNowImg} alt="repair now image" />
    </div>
    <div className="repairNowContent">
        <button>EXPLORE</button>
        <p>
        At RepairConnect, we are committed to providing a wide range of services to meet all your electronic repair needs. From computer repairs to phone screen replacements, we have you covered. Our team of experienced professionals is dedicated to delivering top-notch service and ensuring that your devices are up and running in no time. So why wait? Explore our full range of services today and discover how we can help you keep your devices running smoothly.
        </p>
    </div>
   </div>
   </div>
  )
}

export default RepairNow