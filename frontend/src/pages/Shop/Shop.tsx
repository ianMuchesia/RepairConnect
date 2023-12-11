import { useState , useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Loader, Path } from "../../components";
import { useAppDispatch } from "../../store/ReduxHooks";
import { setPath } from "../../store/pathSlice";
import "./shop.css";

import axios from "axios";
import { baseURL } from "../../Api";
import { Technician } from "../../@types/@types";
import { Card, Categorize, ShopLayout } from "./ShopComponents";
import { ToastContainer, toast } from "react-toastify";
import { useGetTechniciansQuery } from "../../store/service/Api";


const Shop = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();


  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  
  const {data , error, isLoading} = useGetTechniciansQuery({
    location:selectedCategory,
    search:search,
    sort:""
  })

  

  
  
  const [ technicians , setTechnicians ] = useState<Technician[]>([])



useEffect(()=>{   
  dispatch(setPath(location.pathname));
  if(data?.success){
    setTechnicians(data.technicians)
  }

} , [data])

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
        {isLoading && <Loader/>} 
        {error && 'data' in error && error?.status && toast.error(error.status)}
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
