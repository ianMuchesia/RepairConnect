import {useState} from 'react'
import {Link} from 'react-router-dom'
import { logo } from "../../assets"
import "./navbar.css"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [ toggle , setToggle ] = useState(false)

  return (
    <header>
      <nav>
      <span >{toggle?<AiOutlineClose className='toggle' onClick={()=>setToggle(false)}/>:<AiOutlineMenu className='toggle'  onClick={()=>setToggle(true)}/>}</span>
        <ul className={`${toggle? "nav-bar":"hide-navbar"}`}>
          <li className='toggle'><AiOutlineClose onClick={()=>setToggle(false)}/></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li className='dropdown-login'>Login</li>
        </ul>

      </nav>
      
      <img src={logo} alt="logo" className="logo" />
     
     
        
      <button className="Login">Login</button>
    </header>
  )
}

export default Navbar