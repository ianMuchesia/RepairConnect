import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home, Login, Profile, Questions, SignUp, TechnicianSignUp } from "./pages"
import "./index.css"


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <main className="wrapper">
    <Routes>
      <Route path="/" element={<Home/>}/>
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
