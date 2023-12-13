

import "./create.css"

const Create = () => {
  return (
    <div className="profile-create">
    <div className="profile-create-container">
      <form className="profile-create-modal">
        <h4 className="profile-create-title">You can upload upto 5 images of the same item</h4>
        <p className="profile-create-subtitle">Note: The first image will be the cover image</p>
        <div className="profile-create-image-container">
      {
        Array.from({length: 5}).map((_, index) => (
          <div className="profile-create-content" key={index}>
       
      
        
        <div className="profile-create-actions">
          <label htmlFor="file" className="profile-create-button upload-btn">File {index + 1}
            <input hidden={undefined} type="file" id="file"/>
          </label>
        </div>
        <div className="profile-create-result">
           <div className="profile-create-file-uploaded"><p>profile_pic.png</p></div>
        </div>
  </div>
        ))
      }
      </div>
</form>
<div className="profile-create-form-container">
      <form className="profile-create-form">
        <div className="profile-create-form-group">
          <label htmlFor="email">Company Email</label>
          <input required={undefined} name="email" id="email" type="text"/>
        </div>
        <div className="profile-create-form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea required={undefined} cols={50} rows={50} id="textarea" name="textarea"/>          ==
        </div>
        <button type="submit" className="profile-create-form-submit-btn">Submit</button>
      </form>
    </div>

    </div>
    </div>
  )
}

export default Create