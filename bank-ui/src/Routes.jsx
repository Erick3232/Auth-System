import Transaction from "./pages/Transaction";
import Login from "./pages/login";
import Register from "./pages/register"

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Login/> },
    { path: "register", element: <Register/>},
  ]);
  return element
}
