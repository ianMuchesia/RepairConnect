import React, { useState, useEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
/* import "../Login/login.css"; */
import axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const TechnicianSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTechnician = location.state?.isTechnician;
  useEffect(() => {
    if (!isTechnician) {
      navigate("/Questions");
    }
  }, []);

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
    shopImage: "",
    description: "",
    shopName: "",
    location: "",
  });

  const handleSignUpFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSignUpForm((prevFrom) => ({
        ...prevFrom,
        [event.target.name]: reader.result as string,
      }));
    };
    reader.readAsDataURL(file as Blob);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(signUpForm);
  };

  return (
    <form className="technician-form" onSubmit={handleSubmit}>
      <h3>Sign Up to Get started</h3>
      <div className="settings-wrapper">
        <div className="details-settings">
        <div className="avatar-wrapper">
            <h4>Avatar Upload</h4>
            <div className="avatar-container">
              <label>
                {signUpForm.avatar === "" ? (
                  <div className="upper-section">
                    <AiOutlineCloudUpload className="upload-icon" />
                    <p className="text-lg">Click to upload</p>
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
          </div>
          <div className="name-settings">
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
          <div className="name-settings">
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
          <div className="name-settings">
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
          <div className="name-settings">
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
        <div className="details-settings">
        <div className="images-container">
        

          <div className="upload-wrapper">
            <h4>Shop Image Upload</h4>
            <div className="upload-container">
              <label>
                {signUpForm.shopImage === "" ? (
                  <>
                    <div className="upper-section">
                      <AiOutlineCloudUpload className="upload-icon" />
                      <p className="text-lg">Click to upload</p>
                    </div>
                    <p className="text-recommend">
                      Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF
                      or TIFF less than 20MB
                    </p>
                  </>
                ) : (
                  <Tippy content="Click to upload image">
                    <img
                      src={signUpForm.shopImage}
                      alt="Uploaded file preview"
                      className="shop-image"
                    />
                  </Tippy>
                )}
                <input
                  type="file"
                  name="shopImage"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
            
            <div className="name-settings">
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
          <div className="name-settings">
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
              rows={15}
              cols={30}
            />
          </div>
           
          </div>
        </div>
        </div>
      </div>
      
    </form>
  );
};

export default TechnicianSignUp;
