import type { Widget } from "../../types/Widget";
import "./widget.scss";

const WidgetLayout: React.FC<Widget> = ({
  iconHref,
  iconAlt,
  metadata,
  content,
  modal,
}) => {
  return (
    <div className="container p-2 d-flex flex-column border border-primary">
      {/* Header */}
      <div className="container d-flex flex-row align-items-center">
        <div className="d-flex flex-row flex-grow-1">
          <img className="fs-5" src={iconHref} alt={iconAlt} />
          <h3> {metadata.display_name} </h3>
        </div>
        <button className="fs-5 p-1">Suggest</button>
      </div>

      <div>{metadata.description}</div>

      {/* Content */}
      <div className="container border border-primary text-center mt-2">
        {content === null ? <code>Widget Content</code> : content}
      </div>
      {modal}
    </div>
  );
};

export default WidgetLayout;
