import { Chat, Info, Notification, Settings, Sidebar } from "./ProfileComponents"
import {useState} from 'react'
import "./profile.css"
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs'

import {Routes, Route} from 'react-router-dom'
const Profile = () => {

  const [ sidebar , setSideBar] = useState(false)
  return (
   <section className="profile">
    <div className="sidebar-toggle" onClick={()=>setSideBar(true)}>
      <BsLayoutSidebarInsetReverse  className="sidebar-icons"/>
      <h5>menu</h5>
    </div>
   <div className={`${sidebar?"":"hide-sidebar"}`}>
<Sidebar setSideBar={setSideBar}/>
   </div>
   <div className="profileContainer">
   <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/Notification" element={<Notification />} />
  </Routes>
   </div>
   </section>
  )
}

export default Profile