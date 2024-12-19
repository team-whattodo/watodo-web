import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../../pages/Login"
import AuthLayout from "../../layouts/AuthLayout"
import ProjectLayout from "../../layouts/ProjectLayout"
import Signup from "../../pages/Signup"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<ProjectLayout />}>
        </Route>

        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default Router