import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/index";
import Register from "./pages/register/index"

const ProjectRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element = { <Login/> }  path="/login" exact />
        <Route element = { <Register/> }  path="/register" />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes> 
     </BrowserRouter>
  )
} 
export default ProjectRoutes