import { useState } from "react";
import { Technician } from "../../@types/@types";


interface ShopDetailsProps {
    technician: Technician;
 
    }
const ShopDetails = ({technician}:ShopDetailsProps) => {

//imageIndex is used to change the image in the single shop page
    const [ imageIndex , setImageIndex ] = useState(0)
  return (
    <div className="shop-details-container">
           <div className="single-shop-images">
          <img src={technician?.shopImages[imageIndex]} alt="" className="single-shop-main-image"/>
        <div className="single-shop-other-images">
          {
            technician?.shopImages.map((item, index)=>(
              <img src={item} alt="" key={index} className="single-shop-other-image" onClick={()=>setImageIndex(index)}/>
            ))
          }
        </div>
         
        </div>
        <div className="single-shop-content">
          <h2>{technician?.location.name}</h2>
          <div className="reviews-container">

          </div>
          <h5>{technician?.shop}</h5>
          <p>{
            technician?.description}.</p>
             <button className="single-shop">Chat with {technician?.name}</button>
    </div>
    </div>
  )
}

export default ShopDetails