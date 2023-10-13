import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import "./../login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";
import TechnicianDetails from "./TechnicianDetails";
import ShopDetails from "./ShopDetails";
import axios from "axios";

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
    shopImages: "",
    description: "",
    shopName: "",
    location: "",
  });

  const handleSignUpFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      name,
      email,
      avatar,
      password,
      confirmPassword,
      location,
      shopImages,
      shopName,
      description,
    } = signUpForm;

    if (
      !name ||
      !email ||
      !avatar ||
      !password ||
      !location ||
      !shopImages ||
      !shopName
    ) {
      toast.error("Please fill all the inputs");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/registerTechnician",
        {
          avatar,
          name,
          email,
          location,
          password,
          description,
          shopImages,
          shopName,
        }
      );

      if (data.success) {
        toast.success("Registration was successful");

        setSignUpForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          avatar: "",
          shopImages: "",
          description: "",
          shopName: "",
          location: "",
        });
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };

  return (
    <form className="technician-form" onSubmit={handleSubmit}>
      <ToastContainer />
      <h3>Sign Up to Get started</h3>
      <div className="details-wrapper">
        <TechnicianDetails
          signUpForm={signUpForm}
          handleSignUpFormChange={handleSignUpFormChange}
          handleFileUpload={handleFileUpload}
        />
        <ShopDetails
          signUpForm={signUpForm}
          handleSignUpFormChange={handleSignUpFormChange}
          handleFileUpload={handleFileUpload}
        />
      </div>
      <div className="settings-btn">
        <button>SIGN UP</button>
      </div>
    </form>
  );
};

export default TechnicianSignUp;
