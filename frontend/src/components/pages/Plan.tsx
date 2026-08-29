import { useState } from "react";
import { useLoaderData } from "react-router";

const Plan = () => {
  const loaderData = useLoaderData() ?? {};

  const rawPlanningMode = loaderData.planningMode ?? false;

  const [planningMode, setPlanningMode] = useState<boolean>(rawPlanningMode);

  return (
    <>
      <>
        This is the plan page <br />
        Planning mode: {planningMode.toString()} <br />
        {!planningMode && loaderData.planId}
      </>
    </>
  );
};

export default Plan;
