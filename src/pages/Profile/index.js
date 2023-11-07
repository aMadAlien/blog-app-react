import { useEffect, useState } from 'react';
import axiosInstance from '../../config/axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Profile = () => {
  const [user, setUser] = useState({});

  const getUser = () => {
    axiosInstance.get('user')
      .then(res => setUser(res.data.user))
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    axiosInstance.put('user', {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      currentPassword: user.currentPassword,
      password: user.password,
    })
    .then(res => {})
    .catch(e => console.error(e))
  }

  return (
    <div>
      <h1 className='my-3'>Profile</h1>
      <form onSubmit={handleSubmit} className="needs-validation">
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input
              value={user.firstName}
              onChange={e => setUser({ ...user, firstName: e.target.value })}
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              required />
          </div>
          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input
              value={user.lastName}
              onChange={e => setUser({ ...user, lastName: e.target.value })}
              type="text"
              className="form-control"
              id="lastName"
              placeholder=""
              required />
          </div>
          <div className="col-12">
            <label htmlFor="username" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                value={user.username}
                onChange={e => setUser({ ...user, username: e.target.value })}
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                required />
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              required />
          </div>
          <div className="col-12">
            <label htmlFor="currentPassword" className="form-label">current password</label>
            <input
              value={user.currentPassword ?? ''}
              onChange={e => setUser({ ...user, currentPassword: e.target.value })}
              type="password"
              className="form-control"
              id="currentPassword"
              placeholder="5RjeG4fc7y"
              minLength="8"
              maxLength="24" />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
              type="password"
              className="form-control"
              id="password"
              placeholder="5RjeG4fc7y"
              minLength="8"
              maxLength="24" />
          </div>
        </div>
        <hr className="my-4" />
        <button className="w-100 btn btn-primary btn-lg" type="submit">Update</button>
      </form>
    </div>
  )
}

export default Profile