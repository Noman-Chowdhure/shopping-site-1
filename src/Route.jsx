import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Landing from "./component/landingPage/Landing";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Landing></Landing>
        }
      ]
    },
  ]);

  export default router