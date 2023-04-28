import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { logo } from "../../assets"
import "./navbar.css"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const navigate = useNavigate()
  const [ toggle , setToggle ] = useState(false)

  const closeToggle=()=>{
    setToggle(false)
  }
  const navigateButton =()=>{
    setToggle(false)
    navigate('/Login')
  }
  return (
    <header>
      <nav>
      <span >{toggle?<AiOutlineClose className='toggle' onClick={()=>setToggle(false)}/>:<AiOutlineMenu className='toggle'  onClick={()=>setToggle(true)}/>}</span>
        <ul className={`${toggle? "nav-bar":"hide-navbar"}`}>
          <li className='toggle'><AiOutlineClose onClick={()=>setToggle(false)}/></li>
          <li onClick={closeToggle}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeToggle}>
            <Link to="/">Services</Link>
          </li>
          <li onClick={closeToggle}>
            <Link to="/">About</Link>
          </li>
          <li onClick={navigateButton} className='dropdown-login'>Login</li>
        </ul>

      </nav>
      
      <img src={logo} alt="logo" className="logo" />
     
     
        
     <Link to="Login"><button className="Login">Login</button></Link> 
    </header>
  )
}

export default Navbar