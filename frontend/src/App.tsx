import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home } from "./pages"


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <main>
    <Routes>
      <Route path="/" element={<Home/>}/>

    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
