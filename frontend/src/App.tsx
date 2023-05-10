import {useEffect} from'react'
import ScrollToTop from "./utils/scrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home, Login, Profile, Questions, Shop, SignUp, TechnicianSignUp } from "./pages"
import "./index.css"
import { useAppDispatch } from "./ReduxHooks"
import checkAuthentication from "./store/authCheck"


function App() {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);


  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <main className="wrapper">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shops" element={<Shop/>}/>
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
