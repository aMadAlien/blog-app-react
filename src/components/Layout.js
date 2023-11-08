import { Fragment } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import axiosInstance from '../config/axios';

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  console.log(token);
  const logout = () => {
    token &&
      axiosInstance.post('/auth/logout')
        .then(res => {
          localStorage.clear();
          navigate("/login");
        })
        .catch(e => console.error(e))
  }

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Blog</Link></li>
          { token &&
            <Fragment>
              <li className="nav-item"><Link to="/user-blog" className="nav-link" aria-current="page">My Blog</Link></li>
              <li className="nav-item"><button onClick={logout} className="nav-link">Logout</button></li>
            </Fragment>
          }
          <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
          { !token && 
            <Fragment>
              <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
              <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
            </Fragment>
          }
        </ul>
      </header>

      <Outlet />
    </div>
  )
}

export default Layout