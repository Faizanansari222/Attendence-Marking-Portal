import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "../Views/Register";
import Login from "../Views/Login";
import Dashboard from "../Views/Dashboard";
import AddProduct from "../Views/AddProduct";
// import "./index.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  }, {
    path: "/register",
    element: <Register/>,
  },{
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/addproduct",
    element: <AddProduct/>,
  },
]);

export const RouterAdd = () => {
  return <RouterProvider router={Router} />;
};

export default Router;
