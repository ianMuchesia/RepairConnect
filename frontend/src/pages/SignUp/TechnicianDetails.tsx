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
  handleSignUpFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TechnicianDetails = ({
  signUpForm,
  handleFileUpload,
  handleSignUpFormChange,
}: Props) => {
  return (
    <div className="technician-details">
      <h4>Registration</h4>
      <div className="avatar-wrapper">
        
        <div className="avatar-container">
          <label>
            {signUpForm.avatar === "" ? (
              <div className="upper-section">
                <AiOutlineCloudUpload className="upload-icon" />
                <p className="text-lg">upload profile image</p>
              </div>
            ) : (
              <Tippy content="Click to upload image">
                <img
                  src={signUpForm.avatar}
                  alt="Uploaded file preview"
                  className="avatar-image"
                />
              </Tippy>
            )}

            <input type="file" name="avatar" onChange={handleFileUpload} />
          </label>
        </div>
        {/* text boxes */}
        <div className="input-settings">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            name="name"
            value={signUpForm.name}
            onChange={handleSignUpFormChange}
          />
        </div>
        <div className="input-settings">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            name="email"
            value={signUpForm.email}
            onChange={handleSignUpFormChange}
          />
        </div>
        <div className="input-settings">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder=""
            name="password"
            value={signUpForm.password}
            onChange={handleSignUpFormChange}
          />
        </div>
        <div className="input-settings">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            placeholder=""
            name="confirmPassword"
            value={signUpForm.confirmPassword}
            onChange={handleSignUpFormChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnicianDetails;
