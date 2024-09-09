import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Landing from "./component/landingPage/Landing";
import LocomotiveScroll from 'locomotive-scroll';
import ManPage from "./component/ManPage/ManPage";

const locomotiveScroll = new LocomotiveScroll();


const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Landing></Landing>
        },
        {
          path:'/man',
          element:<ManPage></ManPage>
        }
      ]
    },
  ]);

  export default router