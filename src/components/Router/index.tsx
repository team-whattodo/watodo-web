import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import AuthLayout from "../../layouts/AuthLayout";
import ProjectLayout from "../../layouts/ProjectLayout";
import Signup from "../../pages/Signup";
import ProjectDetail from "../../pages/ProjectDetail";
import MakeProject from "../../pages/MakeProject";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<ProjectLayout />}>
          <Route index element={<ProjectDetail />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Route>
        <Route path="/make" element={<MakeProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
