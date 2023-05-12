import { useParams } from "react-router-dom"
import { Loader, Path } from "../../components"
import { useAppDispatch } from "../../ReduxHooks";
import { setPath } from "../../store/pathSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../Api";
import { ToastContainer, toast } from "react-toastify";
import { Technician } from "../../@types/@types";
import './singleshop.css'

const SingleShop = () => {

  const {shopID} = useParams()

  const dispatch = useAppDispatch();

 

const [technician, setTechnician] = useState<Technician>({
  name: '',
  email: '',
  role: '',
  avatar: '',
  shopImages: [],
  description: '',
  shop: '',
  location: '',
  _id: ''
});
  const [loading , setLoading ] = useState(false)
  const [ imageIndex , setImageIndex ] = useState(0)


  useEffect(() => {

    let isMounted = true
    const fetchSingleShop =async()=>{
      setLoading(true)
    try {
      const {data} = await axios.get(`${baseURL}technician/${shopID}`, {withCredentials:true , timeout:5000})
      if(isMounted){
        console.log(data)
        setTechnician(data.technician)
        dispatch(setPath(`/Shops/${data.technician.shop}`));
      

      }
    
        
    
      setLoading(false)
    } catch (error:any) {
    setLoading(false)
     console.log(error)
        if (error.code === "ECONNABORTED") {
          // handle timeout error
          toast.error("Request timed out. Please try again later.");
          return
        }
        toast.error("Something wrong happened try again later"); 
    }
    }
    fetchSingleShop()
    return ()=>{
      isMounted = false
    }

  }, []);



  
  return (
    <section>
      <Path/>
      <ToastContainer/>

      {loading ? <Loader /> :(
        <div className="single-shop-section">
        <div className="single-shop-images">
          <img src={technician.shopImages[imageIndex]} alt="" className="single-shop-main-image"/>
        <div className="single-shop-other-images">
          {
            technician.shopImages.map((item, index)=>(
              <img src={item} alt="" key={index} className="single-shop-other-image" onClick={()=>setImageIndex(index)}/>
            ))
          }
        </div>
         
        </div>
        <div className="single-shop-content">
          <h2>{technician?.location}</h2>
          <div className="reviews-container">

          </div>
          <h5>{technician?.shop}</h5>
          <p>{
            technician?.description}.</p>

            <button>Chat with {technician.name}</button>

        </div>
      </div>
      )}
    </section>
  )
}

export default SingleShop