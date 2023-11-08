import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axios";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axiosInstance.post('/auth/login', {
      username: e.target.username.value,
      password: e.target.password.value
    })
    .then(res => localStorage.setItem('access_token', res.data.access_token) )
    .catch(e => console.error(e))
    navigate('/')
  }

  return (
    <div className="row g-5 mt-3">
      <div className="col-md-7 col-lg-8 mx-auto">
        <h4 className="mb-3">Log in </h4>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="you@example.com" required />
              <div className="invalid-feedback">
                Please enter your username.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="5RjeG4fc7y" minLength="8" maxLength="24" required />
              <div className="invalid-feedback">
                Please enter your password.
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  )
}
export default Login