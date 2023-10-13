import {useState} from 'react'
import { Link } from "react-router-dom";

import "./login.css";
import {  toast } from "react-toastify";

import axios from 'axios';
import { baseURL } from '../../Api';
import { login } from '../../assets';

const SignUp = () => {


  const [ signUpForm , setSignUpForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
    setSignUpForm(prevForm=>({
      ...prevForm,
      [event.target.name]:event.target.value
    }))
  }

  const handleSubmit =async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const {name, email, password, confirmPassword} = signUpForm
    if(!name ||!email || !password ||!confirmPassword){
      toast.warn("please fill all the inputs")
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const {data} = await axios.post(`${baseURL}auth/registerUser`,{
        name,email, password
      })
      if(data.success){
        toast.success("Registration was successful");

        setSignUpForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
       
        });
      }
    } catch (error:any) {
      console.log(error);
      if (error.response.data.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
    }
  
  return (
    <section className="login-section">
 
      <div className="loginContainer">
        <form className="formLogin" onSubmit={handleSubmit}>
          <h4>Sign Up</h4>
          <p>Welcome, Please Sign up to open your account</p>
          <div className="form-input">
            <label htmlFor="name">User Name</label>
            <input type="text" name="name" id="name" placeholder="User Name"
            value={signUpForm.name}
            onChange={handleChange} />
          </div>
          <div className="form-input">
            <label htmlFor="email">User Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="username@email.com"
              value={signUpForm.email}
            onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"
            value={signUpForm.password}
            onChange={handleChange} />
          </div>
          <div className="form-input">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword"
             value={signUpForm.confirmPassword}
             onChange={handleChange}/>
          </div>

          <button>Sign Up</button>
          <p>
            Already have an Account?{" "}
            <span className="signUpLink">
              <Link to="/Login">Log in</Link>
            </span>
          </p>
        </form>
        <div className="loginImageContainer">
          <img src={login} alt="login-image" />
          <div className="absoluteloginImage">
            <h2>Welcome!</h2>
            <h4>to RepairConnect</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
