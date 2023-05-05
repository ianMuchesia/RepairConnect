import Tippy from "@tippyjs/react";

import { AiOutlineCloudUpload } from "react-icons/ai";
import { Technician } from "../../../@types/@types";

interface Props {
  userProfile: Technician;
  updateForm: {
    name: string;
    location: string;
    email: string;
    avatar: string;
    shop: string;
    description: string;
  };
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleFilesUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}
const ImageUploader = ({
  userProfile,
  handleFileUpload,
  handleChange,
  handleFilesUpload,
}: Props) => {
  const { shopImages } = userProfile;

  if (shopImages === undefined) {
    return <h2>Something wrong happened, try again later</h2>;
  }

  const MAX_IMAGES = 5;
  const numOfImages = shopImages.length;
  const emptySlots = MAX_IMAGES - numOfImages;

  return (
    <div className="profile-images-uploader-container">
      {shopImages.map((image, index) => (
        <div className="profile-upload-wrapper" key={index}>
          <div className="profile-upload-container">
            <label>
              <Tippy content="Click to upload image">
                <img
                  src={image}
                  alt="Uploaded file preview"
                  className="shop-image"
                />
              </Tippy>
              <input type="file" name="avatar" onChange={handleFileUpload} />
            </label>
          </div>
        </div>
      ))}

      {emptySlots > 0 &&
        Array.from({ length: emptySlots }).map((_, index) => (
          <div className="profile-upload-wrapper" key={`empty-${index}`}>
            {/*  <h4>Shop Image Upload</h4> */}
            <div className="profile-upload-container">
              <label>
               <>
                <div className="profile-upper-section">
                  <AiOutlineCloudUpload className="profile-upload-icon" />
                  <p className="profile-text-lg">Click to upload</p>
                </div>
                <p className="profile-text-recommend">
                  Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or
                  TIFF less than 20MB
                </p>
                </>:
               
                <input
                  type="file"
                  name={`shop-image-${index}`}
                  onChange={(event) => handleFilesUpload(event, index)}
                />
              </label>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ImageUploader;
