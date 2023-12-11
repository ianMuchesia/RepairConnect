import { useParams } from "react-router-dom"
import { Loader, Path } from "../../components"
import { useAppDispatch } from "../../store/ReduxHooks";
import { setPath } from "../../store/pathSlice";
import { useEffect, useState } from "react";


import { Technician } from "../../@types/@types";
import './singleshop.css'
import { useGetSingleTechnicianQuery } from "../../store/service/Api";
import ShopDetails from "./ShopDetails";
import ShopMap from "./ShopMap";

const SingleShop = () => {

  const {shopID} = useParams()

 
  const dispatch = useAppDispatch();

  //shopID is the id of the technician
  const {data,  error} = useGetSingleTechnicianQuery(shopID!)



const [technician, setTechnician] = useState<Technician|null>(null)


//set the path to the single shop page
  useEffect(() => {
    dispatch(setPath(`/Shops/single shop`));
    if(data?.success){
      setTechnician(data.user)
    }
  }, [data]);



  
  return (
    <section>
      <Path/>

  

      {technician === null? <Loader/> :(
        <>
        <div className="single-shop-section">
          <ShopDetails technician={technician}/>
          <ShopMap location={technician.location}/>
     

         

        </div>
      
       </>
      )}
    </section>
  )
}

export default SingleShop