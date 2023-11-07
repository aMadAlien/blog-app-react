import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Blog</Link></li>
          <li className="nav-item"><Link to="/user-blog" className="nav-link" aria-current="page">My Blog</Link></li>
          <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
          <li className="nav-item"><button className="nav-link">Logout</button></li>
          <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
          <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
        </ul>
      </header>

      <Outlet />
    </div>
  )
}

export default Layout