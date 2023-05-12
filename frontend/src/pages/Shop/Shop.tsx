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


const Shop = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();

  dispatch(setPath(location.pathname));

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const [ technicians , setTechnicians ] = useState<Technician[]>([])

  const [loading , setLoading ] = useState(false)

  useEffect(()=>{
    let isMounted = true;
    const fetchRepairShops = async()=>{
      try {
        setLoading(true)
        const { data } = await axios.get(`${baseURL}technician`, {withCredentials:true})

        if(isMounted){
         
          setTechnicians(data.technicians)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    fetchRepairShops()
    return ()=>{
      isMounted = false
    }

  },[])
  console.log(technicians)

  return (
    <>
      <Path />
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
