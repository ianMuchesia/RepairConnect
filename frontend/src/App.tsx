import ScrollToTop from "./utils/scrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home, Login, Profile, Questions, Shop, SignUp, SingleShop, TechnicianSignUp } from "./pages"
import "./index.css"
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "./PrivateRoute";


function App() {




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

      <Route element={<PrivateRoute/>}>

      <Route path="/Profile/*" element={<Profile/>}/>
      </Route>
      <Route path="/TechnicianSignUp" element={<TechnicianSignUp/>}/>
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
