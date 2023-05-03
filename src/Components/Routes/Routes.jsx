import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import SpecificCard from "../SpecificCard/SpecificCard";
import Blog from "../Blog/Blog";

import Register from "../../Register/Register";
import Login from "../Login/Login";
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
    element: <SpecificCard></SpecificCard>,
    children: [
      {
        path: "/chef/:id",
        element: <SpecificCard></SpecificCard>,
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