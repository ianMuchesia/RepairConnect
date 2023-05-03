import { AiOutlineCloudUpload } from "react-icons/ai"
import ImageUploader from "./ImageUploader"
import SettingsInputs from "./SettingsInputs"


const Settings = () => {
  return (
    <form>
    <div className="profile-settings-wrapper">
     <SettingsInputs/>
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