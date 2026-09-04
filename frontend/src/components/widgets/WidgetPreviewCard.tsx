import usePlanCreateWidgetsStore from "../../store/planCreateWidgets";
import type { WidgetPreviewCardProps } from "../../types/Widget";
import "./WidgetPreviewCard.scss";

const WidgetPreviewCard: React.FC<WidgetPreviewCardProps> = ({
  id,
  display_name,
  description,
}) => {
  const addWidget = usePlanCreateWidgetsStore((state) => state.addWidget);

  return (
    <div className="widget-preview-card">
      <div className="widget-preview-card__header">{display_name}</div>
      <div className="widget-preview-card__description">{description}</div>
      <div className="widget-preview-card__footer">
        <button
          onClick={() =>
            addWidget({
              metadata: {
                id: id,
                name: "Test",
                display_name: display_name,
                description: description,
              },
              content: <></>,
            })
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default WidgetPreviewCard;
