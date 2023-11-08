import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axios";

const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axiosInstance.post('/auth/register', {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value
    })
    .then(res => {
      localStorage.setItem('access_token', res.data.access_token);
      navigate('/user-blog');
    })
    .catch(e => console.error(e))
  }

  return (
    <div className="row g-5 mt-3">
      <div className="col-md-7 col-lg-8 mx-auto">
        <h4 className="mb-3">Create your account</h4>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" required />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required />
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
              <div className="invalid-feedback">
                Please enter a valid email address.
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
export default Registration