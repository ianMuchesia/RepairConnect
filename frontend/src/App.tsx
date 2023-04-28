import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home, Login, Questions, SignUp } from "./pages"
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
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
