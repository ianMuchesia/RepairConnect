import { AiOutlineCloudUpload } from "react-icons/ai"


const Settings = () => {
  return (
    <form>
    <div className="settings-wrapper">
      <div className="details-settings">
        <div className="name-settings">
          <label htmlFor="name">Name</label>
          <input type="text"
          id="name" placeholder="Your name"
           />
        </div>
        <div className="name-settings">
          <label htmlFor="email">Email</label>
          <input type="email"
          id="email" placeholder="yourname@email.com"
           />
        </div>
        <div className="name-settings">
          <label htmlFor="">Shop Name</label>
          <input type="text"
          id="shopName" placeholder="Your name"
           />
        </div>

        <div className="description-textarea">
          <label htmlFor="">Description</label>
          <textarea 
          id="shopName" placeholder="Write Something about yourself"
          rows={5}
          cols={30} />
        </div>
       
      </div>
      <div className="images-container">
        <div className="avatar-wrapper">
        <h4>Avatar Upload</h4>
        <div className="avatar-container">
          <label>
          <div className="upper-section">
              <AiOutlineCloudUpload className="upload-icon"/>
              <p className="text-lg">Click to upload</p>
            </div>
          <input
              type="file"
              name="upload-avatar"
              
          
            />
          </label>
        </div>
        </div>

        <div className="upload-wrapper">
          <h4>Shop Image Upload</h4>
        <div className="upload-container">
          <label>
            <div className="upper-section">
              <AiOutlineCloudUpload className="upload-icon"/>
              <p className="text-lg">Click to upload</p>
            </div>
            <p className="text-recommend">
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
    <div className="settings-btn">

    <button>SAVE</button>
    </div>
    
    </form>
  )
}

export default Settings