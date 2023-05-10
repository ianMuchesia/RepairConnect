import { Technician } from "../../../@types/@types"

interface Props{
    technician: Technician;
}
const Card = ({technician}:Props) => {
  return (
    <div className="shop-card" key={technician._id}>
              <img src={technician.avatar} className="shop-card-image" alt={technician.name} />
              <div className="shop-card-details">
              <h5 className="shop-card-location">
                <span>Location:</span>{technician.location}
              </h5>
              <h6>{technician.name}</h6>

              </div>
              
              <button className="shop-card-button">Visit Shop</button>
              
             
             
            </div>
  )
}

export default Card