import usePlanCreateWidgetsStore from "../../../store/planCreateWidgets";
import WidgetLayout from "../../widgets/WidgetLayout";
import "./PlanCreate.scss";

const PlanCreate = () => {
  const selectedWidgets = usePlanCreateWidgetsStore((state) => state.widgets);

  return (
    <>
      <div className="plan-create">
        {/* Plan Create Header */}
        <div className="plan-create__header">
          {selectedWidgets.length < 1 ? (
            <div>
              So, you want to plan a hangout, huh?
              <br />
              Why don't you get started by adding a widget.
            </div>
          ) : (
            <div>
              <div>Plan Name</div>
              <input type="text"></input>
            </div>
          )}
        </div>

        {/* Widget Container */}
        {selectedWidgets.length > 0 && (
          <div className="plan-create__widgets">
            {selectedWidgets.map((widget) => {
              return <WidgetLayout {...widget} />;
            })}
          </div>
        )}

        {/* Add Widget Button */}
        <div className="plan-create__add-widget-icon">
          <img
            src="../../../../../public/icons/add-24.svg"
            onClick={() => console.log("hello")} ///TODO: on click open a modal to select widgets
          />
        </div>
      </div>
    </>
  );
};

export default PlanCreate;
