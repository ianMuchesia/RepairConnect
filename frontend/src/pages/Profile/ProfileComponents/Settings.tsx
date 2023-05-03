import { AiOutlineCloudUpload } from "react-icons/ai"


const Settings = () => {
  return (
    <form>
    <div className="profile-settings-wrapper">
      <div className="profile-details-settings">
        <div className="profile-name-settings">
          <label htmlFor="name">Name</label>
          <input type="text"
          id="name" placeholder="Your name"
           />
        </div>
        <div className="profile-name-settings">
          <label htmlFor="email">Email</label>
          <input type="email"
          id="email" placeholder="yourname@email.com"
           />
        </div>
        <div className="profile-name-settings">
          <label htmlFor="">Shop Name</label>
          <input type="text"
          id="shopName" placeholder="Your name"
           />
        </div>

        <div className="profile-description-textarea">
          <label htmlFor="">Description</label>
          <textarea 
          id="shopName" placeholder="Write Something about yourself"
          rows={5}
          cols={30} />
        </div>
       
      </div>
      <div className="profile-images-container">
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

        <div className="profile-upload-wrapper">
          <h4>Shop Image Upload</h4>
        <div className="profile-upload-container">
          <label>
            <div className="profile-upper-section">
              <AiOutlineCloudUpload className="profile-upload-icon"/>
              <p className="profile-text-lg">Click to upload</p>
            </div>
            <p className="profile-text-recommend">
                Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
              </p>
              <input
              type="file"
              name="upload-image"
              
          
            />
          </label>
        </div>
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