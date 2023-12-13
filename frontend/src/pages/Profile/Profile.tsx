import {
  Chat,
  Info,
  Notification,
  Settings,
  Sidebar,
} from "./ProfileComponents";
import { useState } from "react";
import "./profile.css";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../../store/ReduxHooks";
import AuthLoader from "../../components/Loader/AuthLoader";
import { useGetProfileQuery } from "../../store/service/Api";
import Create from "./ProfileComponents/Create";
import Bids from "./ProfileComponents/Bids";

const Profile = () => {

  const authState = useAppSelector((state) => state.auth);


  const [sidebar, setSideBar] = useState(false);


  //combine the user role and user id to get the profile
  const combinedArg = `${authState.user.role === "technician"?"technicians":"customers"}/${authState.user.userId}`;

 
  const { data, isLoading } = useGetProfileQuery(combinedArg)


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
        {isLoading && <AuthLoader />}
        <>
          {data?.user && <div className="profileContainer">
            <Routes>
              <Route path="/" element={<Info userProfile={data?.user} />} />
              <Route path="/Settings" element={<Settings userProfile={data?.user} />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/Notification" element={<Notification />} />
              <Route path="/Bids" element={<Bids />} />
              <Route path="/Create" element={<Create />} />
            </Routes>
          </div>}
        </>

      </div>
    </section>
  );
};

export default Profile;
