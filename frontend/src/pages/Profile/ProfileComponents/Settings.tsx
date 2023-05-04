import { Customer, Technician } from "../../../@types/@types";
import ImageUploader from "./ImageUploader"
import SettingsInputs from "./SettingsInputs"
interface Props{
  userProfile: Technician; 
}

const Settings = ({userProfile}:Props) => {

  return (
    <form>
    <div className="profile-settings-wrapper">
     <SettingsInputs userProfile={userProfile}/>
      <div className="profile-images-container">
      <h2>Shop Images</h2>
      <p>you can add upto 5 images</p>
<div className="profile-images-uploader-container">
        <ImageUploader/>
        <ImageUploader/>
        <ImageUploader/>
        <ImageUploader/>
        <ImageUploader/>
        </div>
      </div>
      
    </div>
    <div className="profile-settings-btn">

    <button>SAVE</button>
    </div>
    
    </form>
  )
}

export default Settings