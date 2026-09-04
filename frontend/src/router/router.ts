import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import PageLayout from "../components/pages/PageLayout";
import PlanHome from "../components/pages/Plan";
import PlanView from "../components/pages/Plan/PlanView";
import PlanList from "../components/pages/Plan/PlanList";
import PlanCreate from "../components/pages/Plan/PlanCreate";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "plan",
        children: [
          { index: true, Component: PlanHome },
          { path: "list", Component: PlanList },
          {
            path: "create",
            Component: PlanCreate,
          },
          {
            path: ":planId",
            Component: PlanView,
            loader: ({ params }) => {
              return { editMode: false, planId: params.planId };
            },
          },
        ],
      },
    ],
  },
]);

export default router;
