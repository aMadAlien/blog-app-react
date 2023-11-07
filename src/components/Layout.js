import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Blog</Link></li>
          <li class="nav-item"><Link to="/profile" class="nav-link">Profile</Link></li>
          <li class="nav-item"><button class="nav-link">Logout</button></li>
          <li class="nav-item"><Link to="/login" class="nav-link">Login</Link></li>
          <li class="nav-item"><Link to="/register" class="nav-link">Register</Link></li>
        </ul>
      </header>

      <Outlet />
    </div>
  )
}

export default Layout