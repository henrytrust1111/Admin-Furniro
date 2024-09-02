import { RouterProvider, createHashRouter } from "react-router-dom";
import AllPages from "../Containers/AllPages";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";
import Dashboard from "../dashboard/Dashboard";
import AddAttribute from "../Pages/AddAttribute";



const route = createHashRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AddAttribute />
      },
    ],
  },  

  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />
  // },
]);

function Routers() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default Routers;
