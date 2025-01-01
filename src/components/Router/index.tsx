import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import AuthLayout from "../../layouts/AuthLayout";
import ProjectLayout from "../../layouts/ProjectLayout";
import Signup from "../../pages/Signup";
import ProjectDetail from "../../pages/ProjectDetail";
import MakeProject from "../../pages/MakeProject";
import MakeSchedule from "../../pages/MakeSchedule";
import Intro from "../../pages/Intro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/make" element={<MakeProject />} />
        <Route path="/" element={<ProjectLayout />}>
          <Route index element={<Intro />} />
          <Route path="project/:projectId" element={<ProjectDetail />} />
          <Route path="project/:projectId/schedule" element={<MakeSchedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
