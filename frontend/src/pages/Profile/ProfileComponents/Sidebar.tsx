import { Link } from "react-router-dom"
import { BsChatLeftText} from 'react-icons/bs'
import { AiOutlineBell, AiOutlineClose, AiOutlineUser } from "react-icons/ai"
import {CiSettings} from 'react-icons/ci'
import "./sidebar.css"
import "../profile.css"
interface Props{
  setSideBar:React.Dispatch<React.SetStateAction<boolean>>;
}


const Sidebar = ({setSideBar}:Props) => {
  const closeSideBar=()=>{
    setSideBar(false)
  }
  return (
    <div className="sidebar-container">
    {/* <ul className="side-bar-links">
      <li onClick={()=>setSideBar(false)}>
        <AiOutlineClose className="sidebar-icons"/>
      </li>
    <li className="side-bar-link" onClick={closeSideBar}>
      <span>
      <Link to="/Profile">Info</Link>
      <AiOutlineUser/>
        </span>
    </li>
    <li className="side-bar-link" onClick={closeSideBar}>
      <span>

      <Link to="/Profile/Notification">Notifications</Link>
      <AiOutlineBell/>
      </span>
     
    </li>
    <li className="side-bar-link" onClick={closeSideBar}>
      <span>
      <Link to="/Profile/Chat">Chat</Link>
      <BsChatLeftText/>
      </span>
      
    </li>
    <li className="side-bar-link" onClick={closeSideBar}>
      <span>

      <Link to="/Profile/Settings">Posts</Link>
      <CiSettings/>
      </span>
      
    </li>
    <li className="side-bar-link" onClick={closeSideBar}>
      <span>

      <Link to="/Profile/Settings">Upload</Link>
      <CiSettings/>
      </span>
      
    </li>
    
    <li className="side-bar-link" onClick={closeSideBar}>
      <span>

      <Link to="/Profile/Settings">Setting</Link>
      <CiSettings/>
      </span>
      
    </li>

  </ul>

  <ul>
    <li></li>
    <span>Analytics</span>
    <Link to="/">Dashboard</Link>
  </ul> */}
   <div className="sidebar">
      {/* <div className="dots"> */}
      <div onClick={()=>setSideBar(false)}>
        <AiOutlineClose className="sidebar-icons"/>
      </div>
      {/* </div> */}
      <div className="profile">
        {/* <ion-icon name="person-outline"></ion-icon> */}
      </div>
      <ul>
        <span>Analytics</span>
        <li>
          <a href="#">
            {/* <ion-icon name="notifications-outline"></ion-icon> */}
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <ion-icon name="notifications-outline"></ion-icon> */}
            <p>Insights</p>
          </a>
        </li>
      </ul>
      <ul>
        <span>Content</span>
        <li className="noti">
          <a href="#">
            {/* <ion-icon name="notifications-outline"></ion-icon> */}
            <p>Notifications</p>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <ion-icon name="wallet-outline"></ion-icon> */}
            <p>Wallets</p>
          </a>
        </li>
        {/* <!-- likes --> */}
        <li className="likes">
          <a href="#">
            {/* <ion-icon name="heart-outline"></ion-icon> */}
            <p>likes</p>
          </a>
        </li>
      </ul>
      <ul>
        <span>Custom</span>
        <li className="switch-theme">
          <a href="#">
            {/* <ion-icon name="moon-outline"></ion-icon> */}
            <p>Darkmode</p>
            <button>
              <div className="circle"></div>
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <ion-icon name="log-out-outline"></ion-icon> */}
            <p>logout</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar