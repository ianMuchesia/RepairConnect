import { AiOutlineCloudUpload } from "react-icons/ai"


const Settings = () => {
  return (
    <div className="">
      <div className="">
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
  )
}

export default Settings