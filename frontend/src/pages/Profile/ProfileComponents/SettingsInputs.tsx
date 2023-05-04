import { AiOutlineCloudUpload } from 'react-icons/ai'
import {useState} from 'react'
import { Technician } from '../../../@types/@types';
interface Props{
  userProfile: Technician; 
}

const SettingsInputs = ({userProfile}:Props) => {
   const {name , location, email, role, shop, description, avatar} = userProfile 
 
console.log(userProfile)
  const [updateForm,setUpdateForm ] = useState({
    name:name,
    location:location,
    email:email,
   avatar:role,
    shop:shop,
    description:description
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
    setUpdateForm(prevForm=>({
      ...prevForm,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <div className="profile-details-settings">
    <div className="profile-avatar-wrapper">
      <h4>Avatar Upload</h4>
      <div className="profile-avatar-container">
        <label>
        <div className="profile-upper-section">
            <AiOutlineCloudUpload className="profile-upload-icon"/>
            <p className="profile-text-lg">Click to upload</p>
          </div>
        <input
            type="file"
            name="upload-avatar"
            
        
          />
        </label>
      </div>
      </div>
      <div className="profile-name-settings">
        <label htmlFor="name">Name</label>
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
      <div className="profile-name-settings">
        <label htmlFor="">Shop Name</label>
        <input type="text"
        id="shopName" placeholder="Your name"
        name='shop'
        value={updateForm.shop || ""}
        onChange={handleChange}
         />
      </div>

      <div className="profile-description-textarea">
        <label htmlFor="">Description</label>
        <textarea 
        id="shopName" placeholder="Write Something about yourself"
        rows={12}
        cols={30} 
        name='description'
        value={updateForm.description || ""}
        onChange={handleChange}/>
      </div>
     
    </div>
  )
}

export default SettingsInputs