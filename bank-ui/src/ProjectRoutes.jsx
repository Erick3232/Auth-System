import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Login } from "./account/login/index"
import { Register } from "./account/register/index"
import { Menu } from "./menu/index"

const ProjectRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element = { <Login/> }  path="/login" exact />
        <Route element = { <Register/> }  path="/register" />
        <Route element = {<Navigate to="/menu" />} path="/" />
        <Route element = {<Menu/>} path="/menu/:token"/>
      </Routes> 
     </BrowserRouter>
  )
} 
export default ProjectRoutes