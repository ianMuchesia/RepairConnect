
import { AiOutlineCloudUpload } from 'react-icons/ai'

const ImageUploader = () => {
  return (
    <div className="profile-upload-wrapper">
         {/*  <h4>Shop Image Upload</h4> */}
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
  )
}

export default ImageUploader