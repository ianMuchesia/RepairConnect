import { Link, useNavigate } from "react-router-dom";
import { login } from "../../assets";
import "./login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { baseURL } from "../../Api";
import axios from "axios";
import { useAppDispatch } from "../../store/ReduxHooks";
import { setIsAuthenticated } from "../../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = loginForm;
    if (!email || !password) {
      toast.warn("please fill all the inputs");
      return;
    }

    try {
      const { data } = await axios.post(
        `${baseURL}auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true, timeout: 5000 }
      );
      console.log(data)
      if (data.success) {
        toast.success("Login successful!");

        const {name , userId , role} = data.user
        dispatch(setIsAuthenticated({
            name,
            userId,
            role
        }))

        setLoginForm({
          email: "",
          password: "",
        });
      
        setTimeout(()=>{
          navigate('/Profile')
        }, 2000)
      }
    } catch (error: any) {
      console.log(error);
      if (error.code === "ECONNABORTED") {
        // handle timeout error
        toast.error("Request timed out. Please try again later.");
        return
      }
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };
  return (
    <section className="login-section">
   
      <div className="loginContainer">
        <div className="loginImageContainer">
          <img src={login} alt="login-image" />
          <div className="absoluteloginImage">
            <h2>Welcome Back!</h2>
            <h4>to RepairConnect</h4>
          </div>
        </div>
        <form className="formLogin" onSubmit={handleSubmit}>
          <h4>Login</h4>
          <p>Welcome Back Please login to your account</p>
          <div className="form-input">
            <label htmlFor="email">User Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="username@email.com"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>
          <p>Forgot Password?</p>
          <button>Login</button>
          <p>
            New User?{" "}
            <span className="loginLink">
              <Link to="/login">Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
