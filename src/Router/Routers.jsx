import { RouterProvider, createHashRouter } from "react-router-dom";
import AllPages from "../Containers/AllPages";
import Login from "../auth/Login";



const route = createHashRouter([
  {
    path: "/dashboard",
    element: <AllPages />,
    children: [

    ],
  },  

  {
    path: "/",
    element: <Login />
  },
]);

function Routers() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default Routers;
