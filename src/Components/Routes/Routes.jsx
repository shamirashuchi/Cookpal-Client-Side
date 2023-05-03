import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import SpecificCard from "../SpecificCard/SpecificCard";
import Blog from "../Blog/Blog";

import Register from "../../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      //  {
      //   path:'/chef/:id',
      //   element:<SpecificCard></SpecificCard>
      //  }
    ],
  },
  {
    path: "chef",
    element: <PrivateRoute><SpecificCard></SpecificCard></PrivateRoute>,
    children: [
      {
        path: "/chef/:id",
        element: <PrivateRoute><SpecificCard></SpecificCard></PrivateRoute>,
      },
    ],
  },
  {
    path:"/blog",
    element:<Blog></Blog>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  }
]);
export default router;