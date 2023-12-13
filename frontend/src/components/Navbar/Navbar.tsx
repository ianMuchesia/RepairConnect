import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { logo, userNavbarImage } from "../../assets"
import "./navbar.css"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../store/ReduxHooks'
import { ToastContainer, toast } from 'react-toastify'
import { setisNotAuthenticated } from '../../store/authSlice'
import axios from 'axios'
import { baseURL } from '../../Api'

const Navbar = () => {
  const navigate = useNavigate()
  

  const dispatch = useAppDispatch();

  const authState = useAppSelector((state) => state.auth);
  const [ toggle , setToggle ] = useState(false)

  const closeToggle=()=>{
    setToggle(false)
  }
  const navigateButton =()=>{
    setToggle(false)
    navigate('/Login')
  }
  const handleLogOut = async () => {
    try {
      const { data } = await axios.get(`${baseURL}auth/logout`, {
        withCredentials: true,
      });
      if (data.success) {
        toast.success("You are logged out");
        dispatch(setisNotAuthenticated());
        navigate("/");
        setToggle(false)
      
      }
    } catch (error: any) {
      console.log(error);
      if (error.code === "ECONNABORTED") {
        // handle timeout error
        toast.error("Request timed out. Please try again later.");
        return
      }
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };
  return (
    <header>
    
      <nav>
   
      <span >{toggle?<AiOutlineClose className='toggle' onClick={()=>setToggle(false)}/>:<AiOutlineMenu className='toggle'  onClick={()=>setToggle(true)}/>}</span>
        <ul className={`${toggle? "nav-bar":"hide-navbar"}`}>
          <li className='toggle'><AiOutlineClose onClick={()=>setToggle(false)}/></li>
          <li onClick={closeToggle}>
            <Link to="/">Home</Link>
          </li>
          {authState.isAuthenticated && <li onClick={closeToggle}>
            <Link to="/Shops">Shops</Link>
          </li>}
          <li onClick={closeToggle}>
            <Link to="/">Services</Link>
          </li>

          <li onClick={closeToggle}>
            <Link to="/">About</Link>
          </li>
          {authState.isAuthenticated?<li onClick={handleLogOut} className="dropdown-login">
            Logout
          </li>: <li onClick={navigateButton} className="dropdown-login">
            Login
          </li>}
        </ul>

      </nav>
      
      <img src={logo} alt="logo" className="logo" />
     
     
        
      {authState.isAuthenticated?
      <div className='authenticated-div'>
      <Link to={`/Profile`} className="Login">
        <div className="profile-navbar">
          <img src={userNavbarImage} alt="profile" className="profile-image-navbar" />
          <p>{authState.user.name}</p>
        </div>
        
      </Link>
      <button onClick={handleLogOut}>Log Out</button>
      </div>: <Link to="Login" className="Login">
        {" "}
        <button>Login</button>{" "}
      </Link>}
    </header>
  )
}

export default Navbar