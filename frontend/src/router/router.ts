import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import PageLayout from "../components/pages/PageLayout";
import MyPlans from "../components/pages/MyPlans";
import Plan from "../components/pages/Plan";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [
      { index: true, Component: Home },
      { path: "plans", Component: MyPlans },
      {
        path: "plan/create",
        Component: Plan,
        loader: () => ({ planningMode: true }),
      },
      {
        path: "plan/:planId",
        Component: Plan,
        loader: ({ params }) => {
          return { planningMode: false, planId: params.planId };
        },
      },
    ],
  },
]);

export default router;
