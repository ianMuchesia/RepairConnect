import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components"
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
    </BrowserRouter>
  )
}

export default App
