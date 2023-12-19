import { ChangeEvent, useState } from "react";

const CreateImages = () => {

    const [images, setImages] = useState<Blob[]>([]);

    const handleFileChange = async (index: number, event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files && event.target.files[0];
  
      if (selectedFile) {
        const fileReader = new FileReader();
  
        fileReader.onload = () => {
          const blob = new Blob([fileReader.result as ArrayBuffer]);
          const newImages = [...images];
          newImages[index] = blob;
          setImages(newImages);
        };
  
        fileReader.readAsArrayBuffer(selectedFile);
      }
    };
  

  return (
    <form className="profile-create-modal">
    <h4 className="profile-create-title">You can upload upto 5 images of the same item</h4>
    <p className="profile-create-subtitle">Note: The first image will be the cover image</p>
    <div className="profile-create-image-container">
  {Array.from({ length: 5 }).map((_, index) => (
          <div className="profile-create-content" key={index}>
            <div className="profile-create-actions">
              <label htmlFor={`file-${index}`} className="profile-create-button upload-btn">
                File {index + 1}
                <input
                  hidden={true}
                  type="file"
                  id={`file-${index}`}
                  onChange={(event) => handleFileChange(index, event)}
                />
              </label>
            </div>
            <div className="profile-create-result">
              <div className="profile-create-file-uploaded">
                <p>{images[index]?.size ? `${images[index].size} bytes` : 'No file selected'}</p>
              </div>
            </div>
          </div>
        ))}
  </div>
</form>
  )
}

export default CreateImages