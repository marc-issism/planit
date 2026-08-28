import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import PageLayout from "../components/pages/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [{ index: true, Component: Home }, {}],
  },
]);

export default router;
