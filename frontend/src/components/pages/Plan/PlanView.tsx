import { useState } from "react";
import { useLoaderData } from "react-router";

const PlanView = () => {
  const loaderData = useLoaderData() ?? {};

  const rawEditMode = loaderData.planningMode ?? false;

  const [editMode, setEditMode] = useState<boolean>(rawEditMode);

  return (
    <>
      <>
        This is the plan page <br />
        Planning mode: {editMode.toString()} <br />
        {loaderData.planId && <>{loaderData.planId}</>}
      </>
    </>
  );
};

export default PlanView;
