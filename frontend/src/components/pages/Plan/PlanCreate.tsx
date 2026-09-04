import usePlanCreateWidgetsStore from "../../../store/planCreateWidgets";
import WidgetLayout from "../../widgets/WidgetLayout";
import "./PlanCreate.scss";

import Modal from "../../Modal/Modal";
import useModalToggle from "../../Modal/useModalToggle";
import WidgetPreviewCard from "../../widgets/WidgetPreviewCard";
import { WIDGET_METADATA } from "../../widgets/constants";

const PlanCreate = () => {
  const selectedWidgets = usePlanCreateWidgetsStore((state) => state.widgets);

  const { open, close, shouldBeOpen } = useModalToggle(false);

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
              return <WidgetLayout {...widget} key={widget.metadata.id} />;
            })}
          </div>
        )}

        {/* Add Widget Button */}
        <div className="plan-create__add-widget-icon">
          <img src="/public/icons/add-24.svg" alt="Add Widget" onClick={open} />
        </div>
      </div>

      <Modal isOpen={shouldBeOpen} handleClose={close} width={800} height={500}>
        <div className="d-flex flex-row">
          {WIDGET_METADATA.map((widget) => (
            <WidgetPreviewCard {...widget} key={widget.id} />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default PlanCreate;
