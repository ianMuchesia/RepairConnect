import { Link } from "react-router-dom"
import { BsChatLeftText} from 'react-icons/bs'
import { AiOutlineBell, AiOutlineClose, AiOutlineUser } from "react-icons/ai"
import {CiSettings} from 'react-icons/ci'
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
    <ul className="side-bar-links">
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

      <Link to="/Profile/Settings">Setting</Link>
      <CiSettings/>
      </span>
      
    </li>
  </ul>
  </div>
  )
}

export default Sidebar