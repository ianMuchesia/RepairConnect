import {
  Chat,
  Info,
  Notification,
  Settings,
  Sidebar,
} from "./ProfileComponents";
import { useState, useEffect } from "react";
import "./profile.css";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";

import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../../ReduxHooks";
import axios from "axios";
import { baseURL } from "../../Api";
import {  Technician } from "../../@types/@types";
import { Loader } from "../../components";
const Profile = () => {
  /* const navigate = useNavigate() */
  const authState = useAppSelector((state) => state.auth);
  

  const [sidebar, setSideBar] = useState(false);
  const [userProfile, setUserProfile] = useState<{}>({});
  

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProfileData = async () => {
      try {
        setLoading(true);

        if ( authState.user.role !== "") {
          // Check if userId and authState.user are not empty strings
          const { data } = await axios.get(
            `${baseURL}${authState.user.role}/${authState.user.userId}`,
            { withCredentials: true }
          );
          if (isMounted && data.success) {
           
            setUserProfile(data.user as Technician);
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
    return () => {
      isMounted = false;
    };
  }, [authState.user.role]);

  
 

  return (
    <section className="profile">
      <div className="sidebar-toggle" onClick={() => setSideBar(true)}>
        <BsLayoutSidebarInsetReverse className="sidebar-icons" />
        <h5>menu</h5>
      </div>
      <div className="profile-wrapper">
        <div className={`${sidebar ? "" : "hide-sidebar"}`}>
          <Sidebar setSideBar={setSideBar} />
        </div>

        {loading ? (
          
         <Loader/>
        ) : (
          <div className="profileContainer">
            <Routes>
              <Route path="/" element={<Info userProfile={userProfile as Technician} />} />
              <Route path="/Settings" element={<Settings userProfile={userProfile as Technician}/>} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/Notification" element={<Notification />} />
            </Routes>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
