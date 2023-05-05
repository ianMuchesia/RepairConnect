import { useState } from "react";
import {  Technician } from "../../../@types/@types";
import ImageUploader from "./ImageUploader";
import SettingsInputs from "./SettingsInputs";
interface Props {
  userProfile: Technician;
  
}

const Settings = ({ userProfile }: Props) => {
  const { name, location, email, role, shop,shopImages, description, avatar } =
    userProfile;

  const [updateForm, setUpdateForm] = useState({
    name: name,
    location: location,
    email: email,
    avatar: avatar,
    shop: shop,
    description: description,
    shopImages:shopImages
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
    setUpdateForm(prevForm=>({
      ...prevForm,
      [e.target.name]:e.target.value
    }))
  }
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUpdateForm((prevFrom) => ({
        ...prevFrom,
        [event.target.name]: reader.result as string,
      }));
    };
    
    reader.readAsDataURL(file as Blob);
  };

  const handleFilesUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
   
    const file = event.target.files?.[0];
    const reader = new FileReader(); 
    reader.onloadend = () => {
      setUpdateForm((prevForm) => {
        const updatedShopImages = [...prevForm.shopImages];
      
        updatedShopImages[index] = reader.result as string;
        
        return {
          ...prevForm,
          shopImages: updatedShopImages,
        };
      });
    };
     reader.readAsDataURL(file as Blob); 
    
  };
  return (
    <form>
      <div className="profile-settings-wrapper">
        <SettingsInputs
          userProfile={userProfile}
          updateForm={updateForm}
          handleChange={handleChange}
          handleFileUpload={handleFileUpload}
          
       
        />
        <div className="profile-images-container">
          <h2>Shop Images</h2>
          <p>you can add upto 5 images</p>

          <ImageUploader
            userProfile={userProfile}
            updateForm={updateForm}
            handleChange={handleChange}
          handleFileUpload={handleFileUpload}
          handleFilesUpload={handleFilesUpload}
           
          />
        </div>
      </div>
      <div className="profile-settings-btn">
        <button>SAVE</button>
      </div>
    </form>
  );
};

export default Settings;
