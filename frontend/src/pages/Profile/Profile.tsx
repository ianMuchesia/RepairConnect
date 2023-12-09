import {
  Chat,
  Info,
  Notification,
  Settings,
  Sidebar,
} from "./ProfileComponents";
import {  useState } from "react";
import "./profile.css";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";

import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../../store/ReduxHooks";
import AuthLoader from "../../components/Loader/AuthLoader";
import { useGetProfileQuery } from "../../store/service/Api";
import Posts from "./ProfileComponents/Posts";
import Create from "./ProfileComponents/Create";

const Profile = () => {

  const authState = useAppSelector((state) => state.auth);


  const [sidebar, setSideBar] = useState(false);

 

  const combinedArg = `${authState.user.role}/${authState.user.userId}`;
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
              <Route path="/Posts" element={<Posts/>}/>
              <Route path="/Create" element={<
              Create/>}/>
            </Routes>
          </div>}
        </>

      </div>
    </section>
  );
};

export default Profile;
