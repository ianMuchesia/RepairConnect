import { Link } from "react-router-dom";
import {  Technician } from "../../../@types/@types"

import { userNavbarImage } from "../../../assets"
interface Props{
  userProfile: Technician; 
}

const Info = ({userProfile}:Props) => {

  if(userProfile === undefined){
    return <h2>Something went wrong , try again later</h2>
  }
 
  const {name , location, email, role, shop, description} = userProfile 

  
  return (
    <>
    <div className="info-section">
      <div className="info-name-container">
        <div className="info-avatar">
          <img src={userNavbarImage} alt="avatar-image" />
        </div>
        <h3>{name}</h3>
        <h4>{location?.name}</h4>
      </div>
      <div className="info-details-container">
        <h5><span>Email adress: </span>{email}</h5>
        <h5><span>Phone Number: </span>+2571000000</h5>
        <h5><span>Location: </span>{location?location.name:"Location not provided yet"}</h5>
        {role === 'technician' && <h5><span>Shop Name: </span>{shop}</h5>}
        {role === 'technician' && <div className=""><h5><span>About: </span></h5>
        <p>{description}.</p>
        </div>}
        
      </div>
     
    </div>
    <div className="edit-info-btn-container">
     <Link to='/Profile/Settings' ><button className="edit-info-btn">Edit</button></Link>
     </div>
     </>
  )
}

export default Info