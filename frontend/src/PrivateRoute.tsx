import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "./store/ReduxHooks"


const PrivateRoute = () => {

    const isAuthenticated = useAppSelector(state=>state.auth.isAuthenticated)

    return isAuthenticated? <Outlet/> : <Navigate to="/Login"/>
}

export default PrivateRoute