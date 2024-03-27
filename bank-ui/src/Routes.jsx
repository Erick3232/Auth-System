import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/index"
import Register from "./pages/register/index"
import Menu from "./pages/menu/index"
import  Services  from "./pages/services/service"
import  Supports  from "./pages/services/support"
import  Cards  from "./pages/services/cards"

const ProjectRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element = { <Login/> }  path="/login" exact />
        <Route element = { <Register/> }  path="/register" />
        <Route element = {<Navigate to="/login" />} path="/" />
        <Route element = {<Menu/>} path="/menu"></Route>
        <Route element = {<Services/>} path="/menu/service"></Route>
        <Route element = {<Cards/>} path="/menu/cards"></Route>
        <Route element = {<Supports/>} path="/menu/support"></Route>
      </Routes> 
     </BrowserRouter>
  )
} 
export default ProjectRoutes