
const Registration = () => {
  return (
    <div className="row g-5 mt-3">
      <div className="col-md-7 col-lg-8 mx-auto">
        <h4 className="mb-3">Create your account</h4>
        <form className="needs-validation">
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" required />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required />
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
              <div className="invalid-feedback">
                Please enter a valid email address.
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
export default Registration