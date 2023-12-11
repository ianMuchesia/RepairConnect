import { Link } from "react-router-dom";
import { Technician } from "../../../@types/@types"

interface Props{
    technician: Technician;
}
const Card = ({technician}:Props) => {
  return (
    <div className="shop-card" >
              <img src={technician.avatar} className="shop-card-image" alt={technician.name} />
              <div className="shop-card-details">
              <h5 className="shop-card-location">
                <span>Location:</span>{technician.location.name}
              </h5>
              <h6>{technician.name}</h6>

              </div>
              
              <Link to={`/Shops/${technician._id}`}>
              <button className="shop-card-button">Visit Shop</button>
              </Link>
              
             
             
            </div>
  )
}

export default Card