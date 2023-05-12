import { useState , useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Loader, Path } from "../../components";
import { useAppDispatch } from "../../ReduxHooks";
import { setPath } from "../../store/pathSlice";
import "./shop.css";

import axios from "axios";
import { baseURL } from "../../Api";
import { Technician } from "../../@types/@types";
import { Card, Categorize, ShopLayout } from "./ShopComponents";
import { ToastContainer, toast } from "react-toastify";


const Shop = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();

  

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const [ technicians , setTechnicians ] = useState<Technician[]>([])

  const [loading , setLoading ] = useState(false)


  useEffect(()=>{
    dispatch(setPath(location.pathname));
    let isMounted = true;
    const fetchRepairShops = async()=>{
      try {
        setLoading(true)
        const { data } = await axios.get(`${baseURL}technician`, {withCredentials:true  ,timeout: 5000})

       
        if(isMounted){
         
          setTechnicians(data.technicians)
          setLoading(false)
        }
      } catch (error: any) {
        console.log(error)
        if (error.code === "ECONNABORTED") {
          // handle timeout error
          toast.error("Request timed out. Please try again later.");
          return
        }
        toast.error("Something wrong happened try again later");
      }finally{
        setLoading(false)
      }
    }
    fetchRepairShops()
    return ()=>{
      isMounted = false
    }

  },[])


  return (
    <>
      <Path />
      <ToastContainer/>
      <div className="shop-container">
        <Categorize
          search={search}
          setSelectedCategory={setSelectedCategory}
          setSearch={setSearch}
        />
        <div className="shop-items-container">
        <ShopLayout /> 
        {loading && <Loader/>} 
        <div className="shop-card-container">
          
          {technicians.length>0 && technicians.map(technician=>(
            <Card technician={technician} key={technician._id}/>
          ))}
          </div> 
        </div>
        
      </div>
    </>
  );
};

export default Shop;
