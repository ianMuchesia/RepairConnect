import { Customer, Technician } from "../../../@types/@types"
import { userNavbarImage } from "../../../assets"
interface Props{
  userProfile: {}; 
}

const Info = ({userProfile}:Props) => {

  const {name , location} = userProfile as Customer|Technician

 console.log(userProfile)
  return (
    <div className="info-section">
      <div className="info-name-container">
        <div className="info-avatar">
          <img src={userNavbarImage} alt="avatar-image" />
        </div>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
      <div className="info-details-container">
        <h5><span>Email adress: </span>name@yahoo.com</h5>
        <h5><span>Phone Number: </span>name@yahoo.com</h5>
        <h5><span>Shop Name: </span>name@yahoo.com</h5>
        <div className=""><h5><span>About: </span></h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae iste quos aperiam harum nesciunt quidem eveniet, excepturi officia dignissimos.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Info