import { Link } from "react-router-dom"
import { login } from "../../assets"
import "./login.css"

const Login = () => {
  return (
    <section className="login-section">
      <div className="loginContainer">
        <div className="loginImageContainer"
       >
    <img src={login} alt="login-image" />
    <div className="absoluteloginImage">
      <h2>Welcome Back!</h2>
      <h4>to RepairConnect</h4>
    </div>
        </div>
        <form className="formLogin">
        <h4>Login

        </h4>
        <p>Welcome Back Please login to your account</p>
        <div className="form-input">
          <label htmlFor="email">User Email</label>
          <input 
          type="email"
          name="email"
          id="email"
          placeholder="username@email.com" />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password"
          name="password"
          id="password"
         />
        </div>
        <p>Forgot Password?</p>
        <button>Login</button>
        <p>New User? <span className="signUpLink"><Link to="/SignUp">Sign Up</Link></span></p>
      </form>
      </div>
      

      
    </section>
  )
}

export default Login