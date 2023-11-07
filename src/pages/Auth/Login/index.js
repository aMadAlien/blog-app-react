
const Login = () => {
  return (
    <div className="row g-5 mt-3">
      <div className="col-md-7 col-lg-8 mx-auto">
        <h4 className="mb-3">Log in </h4>
        <form className="needs-validation">
          <div className="row g-3">
            <div className="col-12">
              <label for="email" className="form-label">Username or Email</label>
              <input type="text" className="form-control" id="username-email" placeholder="you@example.com" required />
              <div className="invalid-feedback">
                Please enter your username or email address.
              </div>
            </div>
            <div className="col-12">
              <label for="address" className="form-label">Password</label>
              <input type="password" className="form-control" id="address" placeholder="5RjeG4fc7y" minLength="8" maxLength="24" required />
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