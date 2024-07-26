import { createBrowserRouter } from "react-router-dom";
import DataPlan from "./pages/DataPlan";
import Home from "./pages/Home";
import App from "./App";
import Legal from "./pages/Legal";
import Terms from "./pages/Terms";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "dataplan",
        element: <DataPlan />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
    ],
  },
//   {
//     path: "auth",
//     element: <Auth />,
//     children: [
//       {
//         path: "signup",
//         element: <Signup />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
]);

export default router;