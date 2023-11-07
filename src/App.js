import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import UserBlog from "./pages/UserBlog";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Blog />} />
        <Route path="user-blog" element={<UserBlog />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
