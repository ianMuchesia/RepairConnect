import { AiOutlineCloudUpload } from 'react-icons/ai'
import Tippy from "@tippyjs/react";
import { Technician } from '../../../@types/@types';
import { SelectLocation } from '../../../utils/selectLocation';
interface Props{
  userProfile: Technician; 
  updateForm: {
    name: string;
    location: string;
    email: string;
    avatar: string;
    shop: string;
    description: string;
};
handleChange: (event:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}

const SettingsInputs = ({userProfile, updateForm, handleFileUpload, handleChange, handleChangeSelect}:Props) => {
 



  

  return (
    <div className="profile-details-settings">
    <div className="profile-avatar-wrapper">
      <h4>Avatar Upload</h4>
      <div className="profile-avatar-container">
        <label>
       {updateForm.avatar ===""? (<><div className="profile-upper-section">
            <AiOutlineCloudUpload className="profile-upload-icon"/>
            <p className="profile-text-lg">Click to upload</p>
            <p className="profile-text-lg">Profile</p>
          </div>
          </> ):
          <Tippy content="Click to upload image">
          <img
            src={updateForm.avatar}
            alt="Uploaded file preview"
            className="shop-image"
            
           
          />
        </Tippy>}
        <input
            type="file"
            name="avatar"
            onChange={handleFileUpload}
        
          />
        </label>
      </div>
      </div>
      <div className="profile-name-settings">
        <label htmlFor="name">Full Name</label>
        <input type="text"
        id="name" placeholder="Your name"
        name='name'
        value={updateForm.name || ""}
        onChange={handleChange}
         />
      </div>
      <div className="profile-name-settings">
        <label htmlFor="email">Email</label>
        <input type="email"
        id="email" placeholder="yourname@email.com"
        name='email'
        value={updateForm.email || ""}
        onChange={handleChange}
         />
      </div>
   
    {userProfile.role === 'technician' &&  <div className="profile-name-settings">
        <label htmlFor="">Shop Name</label>
        <input type="text"
        id="shopName" placeholder="Your name"
        name='shop'
        value={updateForm.shop || ""}
        onChange={handleChange}
         />
      </div>}
      <div className="profile-name-settings">
        <label htmlFor="location">Location</label>
        <select 
        id="location" placeholder="location"
        name='location'
        value={updateForm.location || ""}
        onChange={handleChangeSelect}
         >
          <option value="">Select a location</option>
          {SelectLocation.map((location, index) => <option key={index} value={location}>{location}</option>)}
         </select>
      </div>

     {userProfile.role === 'technician' &&  <div className="profile-description-textarea">
        <label htmlFor="shopName">Description</label>
        <textarea 
        id="shopName" placeholder="Write Something about yourself"
        rows={12}
        cols={30} 
        name='description'
        value={updateForm.description || ""}
        onChange={handleChange}/>
      </div>}
     
    </div>
  )
}

export default SettingsInputs