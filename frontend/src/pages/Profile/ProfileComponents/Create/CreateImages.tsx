


interface CreateImagesProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}
const CreateImages = ({images,setImages}:CreateImagesProps) => {


  const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
  
    if (selectedFile) {
      const fileReader = new FileReader();
  
      fileReader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = fileReader.result as string;
        setImages(newImages);
      };
  
      fileReader.readAsDataURL(selectedFile);
    }
  };
  

  return (
    <div className="profile-create-modal">
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
                <p>{images[index]?  `file selected` : 'No file selected'}</p>
              </div>
            </div>
          </div>
        ))}
  </div>
</div>
  )
}

export default CreateImages