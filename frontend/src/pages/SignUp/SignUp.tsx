import { Link, useLocation } from "react-router-dom"
import { login } from "../../assets"
import "../Login/login.css"

const SignUp = () => {

  const location = useLocation()
  const isTechnician = location.state?.isTechnician;
  console.log(isTechnician)

  return (
    <section className="login-section">
    <div className="loginContainer">
    
      <form className="formLogin">
      <h4>Sign Up

      </h4>
      <p>Welcome, Please Sign up to open your account</p>
      <div className="form-input">
        <label htmlFor="name">{isTechnician? "Technician":"User"} Name</label>
        <input 
        type="text"
        name="name"
        id="name"
        placeholder="User Name" />
      </div>
      <div className="form-input">
        <label htmlFor="email">{isTechnician? "Technician":"User"} Email</label>
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
      
      <button>Sign Up</button>
     {!isTechnician && <p>Already have an Account? <span className="signUpLink"><Link to="/Login">Log in</Link></span></p>}
    </form>
    <div className="loginImageContainer"
     >
  <img src={login} alt="login-image" />
  <div className="absoluteloginImage">
    <h2>Welcome!</h2>
    <h4>to RepairConnect</h4>
  </div>
      </div>
    </div>
    

    
  </section>
  )
}

export default SignUp