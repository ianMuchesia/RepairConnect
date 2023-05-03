import { AppDispatch } from "./index"
import { baseURL } from "../Api"
import { setIsAuthenticated, setisNotAuthenticated } from "./authSlice"
import axios from "axios"




const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {
            const {data} = await axios.get(`${baseURL}auth/showMe`, {withCredentials: true})
         
            console.log(data)
            if(data.success){
                const {name , userId , role} = data.user
                dispatch(setIsAuthenticated({
                    name,
                    userId,
                    role
                }))
                
            }
            

        } catch (error) {
            dispatch(setisNotAuthenticated())
        }
    }
}


export default checkAuthentication