import { AiOutlineCloudUpload } from "react-icons/ai";

import Tippy from "@tippyjs/react";
interface Props {
  signUpForm: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatar: string;
    shopImages: string;
    description: string;
    shopName: string;
    location: string;
  };
  handleSignUpFormChange: (event:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShopDetails = ({
  signUpForm,
  handleFileUpload,
  handleSignUpFormChange,
}: Props) => {
  return (
    <div className="shop-details">
      <h4>Shop Details</h4>
      <div className="avatar-wrapper">
        <div className="shop-wrapper">
          <div className="shop-image-container">
            <label>
              {signUpForm.shopImages === "" ? (
                <>
                  <div className="upper-section">
                    <AiOutlineCloudUpload className="upload-icon" />
                    <p className="text-lg">upload shop image</p>
                  </div>
                  <p className="text-recommend">
                    Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or
                    TIFF less than 20MB
                  </p>
                </>
              ) : (
                <Tippy content="Click to upload image">
                  <img
                    src={signUpForm.shopImages}
                    alt="Uploaded file preview"
                    className="shop-image"
                  />
                </Tippy>
              )}
              <input
                type="file"
                name="shopImages"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>
        <div className="input-settings">
          <label htmlFor="shopName">Shop Name</label>
          <input
            type="text"
            id="shopName"
            placeholder="Your name"
            name="shopName"
            value={signUpForm.shopName}
            onChange={handleSignUpFormChange}
          />
        </div>
        <div className="input-settings">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Your name"
            name="location"
            value={signUpForm.location}
            onChange={handleSignUpFormChange}
          />
        </div>

        <div className="description-textarea">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Write Something about your Shop"
            name="description"
            value={signUpForm.description}
            onChange={handleSignUpFormChange}
            rows={15}
            cols={30}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
