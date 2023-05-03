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

import { Routes, Route, useParams } from "react-router-dom";
import { useAppSelector } from "../../ReduxHooks";
import axios from "axios";
import { baseURL } from "../../Api";
import { Customer, Technician } from "../../@types/@types";
const Profile = () => {
  /* const navigate = useNavigate() */
  const authState = useAppSelector((state) => state.auth);
  const { userId } = useParams();

  const [sidebar, setSideBar] = useState(false);
  const [userProfile, setUserProfile] = useState<Technician | Customer>({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProfileData = async () => {
      try {
        setLoading(true);

        if (userId && authState.user.role !== "") {
          // Check if userId and authState.user are not empty strings
          const { data } = await axios.get(
            `${baseURL}${authState.user.role}/${userId}`,
            { withCredentials: true }
          );
          if (isMounted && data.success) {
            console.log(data);
            setUserProfile(data.user);
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
          <h1>Loading....</h1>
        ) : (
          <div className="profileContainer">
            <Routes>
              <Route path="/" element={<Info userProfile={userProfile} />} />
              <Route path="/Settings" element={<Settings />} />
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
