import { Link } from "react-router-dom"
import { BsChatLeftText } from 'react-icons/bs'
import { AiOutlineBell, AiOutlineClose, AiOutlineUser } from "react-icons/ai"
import { CiSettings } from 'react-icons/ci'
import "./sidebar.css"
import "../profile.css"
interface Props {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}


const Sidebar = ({ setSideBar }: Props) => {

  return (
    <div className="sidebar-container">
     
      <div className="sidebar">
        {/* <div className="dots"> */}
        <div onClick={() => setSideBar(false)}  className="dots">
          <AiOutlineClose className="sidebar-icons" />
     
        </div>
        {/* </div> */}
        <div className="profile">
          <span>
            <Link to="/Profile"><AiOutlineUser /></Link>
            
          </span>
        </div>
        <ul>
          <li>
            <Link to="/Profile" className="a-link">
              <AiOutlineUser />
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="a-link">
              <AiOutlineUser />
              <p>Profile</p>

            </Link>
          </li>
        </ul>
        <ul>
          <span>Content</span>
          <li className="noti">


            <Link to="/Profile/Notification" className="a-link">
              <AiOutlineBell />

              <p>Notifications</p>
            </Link>

          </li>
          <li>

            <Link to="/Profile/Chat" className="a-link">
              <BsChatLeftText />
              <p>Chat</p>
            </Link>
          </li>
          {/* <!-- likes --> */}
         
        </ul>
        <ul>
          <span>Custom</span>
          <li className="switch-theme">


            <Link to="/Profile/Settings" className="a-link">
              <p>Settings</p>
              <CiSettings />
            </Link>


          </li>
          <li>
            <button className="">
              {/* <ion-icon name="log-out-outline"></ion-icon> */}
              <p>logout</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar