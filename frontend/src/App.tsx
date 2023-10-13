import {useEffect} from'react'
import ScrollToTop from "./utils/scrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home, Login, Profile, Questions, Shop, SignUp, SingleShop, TechnicianSignUp } from "./pages"
import "./index.css"
import { useAppDispatch } from "./ReduxHooks"
import checkAuthentication from "./store/authCheck"
import { ToastContainer } from 'react-toastify';


function App() {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);


  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <ToastContainer/>
    <main className="wrapper">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shops" element={<Shop/>}/>
      <Route path="/Shops/:shopID" element={<SingleShop/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Questions" element={<Questions/>}/>
      <Route path="/Profile/*" element={<Profile/>}/>
      <Route path="/TechnicianSignUp" element={<TechnicianSignUp/>}/>
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
