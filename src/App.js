import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import SingleBlog from "./Pages/SingleBlog";
import Blogs from "./components/Blog";
import SharedBlogLayout from "./components/SharedBlogLayout";
import SharedLayout from "./components/SharedLayout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedDashboardRoute from "./Pages/ProtectedDashboardRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <ProtectedDashboardRoute>
                <Dashboard />
              </ProtectedDashboardRoute>
            }
          />
        </Route>

        <Route path="blogs/:blogTitle" element={<SharedBlogLayout />}>
          <Route index element={<SingleBlog />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
